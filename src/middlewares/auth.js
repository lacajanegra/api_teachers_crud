const jwt = require('jsonwebtoken')

exports.authorization = (req, res, next) => {
    const headerAuth = req.get('authorization')
    
    let token = ""

    if(headerAuth && headerAuth.toLowerCase().startsWith('bearer')){
        token = headerAuth.substring(7)
    }

    try {
        const decodedToken = jwt.verify(token, process.env.SECRET_WORD)
        req.userId = decodedToken._id
        next()
    } catch (error) {
        res.status(401).json({message: "Invalid token"})
    }
    
}