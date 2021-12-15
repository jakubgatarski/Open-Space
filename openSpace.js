let unlockBtn = document.getElementById("unlock-btn");
let password = document.getElementById("password");
let checks = document.querySelectorAll(".check");
let ranges = document.querySelectorAll(".range");
let launchBtn = document.getElementById("launch-btn")
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
        launchBtn.disabled = false;
        unlockBtn.disabled = true;
        password.disabled = true;
    }
    else {
        alert("wrong password, try again");
    }
});

