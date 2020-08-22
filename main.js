function inputPin() {
    const getPin = Math.random()*(9999 - 1000) + 1000;
    const getPinNumber = Math.round(getPin);
    document.getElementById(`generate-input`).value = getPinNumber;
    warning();
    allClear();
}

function input(num) {
    document.getElementById(`check-input`).value += num;
}

document.getElementById(`check-btn`).addEventListener(`click`, function () {
    const generateInput = document.getElementById(`generate-input`).value;
    const checkInput = document.getElementById(`check-input`).value;
    if (generateInput == checkInput && checkInput != ``) {
        document.getElementById(`pve-notify`).style.display = `block`;     
    }
    if (generateInput !== checkInput || checkInput === ``) {
        document.getElementById(`nve-notify`).style.display = `block`;   
    }

    const validTry = document.getElementById(`valid-try`);
    const validNum = parseInt(validTry.innerText);
    let newValidNum = validNum;
    if (newValidNum > 0 && generateInput != checkInput) {
        newValidNum = validNum - 1;
        document.getElementById(`valid-try`).innerText = newValidNum;
    }
    if (newValidNum === 0) {
        document.getElementById(`check-btn`).disabled = true;
        alert("Button has been disabled.");
        warning();
    }
})

function allClear() {
    document.getElementById(`check-input`).value = ``;
}

function cutLastValue() {
    const elements = document.getElementById(`check-input`).value;
    document.getElementById(`check-input`).value = elements.slice(0 , elements.length - 1);
}

function warning() {
    document.getElementById(`pve-notify`).style.display = `none`;
    document.getElementById(`nve-notify`).style.display = `none`;
}