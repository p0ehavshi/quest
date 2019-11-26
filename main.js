function openTask2(){
    let passTask2 = document.getElementById("passTask2");
    let z2 = document.getElementById("z2");
    if(passTask2.value == "" || passTask2.value == " "){
        alert('Введіть код для розблокування')
    }
    else if(passTask2.value == 2022){
        alert('Код правильний!');
        z2.style.display = "block"
    }
    else{
        alert('Код не правильний :(')
    }
}