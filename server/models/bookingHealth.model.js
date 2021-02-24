const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const AppointmentSchema = new mongoose.Schema({
    time: {
        type:String,
        required:[true,'Time is required']
    },
    date: String,
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
},{timestamps:true});
const HistorySchema = new mongoose.Schema({
    illness: String,
    date: Date,
    medicines: String,
    dose: Number,
},{timestamps:true});

const SpecializationSchema = new mongoose.Schema({
    name:String,
},{timestamps: true});

const ProfileSchema = new mongoose.Schema(
    {
        location:String,
        education:String,
        specialization: String,
    },{ timestamps: true }
    );
const UserSchema = new mongoose.Schema(
    {
    firstName: {
        type: String,
        minlength:[3, "First Name must be at least 3 characters"],
        required: [true, "First name is required"],
    },
    lastName: {
        type: String,
        minlength:[3, "Last Name must be at least 3 characters"],
        required: [true, "Last name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
        validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email",
        },
    },
    phoneNumber:{
        type: Number,
        minlength:[10,"Please Enter a valid Number"],
        required: [true, "Phone Number is required"],
    },
    about: {
        type: String,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        validate:{
            validator: (val) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(val),
            message: "Password must contain small letter, capital letter, special charcter, number and must be at least 8 charcters",
        },
    },
    role:{
        type:Number,
        default:0,
    },
    image:{
        type:String,
    },
    profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
    history: [{ type: mongoose.Schema.Types.ObjectId, ref: 'History'}],
    appointment:[{type: mongoose.Schema.Types.ObjectId, ref:'Appointment'}],
    },{ timestamps: true }
);
UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    });
});
module.exports.User = mongoose.model('User', UserSchema);
module.exports.Profile = mongoose.model('Profile', ProfileSchema);
module.exports.Specialization = mongoose.model('Specialization', SpecializationSchema);
module.exports.History = mongoose.model('History', HistorySchema);
module.exports.Appointment = mongoose.model('Appointment', AppointmentSchema);



