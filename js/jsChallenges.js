document.querySelector('#subscribe').addEventListener('click', function(){
    console.log('this works')
    if(this.checked){
        document.getElementById('emailDiv').style.display = 'block'
    }
    else{
        document.getElementById('emailDiv').style.display = 'none'
    }
})

document.addEventListener('click', function(){
    alert(Date())
})