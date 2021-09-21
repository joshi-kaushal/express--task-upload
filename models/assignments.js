const mongoose = require('mongoose');
const Schema = mongoose.Schema

let AssignmentSchema = new Schema({
    firstName: { type: String, required: true, minlength: 2, maxlength: 20 },
    lastName: { type: String, required: true, minlength: 2, maxlength: 20 },
    repo: { type: String, required: true, minlength: 2, maxlength: 20 },
    deployed: { type: String, required: true, minlength: 2, maxlength: 20 },
    timestamp: { type: Date, required: true }
})

AssignmentSchema
    .virtual('fullName')
    .get(function() {
        return `${this.firstName} ${this.lastName}`
    })

module.exports = mongoose.model('Assignment', AssignmentSchema)