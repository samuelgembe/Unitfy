/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputFrom = document.getElementById("input-from")
const inputTo = document.getElementById("input-to")
const labelFrom = document.querySelector("#label-from span")
const labelTo = document.querySelector("#label-to span")
const btnWeight = document.getElementById("btn-weight")
const btnVolume = document.getElementById("btn-volume")
const btnDistance = document.getElementById("btn-distance")

let currentCategory = "weight"

const unitData = {
    weight: {
        fromUnit: "Kilograms (kg)",
        toUnit: "Pounds (lb)",
        factor: 2.204
    },
    volume: {
        fromUnit: "Liter (l)",
        toUnit: "Gallon (gal)",
        factor: 0.264
    },
    distance: {
        fromUnit: "Meter (m)",
        toUnit: "Feet (ft)",
        factor: 3.281
    }
}

function updateRight() {
    let factor = unitData[currentCategory].factor
    let userVal = inputFrom.value

    if(userVal === "") {
        inputTo.value = ""
        return
    }
    let result = userVal * factor
    inputTo.value = result.toFixed(3)
}

function updateLeft() {
    let factor = unitData[currentCategory].factor
    let userVal = inputTo.value

    if(userVal === "") {
        inputFrom.value = ""
        return
    }

    let result = userVal / factor
    inputFrom.value = result.toFixed(3)
}

btnVolume.addEventListener("click", function() {
    currentCategory = "volume"

    btnVolume.classList.add("active")
    btnDistance.classList.remove("active")
    btnWeight.classList.remove("active")

    labelFrom.textContent = unitData[currentCategory].fromUnit
    labelTo.textContent = unitData[currentCategory].toUnit

    inputFrom.value = ""
    inputTo.value = ""
})

btnWeight.addEventListener("click", function() {
    currentCategory = "weight"

    btnVolume.classList.remove("active")
    btnDistance.classList.remove("active")
    btnWeight.classList.add("active")

    labelFrom.textContent = unitData[currentCategory].fromUnit
    labelTo.textContent = unitData[currentCategory].toUnit

    inputFrom.value = ""
    inputTo.value = ""
})

btnDistance.addEventListener("click", function() {
    currentCategory = "distance"

    btnVolume.classList.remove("active")
    btnDistance.classList.add("active")
    btnWeight.classList.remove("active")

    labelFrom.textContent = unitData[currentCategory].fromUnit
    labelTo.textContent = unitData[currentCategory].toUnit

    inputFrom.value = ""
    inputTo.value = ""
})


inputFrom.addEventListener("input", updateRight)
inputTo.addEventListener("input", updateLeft)

