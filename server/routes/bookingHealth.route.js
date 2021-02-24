const BookingController = require("../controllers/bookingHealth.controller");
const auth = require('../config/jwt.config')
var multer = require('multer');
module.exports = app => {
    var storage = multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, '../client/public/img')
        },
        filename: (req, file, callback) => {
            callback(null, file.originalname)
        }
    });
    var upload = multer({ storage: storage });
    app.put('/api/user/:id', upload.single('upload'), BookingController.updateProfilePicture);
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
    app.post('/api/addAppointment/:patientid/:docid',BookingController.createAppointment);
    app.put('/api/addAppointment/:patientid/:docid/:appointmentid',BookingController.addAppointment);
    app.get('/api/findAppointment',BookingController.findAppointments);
    app.post('/api/createHistory/:id', BookingController.createHistory);
    app.put('/api/addHistory/:id/:historyid', BookingController.addHistory);
    app.get('/api/findHistories', BookingController.findHistories);
    app.get('/api/findSpecializations', BookingController.findSpecilizations);


}