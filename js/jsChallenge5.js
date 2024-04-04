

document.querySelectorAll('.thumbnail').forEach(function(element) {
    element.addEventListener('mouseover', function(){
        document.getElementById('display').innerHTML = "<img src=" + this.src + ">" + "<br>" + "<span style='color: black; background-color: white;'>" + this.alt + "</span>";
    })
})

document.querySelectorAll('.thumbnail').forEach(function(element) {
    element.addEventListener('mouseout', function(){
        document.getElementById('display').innerHTML = "Hover over an image below to display the image and the alt text."
    })
})
