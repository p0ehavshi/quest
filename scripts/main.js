function openTask2() {
    let passTask2 = document.getElementById("passTask2");
    let z2 = document.getElementById("z2");
    if (passTask2.value == "" || passTask2.value == " ") {
        alert('Введіть код для розблокування')
    } else if (passTask2.value == 2022 || passTask2.value == "2022" ) {
        z2.style.display = "block"
    } else {
        alert('Код не правильний :(');
    }
}

function openTask3() {
    let passTask3 = document.getElementById("passTask3");
    let z3 = document.getElementById("z3");
    if (passTask3.value == "" || passTask3.value == " ") {
        alert('Введіть код для розблокування');
    } else if (passTask3.value == "697" ||
        passTask3.value == 697) {
        z3.style.display = "block";
    } else {
        alert('Код не правильний :(');
    }
}

function openTask4() {
    let passTask4 = document.getElementById("passTask4");
    let z4 = document.getElementById("z4");
    if (passTask4.value == "" || passTask4.value == " ") {
        alert('Введіть код для розблокування')
    } else if (passTask4.value == "4") {
        // alert('Код правильний!');
        z4.style.display = "block"
    } else {
        alert('Код не правильний :(')
    }
}

function video(){
    document.getElementById('after-video').style.display = "block"
}