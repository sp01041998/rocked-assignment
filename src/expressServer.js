const {app} = require('./server')

app.get("/", (req, res) => res.send("backend is running"))
app.use("/topic", require("./route/topicRoute"))
app.use("/employee", require("./route/employeeRoute"))
app.use("/roaster", require("./route/roasterRoute"))
app.use("/dealership", require("./route/dealershipRoute"))
app.use('/campaign', require("./route/campaignRoute"))


module.exports = app