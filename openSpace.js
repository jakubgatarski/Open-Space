let unlockBtn = document.getElementById("unlock-btn");
let password = document.getElementById("password");
let checks = document.querySelectorAll(".check");
let ranges = document.querySelectorAll(".range");
let launchBtn = document.getElementById("launch-btn");
let rocket = document.querySelector(".rocket");

function checkPassword(inputPass){
    if (inputPass == 'TrustNo1'){
        return true;
    }
    else{
        return false;
    }
}

unlockBtn.addEventListener("click", function (){
    if(checkPassword(password.value)){
        //alert("password accepted");
        for (let i=0; i < checks.length; i++){
            checks[i].disabled = false;
        }
        for (let j=0; j < ranges.length; j++){
            ranges[j].disabled = false;
        }
        //launchBtn.disabled = false;
        unlockBtn.disabled = true;
        password.disabled = true;
    }
    else {
        alert("wrong password, try again");
    }
});


launchBtn.addEventListener("click", function (){
//setInterval(moveRocket,10);
    //let position = rocket.getBoundingClientRect();
    let rocketTop = 250//position.top + Math.sin(30*3.14/180)*75;
    let rocketLeft = 520//position.left + Math.sin(30*3.14/180)*75;

    setInterval(moveRocket,10);

    function moveRocket(){
        rocketTop --;
        rocketLeft ++;
        rocket.style.top = rocketTop + 'px';
        rocket.style.left = rocketLeft + 'px';
    }
});

/*function getRocketPosition(){
    let position = rocket.getBoundingClientRect();
    let rocketTop = position.top;
    let rocketLeft = position.left;
}*/

/*
function moveRocket(){
    let position = rocket.getBoundingClientRect();
    let rocketTop = position.top;
    let rocketLeft = position.left;

    rocketTop ++;
    rocketLeft ++;
    rocket.style.top = rocketTop + 'px';
    rocket.style.left = rocketLeft + 'px';

}*/