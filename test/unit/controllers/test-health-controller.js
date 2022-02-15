import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import HealthController from '../../../server/controllers/health-controller.js';
import res from 'express/lib/response.js';

const expect = chai.expect;
const sandbox = sinon.createSandbox();
chai.use(sinonChai);

// example unit test of health controller
describe('Test health controller', () => {
  before(() => {
    sandbox.stub(res, 'json');
  });

  afterEach(() => {
    sandbox.reset();
  });

  after(() => {
    sandbox.restore();
  });

  it('should return status UP', () => {
    const mockReq = {};
    const healthController = new HealthController();

    healthController.getHealth(mockReq, res);
    expect(res.json).to.have.been.calledOnceWith({
      status: 'UP',
    });
  });
});
