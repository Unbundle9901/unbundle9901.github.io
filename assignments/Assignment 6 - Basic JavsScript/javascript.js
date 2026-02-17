let counter = 0;

// Functions
function tickUp() {
    counter++;
    document.getElementById("counter").textContent = counter;
}

function tickDown() {
    counter--;
    document.getElementById("counter").textContent = counter;
}

// For Loop
function runForLoop() {
    let result = "";
    for (let i = 0; i <= counter; i++) {
        result += i + " ";
    }
    document.getElementById("forLoopResult").textContent = result.trim();
}

// Repetition 
function showOddNumbers() {
    let result = "";
    for (let i = 1; i <= counter; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }
    document.getElementById("oddNumberResult").textContent = result.trim();
}

// Arrays
function addMultiplesToArray() {
    let arr = [];
    if (counter >= 5) {
        for (let i = counter; i >= 5; i--) {
            if (i % 5 === 0) {
                arr.push(i);
            }
        }
    }
    console.log(arr);
}

// Objects and Forms
function printCarObject() {
    let carObj = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value
    };
    console.log(carObj);
}

function loadCar(carNum) {
    let car;
    if (carNum === 1) car = carObject1;
    else if (carNum === 2) car = carObject2;
    else if (carNum === 3) car = carObject3;

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}

// Styles
function changeColor(colorNum) {
    let para = document.getElementById("styleParagraph");
    if (colorNum === 1) para.style.color = "red";
    else if (colorNum === 2) para.style.color = "green";
    else if (colorNum === 3) para.style.color = "blue";
}