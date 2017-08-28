var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema(
    {
        name: {
            type: String
        },
        message: {
            type: String
        }
    },
    {
        collection: 'messages'
    }
);

module.exports = mongoose.model('Message', messageSchema);
