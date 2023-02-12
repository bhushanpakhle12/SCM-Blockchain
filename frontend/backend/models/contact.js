const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
    min: 0,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
