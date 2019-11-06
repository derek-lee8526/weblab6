const artistModel = require('../model/artistData')

exports.addArtist = (req, res) => {
    artist = {
        name: req.body.name,
        about: req.body.about,
        image: req.body.img
    }

    artistModel.add(artist)
    res.status(204).send();
}

exports.getAllArtist = (req,res) => {
    let people = artistModel.getall();
    people.then(([rows, fieldData])=>{
       res.send(rows)
    })
}

exports.deleteArtist = (req,res) => {
    artist = {
        name: req.body.name,
        about: req.body.about,
        image: req.body.img
    }
    artistModel.delete(artist)
}