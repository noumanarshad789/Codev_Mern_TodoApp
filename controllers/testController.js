const testingController = (req, res) => {
  res.status(200).send("<h1>Welcome to Todo Mern app</h1>");
};

module.exports = { testingController };
