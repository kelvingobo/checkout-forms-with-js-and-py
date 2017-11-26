module.exports = function(app) {
  // create a new student
  app.post('/process-form', (req, res) => {
    console.log(req.body);
  });

};
