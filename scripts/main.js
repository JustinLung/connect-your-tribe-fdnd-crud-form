const baseURL = "https://tribe.api.fdnd.nl/v1";
const memberEndpoint = "/member";
const select = document.getElementById("postOrPatch");
const inputElements = document.querySelectorAll("input");
const button = document.getElementById("submitButton");

getData();
getInputData();
button.addEventListener("click", editData)

async function getData() {
    try {
        const req = await fetch(`${baseURL}${memberEndpoint}`);
        const res = await req.json();
        return res;
    } catch (err) {
        console.log(err);
    }
}

function getInputData(object) {
    const keys = Object.keys(object);
    const inputs = [...inputElements].map(input => input.value);

    keys.forEach((key, index) => {
        if (key === "memberId" || key === "squadId") {
            object[key] = parseInt(inputs[index]);
        } else {
            object[key] = inputs[index];
        }
    })
    console.log(object);
    return object;
}

async function update(object) {
    const objectBody = getInputData(object);
    const req = await fetch(`${baseURL}${memberEndpoint}`, {
        method: "PATCH",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objectBody),
    });
    const res = await req.json();
    console.log(res);
    console.log(JSON.stringify(objectBody));
}

async function add(object) {
    const objectBody = getInputData(object);
    const req = await fetch(`${baseURL}${memberEndpoint}`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objectBody),
    });
    const res = await req.json();
    console.log(res);
    console.log(JSON.stringify(objectBody));
}

function editData(e) {
    e.preventDefault();
    
    if (select.value === "edit") {
        const object = {
            memberId: 0,
            squadId: 0,
            type: "string",
            nickname: "string",
            name: "string",
            prefix: "string",
            surname: "string",
            avatar: "string",
            githubHandle: "string",
            bio: "string",
            url: "string"
        }
        update(object);
    } else {
        const object = {
            squadId: 0,
            type: "string",
            nickname: "string",
            name: "string",
            prefix: "string",
            surname: "string",
            avatar: "string",
            githubHandle: "string",
            bio: "string",
            url: "string"
        }
        add(object);
    }
}
