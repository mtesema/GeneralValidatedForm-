
// alert("check")


$(document).ready(function () {
  let formFields = $("#firstname, #lastname, #email, #password");

  // Function to check and highlight the next field
  function checkAndHighlightNextField(currentField) {
    // Get the index of the current field
    let currentIndex = formFields.index(currentField);

    // Check if the current field is the last field
    if (currentIndex === formFields.length) {
      return; // Do nothing if it's the last field
    }

    // Get the next field
    let nextField = formFields.eq(currentIndex + 1);

    // Highlight the next field
    nextField.css({
      "background-color": "pink",
      border: "2px solid red",
    });
  }

  // Add event listener for input fields
  formFields.on("input", function () {
    let fieldValue = $(this).val().trim();
    if (fieldValue !== "") {
      checkAndHighlightNextField($(this));
    }
  });
});