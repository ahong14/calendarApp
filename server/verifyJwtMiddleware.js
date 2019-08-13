var jwt = require('jsonwebtoken');

//middleware function to check JWT, protect routes that require login
var verifyJWT = (req,res,next) => {
    //extract token from request
    var token;

    if(req.body.params){
        token = req.body.params.token;
        data = req.body.params;
    }

    else if (req.body){
        token = req.body.token;
        data = req.body
    }

    //verify token and extract payload
    jwt.verify(token,process.env.JWT_SECRET,(err,payload) => {
        if(err){
            return res.status(200).json({
                success: false,
                message: "Error, please login"
            })
        }
        //save payload in request
        //move to next route
        req.decoded = payload;
        req.data = data;
        next();
    })
}

module.exports = {
    verifyJWT: verifyJWT
}