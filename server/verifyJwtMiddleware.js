var jwt = require('jsonwebtoken');

//middleware function to check JWT, protect routes that require login
var verifyJWT = (req,res,next) => {
    //extract token from request
    var token;
    var data;

    //extract token from cookie
    var extractToken = req.headers.cookie;
    var getToken = extractToken.split('=');
    token = getToken[1];

    if(token === undefined){
        return res.status(200).json({
            success: false,
            message: "Please login"
        })
    }

    //check for params in body.params or body
    if(req.body.params){
        // token = req.body.params.token;
        // token = req.cookie.token;
        data = req.body.params;
    }

    else if (req.body){
        // token = req.body.token;
        // token = req.cookie.token;
        data = req.body
    }

    //if query params are present
    if( req.method === "DELETE"){
        console.log("do i get here");
        data = req.query
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