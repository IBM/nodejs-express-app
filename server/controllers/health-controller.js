// get health of application
class HealthController {
  getHealth = (req, res) => {
    console.log('In controller - getHealth');
    res.json({
      status: 'UP',
    });
  };
}


export default HealthController;
