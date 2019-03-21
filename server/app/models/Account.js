var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Creates a User Schema.
var AccountSchema = new Schema({
    account_name: { type: String, required: true },
    sbu: { type: String, required: true },
    ibg: { type: String, required: true },
    fte: { type: String, required: true },
    project_ids: [{type: Schema.ObjectId, ref: 'Project'}],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date }
});
module.exports = mongoose.model('Account', AccountSchema);


