var events = require('events');
var listener = new events.EventEmitter();
const nodemailer = require('nodemailer'),
    transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.MAILER_USERNAME,
            pass: process.env.MAILER_PASSWORD
        }
    }),
    EmailTemplate = require('email-templates').EmailTemplate,
    path = require('path'),
    Promise = require('bluebird');

function loadTemplateSendMail(templateName, contexts) {
    let template = new EmailTemplate(path.join(__dirname, '../templates', templateName));
    return Promise.all(contexts.map((context) => {
        return new Promise((resolve, reject) => {
            template.render(context, (err, result) => {
                if (err)
                    reject(err);
                else
                    resolve({
                        email: result,
                        context,
                    });
            });
        });
    }));
}

function sendEmail(obj) {
    return transporter.sendMail(obj);
}

listener.on("OTC", function (usersDetails) {
    loadTemplateSendMail('OTC', usersDetails).then((results) => {
        return Promise.all(results.map((result) => {
            sendEmail({ //email options
                to: result.context.email,
                from: '"Admin DIGIID"',
                subject: 'OTC',
                html: result.email.html
            }, function (error, response) { //callback
                if (error) {
                    console.log(error);
                } else {
                    console.log("Message sent: " + response.message);
                }
            });
        }));
    }).then(() => {
        console.log('Welcome Email Sent');
    });

});

listener.on("ForgotPassword", function (usersDetails) {
    loadTemplateSendMail('ForgotPassword', usersDetails).then((results) => {
        return Promise.all(results.map((result) => {
            sendEmail({ //email options
                to: result.context.email,
                from: '"Admin DIGIID"',
                subject: 'DigiID Forgot password',
                html: result.email.html
            }, function (error, response) { //callback
                if (error) {
                    console.log(error);
                } else {
                    console.log("Message sent: " + response.message);
                }
            });
        }));
    }).then(() => {
        console.log('Forgot password Mail Sent');
    });

});

listener.on("AppLink", function (usersDetails) {
    loadTemplateSendMail('AppLink', usersDetails).then((results) => {
        return Promise.all(results.map((result) => {
            sendEmail({ //email options
                to: result.context.email,
                from: '"Admin DIGIID"',
                subject: 'App Link',
                html: result.email.html
            }, function (error, response) { //callback
                if (error) {
                    console.log(error);
                } else {
                    console.log("Message sent: " + response.message);
                }
            });
        }));
    }).then(() => {
        console.log('App Link Sent');
    });

});

listener.on("AdminPassword", function (usersDetails) {
    loadTemplateSendMail('AdminPassword', usersDetails).then((results) => {
        return Promise.all(results.map((result) => {
            sendEmail({ //email options
                to: result.context.email,
                from: '"Admin DIGIID"',
                subject: 'DigiID Create password',
                html: result.email.html
            }, function (error, response) { //callback
                if (error) {
                    console.log(error);
                } else {
                    console.log("Message sent: " + response.message);
                }
            });
        }));
    }).then(() => {
        console.log('Admin Password Sent on Mail');
    });

});

listener.on("ResetPassword", function (usersDetails) {
    loadTemplateSendMail('ResetPassword', usersDetails).then((results) => {
        return Promise.all(results.map((result) => {
            sendEmail({ //email options
                to: result.context.email,
                from: '"Admin DIGIID"',
                subject: 'DigiID Reset password',
                html: result.email.html
            }, function (error, response) { //callback
                if (error) {
                    console.log(error);
                } else {
                    console.log("Message sent: " + response.message);
                }
            });
        }));
    }).then(() => {
        console.log('Reset Password Sent on Mail');
    });

});

// When visitor is enrolled and appointment is created against the visitor, email will be send
listener.on("CreateAppointment", function (usersDetails) {
    loadTemplateSendMail('CreateAppointment', usersDetails).then((results) => {
        return Promise.all(results.map((result) => {
            sendEmail({ //email options
                to: result.context.email,
                from: '"Admin DIGIID"',
                subject: 'Appointment',
                html: result.email.html
            }, function (error, response) { //callback
                if (error) {
                    console.log(error);
                } else {
                    console.log("Message sent: " + response.message);
                }
            });
        }));
    }).then(() => {
        console.log('Appointment Created Sent on Mail');
    });

});

// When visitor is not enrolled and appointment is created against the visitor, email will be send along with appointment details and the link to download the app.
listener.on("CreateAppointmentNewVisitor", function (usersDetails) {
    loadTemplateSendMail('CreateAppointmentNewVisitor', usersDetails).then((results) => {
        return Promise.all(results.map((result) => {
            sendEmail({ //email options
                to: result.context.email,
                from: '"Admin DIGIID"',
                subject: 'Appointment',
                html: result.email.html
            }, function (error, response) { //callback
                if (error) {
                    console.log(error);
                } else {
                    console.log("Message sent: " + response.message);
                }
            });
        }));
    }).then(() => {
        console.log('Appointment Created Sent to new visitor on Mail');
    });

});

listener.on("ChangePassword", function (usersDetails) {
    loadTemplateSendMail('ChangePassword', usersDetails).then((results) => {
        return Promise.all(results.map((result) => {
            sendEmail({ //email options
                to: result.context.email,
                from: '"Admin DIGIID"',
                subject: 'DigiID Change password',
                html: result.email.html
            }, function (error, response) { //callback
                if (error) {
                    console.log(error);
                } else {
                    console.log("Message sent: " + response.message);
                }
            });
        }));
    }).then(() => {
        console.log('Change Password Mail sent');
    });

});

listener.on("ProfileSectionChange", function (usersDetails) {
    loadTemplateSendMail('ProfileSectionChange', usersDetails).then((results) => {
        return Promise.all(results.map((result) => {
            sendEmail({ //email options
                to: result.context.email,
                from: '"Admin DIGIID"',
                subject: 'DigiID - Review Activity',
                html: result.email.html
            }, function (error, response) { //callback
                if (error) {
                    console.log(error);
                } else {
                    console.log("Message sent: " + response.message);
                }
            });
        }));
    }).then(() => {
        console.log('Profile Section change mail sent');
    });

});

module.exports = listener;