var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
// Creates a User Schema.
var UserSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile_no: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, select: false, required: true },
    status: { type: String, enum: ["Active", "Inactive"], default: 'Active' },
    token: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date }
});

// Sets the created_at parameter equal to the current time
UserSchema.pre('save', function (next) {
    var user = this;
    now = new Date();
    user.updated_at = now;
    if (!user.created_at) {
        user.created_at = now
    }
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
            user.password = hash;
            next();
        });
    });
});

// Sets the created_at parameter equal to the current time
UserSchema.pre('update', function (next) {
    var user = this;
    now = new Date();
    user.updated_at = now;
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function (password, done) {
    bcrypt.compare(password, this.password, function (err, isMatch) {
        done(err, isMatch);
    });
};
UserSchema
  .virtual('pic')
  .get(function() {
    return process.env.PROFILE_PIC_URL + this.profile_pic
  });
UserSchema.set('toJSON', { virtuals: true });
module.exports = mongoose.model('User', UserSchema);
