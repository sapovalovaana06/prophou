"use strict";

if ( !HTMLFormElement.prototype.reportValidity ) {
  HTMLFormElement.prototype.reportValidity = function() {
    return true;
  }
}

(function() {
  // https://stackoverflow.com/questions/23925520/javascript-traverse-dom-until-class-is-reached
  function closestForm(el, cls) {
    while (el  && el !== document) {
      if (el.tagName === "FORM") return el
      el = el.parentNode;
    }
    return null;
  }

  // https://stackoverflow.com/a/9251540
  function addHidden(theForm, key, value) {
    // Create a hidden input element, and append it to the form:
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = key; // 'the key/name of the attribute/field that is sent to the server
    input.value = value;
    theForm.appendChild(input);
  }

  var form = closestForm(document.querySelector('#FileUpload'));
  var fileSelects = form !== null ? form.querySelectorAll('[name^="file["]') : [];

  // Account Page File List
  (function fetchUserFiles() {
    var userFilesDiv = document.querySelector("#displayUploadBlissUserUploads");
    if(userFilesDiv) {
      var user_files_url = 'https://simpleuploads.mrh.io/api/get_user_files';
      user_files_url += "?shop=" + userFilesDiv.dataset.shopUrl;

      if(userFilesDiv.dataset.externalIntegration && userFilesDiv.dataset.externalIntegration == "recharge") {
        user_files_url += "&user=" + window.location.pathname.split("/")[4];
      } else {
        user_files_url += "&user=" + userFilesDiv.dataset.customerId;
      }

      var xhr = new XMLHttpRequest(); // Open the connection.
      xhr.open('GET', user_files_url, true);

      xhr.onload = function() {
        if(xhr.status === 200) {
          var file_html = "<ol id='uploadBlissFiles'>";
          var files = JSON.parse(xhr.response);
          files.forEach(function(e) {
            file_html += "<li><a href='https://fs.mrh.io/ipfs/"+e.value+"'>"+e.key+"</a></li>";
          });
          file_html += "</ol>";

          userFilesDiv.innerHTML = file_html;
        }
      }
      xhr.send();
    }

    return false;
  })();

  if(!form || fileSelects.length === 0) return;

  let formKey;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if(form.querySelector("[type=submit]")) {
      form.querySelector("[type=submit]").value = "Uploading...";
    }

    formKey = "contact";

    if(form.id == "create_customer") {
      formKey = "customer[note]"
    }

    var formData = new FormData();

    // Get the selected files from the inputs.
    [].forEach.call(fileSelects, function (input) {
      // Loop through each of the selected files.
      for (var i = 0; i < input.files.length; i++) {
        var file = input.files[i];
        name = input.name.replace("file", formKey)

        // Add the file to the request.
        formData.append(name, file, file.name);
      }
    });

    // Set up the request.
    var xhr = new XMLHttpRequest(); // Open the connection.
    xhr.open('POST', 'https://simpleuploads.mrh.io/api/proxy', true);

    // Set up a handler for when the request finishes.
    xhr.onload = function(e) {
      if (xhr.status === 200) {
        var results = JSON.parse(xhr.response);

        // Append hidden inputs to form field
        results.forEach(function(result) {
          addHidden(form, result.name_attribute, result.filenames.join(" \n"))
        });

        form.onsubmit = null;
        form.submit();
      }
      else {
        alert('An error occurred!');
      }
    };

    if(form.reportValidity()) {
      // Send the Data.
      xhr.send(formData);
    }
    return false;
  });
})();
