const db = require('../utils/database')

function addArtist(data) {
    let sql = "Insert into people (name, about, imageURL) values ('" + data.name+ "','"+ data.about+ "','" + data.image + "')";
    db.execute(sql);
}

function deleteArtist(data) { 
    userDelete = {
        name : data.name
    }
    db.execute("Delete from people where name = ? ",[userDelete.name], function (err,result) {
        if(err) {return console.log(err)}
    })
}

function getAll() {
    return db.execute('Select * from people');
}

module.exports = {
    add : addArtist,
    getall: getAll,
    delete: deleteArtist
}