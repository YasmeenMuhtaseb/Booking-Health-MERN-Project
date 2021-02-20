const { User, Profile, Specialization, History, Appointment } = require("../models/bookingHealth.model");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
require("dotenv").config();

module.exports.register = (req, res) => {
    User.create(req.body)
        .then(user => {
            const userToken = jwt.sign({
                id: user._id
            }, process.env.SECRET_KEY)
            res
                .cookie("usertoken", userToken,{
                    httpOnly: true
                })
                .json({ msg: "success!", user: user,token: userToken });
        })
        .catch(err => res.status(400).json(err));
    }

module.exports.login = async(req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if(user === null) {
        // email not found in users collection
        return res.setStatus(400).json("user not found");
    }
    // if we made it this far, we found a user with this email address
    // let's compare the supplied password to the hashed password in the database
    const correctPassword = await bcrypt.compare(req.body.password, user.password);
    if(!correctPassword) {
        // password wasn't a match!
        return res.setStatus(400).json("user not found");
    }
    // if we made it this far, the password was correct
    const userToken = jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY)
    // note that the response object allows chained calls to cookie and json
    res.cookie("usertoken", userToken,{httpOnly: true})
    res.json({ msg: "success!", user: user,token: userToken })
}

module.exports.logout =  (req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
}

module.exports.createSpecialization = (req, res) => {
    Specialization.create(req.body)
    .then(specialization => res.json(specialization))
    .catch(err => res.json(err))
}
module.exports.addProfile = (req,res) => {
    User.findOneAndUpdate({_id:req.params.id},{profile:req.params.profid},{new:true,runValidators:true}).populate('profile')
    .then(updateduser => res.json(updateduser))
    .catch(err => res.json(err))
}
module.exports.makeDoctor = (req, res) => {
    User.findOneAndUpdate({_id:req.params.id},{role:1},{new:true,runValidators:true})
    .then(updateduser => res.json(updateduser))
    .catch(err => res.json(err))
}
module.exports.createProfile  = (req, res) => {
    Profile.create(req.body)
    .then(profile => res.json(profile))
    .catch(err => res.json(err))
}
module.exports.findUser = (req,res) => {
    User.findOne({_id:req.params.id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
}
module.exports.findProfile = (req,res) => {
    Profile.find()
    .then(profiles => res.json(profiles))
    .catch(err => res.json(err))
}
module.exports.findUsers = (req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
}
