const getSessionData = () => {};

const flashDataToSession = (req, data, action) => {
  req.session.flashedData = data;
  req.session.save(action);
};

module.exports = {
  getSessionData, flashDataToSession,
};
