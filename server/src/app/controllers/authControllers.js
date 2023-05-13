const db = require("../../models");
const checkEmail = require("../../services/checkEmail");
class Authcontrollers {
  Register = async (req, res, next) => {
    try {
      const { email, password, lastName, firstName, address, phoneNumber } =
        req.body;
      const isValidEmail = await checkEmail(email);
      if (isValidEmail) {
        return res.status(401).json({
          errCode: 1,
          message: "Email is exist!",
        });
      } else {
        const newUser = await db.User.create({
          email,
          password,
          firstName,
          lastName,
          address,
          phoneNumber,
        });
        await newUser.save();
        return res.status(200).json({
          errCode: 0,
          message: "Register successfully!",
        });
      }
    } catch (error) {
      return res.status(500).json({
        error: -1,
        message: "Request to server register failed!",
      });
    }
  };
  Login = async (req, res, next) => {
    try {
      const isExistEmail = await checkEmail(req.body.email);
      if (isExistEmail) {
        const user = await db.User.findOne({
          where: {
            email: req.body.email,
          },
        });
        if (req.body.password !== user.password) {
          return res.status(400).json({
            errCode: 2,
            message: "Password is not correct!",
          });
        }
        return res.status(200).json({
          errCode: 0,
          data: user,
        });
      } else {
        return res.status(400).json({
          errCode: 1,
          message: "email is not exist!",
        });
      }
    } catch (error) {
      return res.status(500).json({
        errCode: -1,
        message: "Login failed!",
      });
    }
  };
  Logout = (req, res, next) => {};
}
module.exports = new Authcontrollers();
