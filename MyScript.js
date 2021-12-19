const button_New = document.querySelector('button_New');
const button_Season = document.querySelector('button_Season');

const containor_New = document.querySelector('containor_New');
const containor_Season = document.querySelector('containor_Season');

document.getElementById("button_New").addEventListener("click", moveA)
document.getElementById("button_Season").addEventListener("click", moveB)


function moveA() {
    containor_Season.style.transform = 'translate(-100%)';

}

function moveB() {
    containor_New.style.display = 'none';
    containor_Season.style.display = 'block';
}
