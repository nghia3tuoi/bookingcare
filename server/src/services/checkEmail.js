const db = require("../models");

const checkEmail = async (email) => {
  try {
    const user = await db.User.findOne({
      where: {
        email,
      },
    });
    if (user) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return error;
  }
};
module.exports = checkEmail;
