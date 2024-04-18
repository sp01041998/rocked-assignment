const dealershipModel = require("../model/dealershipsModel");

exports.getAllDealer = async () => {
  const data = await dealershipModel.find();
  if (!data.length) {
    return {
      status: false,
      code: 400,
      message: "No dealer found",
    };
  }

  return {
    status: true,
    code: 200,
    data,
  };
};
