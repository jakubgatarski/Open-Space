let unlockBtn = document.getElementById("unlock-btn");
let password = document.getElementById("password");
let checks = document.querySelectorAll(".check");
let ranges = document.querySelectorAll(".range");
let launchBtn = document.getElementById("launch-btn");
let rocket = document.querySelector(".rocket");

function checkPassword(inputPass){
    //checking is value the same as password;
    if (inputPass == 'TrustNo1'){
        return true;
    }
    else{
        return false;
    }
}

unlockBtn.addEventListener("click", function (){
    //if value is the same as password start looping
    if(checkPassword(password.value)){
        //loop after every checkbox and unlock it
        for (let i=0; i < checks.length; i++){
            checks[i].disabled = false;
        }
        //loop after every range slide and unlock it
        for (let j=0; j < ranges.length; j++){
            ranges[j].disabled = false;
        }
        //disables input password and unlock btn
        unlockBtn.disabled = true;
        password.disabled = true;
    }
    else {
        //if wrong password display alert
        alert("wrong password, try again");
    }
});


launchBtn.addEventListener("click", function (){
    //take rocket actual position
    //let position = rocket.getBoundingClientRect();  //To do get exact position of rocket by some func
    let rocketTop = 250 //position.top + Math.sin(30*3.14/180)*75;
    let rocketLeft = 520//position.left + Math.sin(30*3.14/180)*75;
    //animates rocket, by changing its position values every 10ms
    setInterval(moveRocket,10);
    //function to change rocket top and left position
    function moveRocket(){
        rocketTop --;
        rocketLeft ++;
        rocket.style.top = rocketTop + 'px';
        rocket.style.left = rocketLeft + 'px';
    }

});

function checkInputs(){
    let x = 0;
    // loop after every range slide value and checks count it's sum
    for (let j=0; j < ranges.length; j++){
        x += parseInt(ranges[j].value);
    }
    //if sum of slider = 500(maximum) and all checkbox are checked enables launch button
    if(document.querySelectorAll('input[type="checkbox"]:checked').length === document.querySelectorAll('input[type="checkbox"]').length && x == 500) {
        launchBtn.disabled = false;

    }
}
