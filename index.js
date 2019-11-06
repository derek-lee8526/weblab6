const express = require('express');
const router = express.Router();
const fs = require('fs')
const loginController = require('./controller/login')
const artistController = require('./controller/artist')

router.post('/login', loginController.login)
router.post('/lab5/add',artistController.addArtist)
router.get('/logout', loginController.logout)
router.get('/lab5/all', artistController.getAllArtist)
router.delete('/lab6/delete',artistController.deleteArtist)


// router.delete('/lab5/delete', (req,res) => {
//     if(fs.existsSync('./artist.json')) {
//         fs.readFile('./artist.json', (err,data) => {
//             artistData.push(JSON.parse(data));
//             let datalength = artistData[0]
//             for(let i = 0; i < datalength.length; i++) {
//                 if(req.body.name === datalength[i].name) {
//                     datalength.splice(i,1);
//                 }
//             }
//             fs.writeFile('./artist.json', JSON.stringify(datalength, null ,2), (err) => {
//                 if(!err) {
//                     console.log("finish")
//                 }
//             })
//         })
//         res.status(200).send()
//     }
// })


module.exports = router;
