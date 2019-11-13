// get health of application
exports.getHealth = (req, res, next) => {
  console.log('In controller - getHealth');
  res.json({
    status: 'UP',
  });
};
