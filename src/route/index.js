const userRoute = require("./userRoute");

const applyRoutes = app => {
  app.use("/users", userRoute)
}

module.exports = applyRoutes;