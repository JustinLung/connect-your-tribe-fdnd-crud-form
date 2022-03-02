import { addData } from './api.js'

const squadid = document.getElementById("squadid");
const type = document.getElementById("type") 
const nickname = document.getElementById("nickname") 
const name = document.getElementById("name") 
const prefix = document.getElementById("prefix") 
const surname = document.getElementById("surname") 
const avatar = document.getElementById("avatar") 
const githubHandle = document.getElementById("githubHandle") 
const bio = document.getElementById("bio") 
const url = document.getElementById("url") 
const submit = document.getElementById("submitButton")
const submitMsg = document.querySelector(".submit-msg")

submit.addEventListener("click", getInputData);

function getInputData(e) {
    e.preventDefault();
    const inputValues = {
        squadId: squadid.value,
        type: type.value,
        nickname: nickname.value,
        name: name.value,
        prefix: prefix.value,
        surname: surname.value,
        avatar: avatar.value,
        githubHandle: githubHandle.value,
        bio: bio.value,
        url: url.value,
    }
    addData(inputValues);
    submitMsg.style.display = "block";
}
