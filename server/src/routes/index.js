const authRoute = require("./router/auth.route");
const userRouter = require("./router/user.route");
const route = (app) => {
  app.use("/api/v1", authRoute);
  app.use("/api/v1", userRouter);
};

module.exports = route;
