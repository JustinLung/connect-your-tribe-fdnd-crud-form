import { getData } from './api.js'
const select = document.getElementById("postOrPatch");
const inputElements = document.querySelectorAll("input");
const button = document.getElementById("submitButton");

renderData();

async function renderData() {
    const members = await getData()
    for (let i = 0; i < members.length; i++) {
        document.querySelector(".table").insertAdjacentHTML(
            "beforeend",
            `       
        <tr>
            <td>${members[i].memberId}</td>
            <td><img src="${members[i].avatar || "../assets/not-available.png"}" class="avatar" alt="Profile Image"> </td>
            <td>${members[i].name} ${members[i].surname}</td>
            <td>${members[i].type}</td>
            <td><a href="edit.html?memberId=${members[i].memberId}"><img src="../assets/settings-icon.svg" class="settings-icon" alt="settings icon"></a></td>
        </tr>
        `
        );
    }
}

// async function add(object) {
//     const objectBody = getInputData(object);
//     const req = await fetch(`${baseURL}${memberEndpoint}`, {
//         method: "POST",
//         headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(objectBody),
//     });
//     const res = await req.json();
//     console.log(res);
//     console.log(JSON.stringify(objectBody));
// }
