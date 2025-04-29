function generateOtp() {
  return Math.floor(1000 + Math.random() * 9000);
}

function expireOTP() {
  return Date.now() + 1000 * 60 * 5;
}

module.exports = { generateOtp, expireOTP };