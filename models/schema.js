const mongoose = require('mongoose');
var newClient = mongoose.Schema({
    clientName: {type: String},
    clientEmail: {type: String},
    clientNumber: {type: String},
    clientTitle: {type: String},
    clientAddress: {type: String},
    clientProfile: {type: String},
    mySocialMediaTitle: {type: String},
    mySocialMediaText: {type: String},
    referenceTitle: {type: String},
    languageTitle: {type: String},
    experiences: {type: String},
    educations: {type: String},
    skills: {type: String},
    hobby: {type: String}
});
mongoose.model('clients', newClient);