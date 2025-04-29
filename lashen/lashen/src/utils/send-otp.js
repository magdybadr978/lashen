const axios = require('axios');

const sendOtp = async (user) => {
    try {
        const profileid = process.env.PROFILEID 
        const password = process.env.PASSWORD 
        const senderid = process.env.SENDERID 
        const message = user.otpData?.otp
        const mobileno = user.phone

        const url = `http://mshastra.com/sendurlcomma.aspx?user=${profileid}&pwd=${password}&senderid=${senderid}&CountryCode=05&mobileno=${mobileno}&msgtext=${message}&smstype=0/4/3`

        const response = await axios.get(url);
        console.log("SMS Response:", response.data);
    } catch (error) {
        console.error("Error sending SMS:", error.message);
    }
}

module.exports = {
    sendOtp
}