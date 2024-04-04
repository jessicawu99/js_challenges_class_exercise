
document.getElementById("ch3form").addEventListener("submit", function(event) {
    if(document.querySelector('input[name="standing"]:checked') == null || document.querySelector('input[name="gradDate"]:checked') == null){
        alert("Please complete form")
        event.preventDefault()
    }
})

