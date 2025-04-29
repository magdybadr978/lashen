const { Schema, default: mongoose } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const { roles } = require("../../../constants/enums");
const { ATTACK, QUIZ } = require("../../../constants/models-names.js");

const userSchema = new Schema({
    userName: {
        type: String,
        trim : true,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: roles.customer,
        enum: Object.values(roles)
    },
    attacks: [{type : mongoose.Types.ObjectId, ref : ATTACK}],
    quizzes : [{type : mongoose.Types.ObjectId, ref : QUIZ}]

}, { timestamps: true })

userSchema.index({ phone: 1 })
userSchema.plugin(mongoosePaginate);
module.exports = userSchema;