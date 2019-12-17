// get health of application
exports.getHealth = (req, res) => {
  console.log('In controller - getHealth');
  res.json({
    status: 'UP',
  });
};
