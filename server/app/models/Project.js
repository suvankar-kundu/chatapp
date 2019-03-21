var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Creates a User Schema.
var ProjectSchema = new Schema({
    project_name: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date }
});
module.exports = mongoose.model('Project', ProjectSchema);

