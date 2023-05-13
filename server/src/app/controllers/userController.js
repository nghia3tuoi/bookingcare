const db = require("../../models");

class UserController {
  getUser = async (req, res, next) => {
    try {
      const { id } = req.query;
      if (id) {
        const user = await db.User.findOne({
          where: {
            id,
          },
        });
        return res.status(200).json({
          errCode: 0,
          data: user,
        });
      } else {
        const usersAll = await db.User.findAll({});
        return res.status(200).json({
          errCode: 0,
          data: usersAll,
        });
      }
    } catch (error) {
      return res.status(500).json({
        errCode: -1,
        message: "Request to server get user failed!",
      });
    }
  };
  updateUser = async (req, res, next) => {
    try {
      const { email, firstName, lastName, address, phoneNumber } = req.body;
      const { id } = req.query;
      const user = await db.User.findOne({
        where: {
          id,
        },
      });
      if (user) {
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.address = address;
        user.phoneNumber = phoneNumber;
        await user.save();
      }
      return res.status(200).json({
        errCode: 0,
        message: "Update user successfully!",
      });
    } catch (error) {
      return res.status(500).json({
        errCode: -1,
        message: "Request to server update user failed!",
      });
    }
  };
  removeUser = async (req, res, next) => {
    try {
      const { id } = req.query;
      const user = await db.User.findOne({
        where: {
          id,
        },
      });
      if (user) {
        await db.User.destroy({
          where: {
            id,
          },
          force: false,
        });
        return res.status(200).json({
          errCode: 0,
          message: "Delete user successfully!",
        });
      } else {
        return res.status(404).json({
          errCode: 0,
          message: "Not found user!",
        });
      }
    } catch (error) {
      return res.status(500).json({
        errCode: -1,
        message: "Request to server is delete user failed!",
      });
    }
  };
  getAllCode = async (req, res, next) => {
    try {
      const { type } = req.query;
      if (!type) {
        const dataAllCodes = await db.AllCode.findOne();
        return res.status(200).json({
          errCode: 0,
          dataAllCodes,
        });
      } else {
        const dataAllCodes = await db.AllCode.findAll({
          where: {
            type,
          },
        });
        return res.status(200).json({
          errCode: 0,
          dataAllCodes,
        });
      }
    } catch (error) {
      return res.status(500).json({
        errCode: -1,
        message: "Request to sever get allcode failed!",
      });
    }
  };
}
module.exports = new UserController();
