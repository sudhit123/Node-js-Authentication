const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET_KEY

const authontication = (req, res, next) => {
    const token = req.headers['authorization']
    if (!token) {
        return res.send("Authorazation Access Denied")
    }
    jwt.verify(token, SECRET_KEY, (error, user) => {
        if (error) {
            return res.send("Authorazation Access Denied")
        }
        req.user = user
        next()
    })

}

module.exports = authontication