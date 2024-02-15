const { BASE_URL } = require("../config");

const sendVerifyEmail = ({ email, verificationToken }) => {
  const emailData = {
    to: email,
    subject: "Verify email",
    html: `<a 
      target="_blank" 
      href="${BASE_URL}/api/auth/verify/${verificationToken}">
      Click verify email
      </a>`,
  };

  return emailData;
};

module.exports = sendVerifyEmail;
