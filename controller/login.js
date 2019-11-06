const login = require('../model/loginmodel')

exports.login = (req,res) => {
    let user = login.user()
    let pass = login.pass()
    let loginuser = req.body.uname
    let loginpass = req.body.pword
    
    if(user == loginuser && pass == loginpass) {
        res.render('index',{loggedIn: true})

    } else {
        res.redirect(301,'/')
    }

}




exports.logout =  (req,res) => {
    res.render('/')
}

