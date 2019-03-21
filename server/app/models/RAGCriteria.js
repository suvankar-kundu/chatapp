var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Creates a User Schema.
var RAGCriteriaSchema = new Schema({
    bucket_name: { type: String, required: true },
    metric_name: { type: String, required: true },
    uom: { type: String, required: true },
    target: { type: String, required: true },
    rule: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date }
});
module.exports = mongoose.model('RAGCriteria', RAGCriteriaSchema);

