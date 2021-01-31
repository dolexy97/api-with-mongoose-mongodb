const statusMessages = require('../config/appConstants')
const token = require('../config/jwtAuthorization');
const userSchema = require("../model/user.model");
const adminSchema = require("../model/admin.model");

const verifyToken = async (req, res, next) => {
    try {
        const legit = await token.checkToken(req.headers.token)
        if (legit.success === true) {
            req.user = legit.user_token
            const response = req.user.user_type === 'admin' ? await adminSchema.findById({ _id: req.user._id }) : await userSchema.findById({ _id: req.user._id })
            if (response) {
                next();
            }
            else {
                res.json(statusMessages.ERROR_MSG.NO_MATCH)
            }
        }
        else {
            res.json(statusMessages.ERROR_MSG.UNAUTHORIZATION_ACCESS);
        }
    }
    catch (error) {
        statusMessages.ERROR_MSG.IMP_ERROR.message = error.message
        res.json(statusMessages.ERROR_MSG.IMP_ERROR)
    }
}


module.exports = {
    verifyToken
}