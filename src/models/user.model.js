const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {

    first_name: {
      type: String,
    },
    
    last_name: {
      type: String,
    },

    email: {
      type: String,
    },

    password: {
      type: String,
    },

    contact_number: {
      type: String,
    },

    document_number: {
      type: String,
    },

    profile: {
        ref: "Profile",
        type: mongoose.Schema.Types.Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
userSchema.methods.toJSON = function(){
  const {__v, password, ...user} = this.toObject()
  return user
}

module.exports = mongoose.model("User", userSchema);
