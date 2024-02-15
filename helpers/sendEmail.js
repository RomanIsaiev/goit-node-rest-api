const nodemailer = require("nodemailer");
const HttpError = require("../helpers/HttpError");

const { UKR_NET_EMAIL, UKR_NET_PASSWORD } = require("../config");

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: UKR_NET_EMAIL,
    pass: UKR_NET_PASSWORD,
  },
  tls: { rejectUnauthorized: false },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: UKR_NET_EMAIL };
  try {
    await transport.sendMail(email);
  } catch (error) {
    throw HttpError(404, "Wrong send email");
  }
};

module.exports = sendEmail;
