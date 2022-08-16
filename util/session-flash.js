const getSessionData = () => {};

const flashDataToSession = (req, data, action) => {
  req.session.flashedData = data;
};

module.exports = {
  getSessionData, flashDataToSession,
};
