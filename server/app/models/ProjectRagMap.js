var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Creates a User Schema.
var ProjectRagMapSchema = new Schema({
    project_id: {type: Schema.ObjectId, ref: 'Project'},
    performance: { type: String, required: true },
    rag_id: {type: Schema.ObjectId, ref: 'RAGCriteria'},
    color:{ type: String},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date }
});
module.exports = mongoose.model('ProjectRagMap', ProjectRagMapSchema);


