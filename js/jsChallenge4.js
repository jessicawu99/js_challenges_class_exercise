/* if input name="name" is empty show the html with id "nameError"*/
function validateForm() {
  var name = document.forms["challenge4_form"]["name"].value;
  var addr = document.forms["challenge4_form"]["addr"].value;
  if (name == "") {
    document.getElementById("nameError").style.display = "block";
    if (addr == "") {
        document.getElementById("addrError").style.display = "block";
        return False
      }
      return False
  }
  else {
    return True
  }
}

document.getElementById("challenge4_form").addEventListener("submit", function(event) {
    validateForm();
    if (validateForm() == False) {
        event.preventDefault();
    }
})