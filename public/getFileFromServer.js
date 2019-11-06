async function getUser() {
    let response = await fetch("/lab5/all")
    let data = await response.json();
    return data
}

getUser().then(data=>{for(let i = 0; i < data.length; i++) {
    addUser(data[i].name,data[i].about,data[i].imageURL);
}});
