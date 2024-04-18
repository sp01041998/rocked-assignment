exports.generalAuth = function (req, res, next) {
    try {
        const token = req.header('x-trainer-id')

        if (!token)
            return res.status(401).send({ status: false, message: "Token not found" });

        if(token !== "8280836009"){
            return res.status(403).send({status : false,message: "inavlid user" })
        }
        next();
    }
    catch (exception) {
        res.status(401).send({ status: false, msg: "INVALID_TOKEN" });
    }
}