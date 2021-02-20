const BookingController = require("../controllers/bookingHealth.controller");
const auth = require('../config/jwt.config')
module.exports = app => {
    app.post('/api/register',BookingController.register);
    app.post('/api/login',BookingController.login);
    app.get('/api/logout',BookingController.logout);
    app.post('/api/addProfile/:id/:profid',BookingController.addProfile);
    app.get('/api/findUser/:id',BookingController.findUser);
    app.get('/api/findProfile',BookingController.findProfile);
    app.post('/api/addProfile',BookingController.createProfile);
    app.get('/api/findUsers',BookingController.findUsers);
    app.put('/api/doctor/:id',BookingController.makeDoctor);
    app.post('/api/addSpecialization',BookingController.createSpecialization);
}