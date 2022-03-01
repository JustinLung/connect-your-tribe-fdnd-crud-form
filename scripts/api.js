const baseURL = "https://tribe.api.fdnd.nl/v1";
const memberEndpoint = "/member";

async function getData() {
    try {
        const req = await fetch(`${baseURL}${memberEndpoint}`);
        const res = await req.json();
        return res.data.filter(student => student.squadId === 1); 
    } catch (err) {
        console.log(err);
    }
}

async function updateData() {
    const req = await fetch(`${baseURL}${memberEndpoint}`, {
        method: "PATCH",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objectBody),
    });
    const res = await req.json();
}

async function addData() {
    
}

export {
    getData,
    updateData
}