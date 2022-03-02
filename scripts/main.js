import { getData } from './api.js'

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
            <td>${members[i].name} ${members[i].prefix} ${members[i].surname}</td>
            <td>${members[i].type}</td>
            <td><a href="edit.html?memberId=${members[i].memberId}"><img src="../assets/settings-icon.svg" class="settings-icon" alt="settings icon"></a></td>
        </tr>
        `
        );
    }
}
