process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET tools', () => {
  it('GET should return all the tools', (done) => {
    chai.request(server)
      .get('/api/tools')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.tools.should.be.a('array');
        res.body.tools.length.should.be.at.least(10); // there should be at least 10 tools
        done();
      });
  });
  it('GET should support offset and limit', (done) => {
    chai.request(server)
      .get('/api/tools?offset=0&limit=5')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.tools.should.be.a('array');
        res.body.tools.length.should.be.eql(5);
        done();
      });
  });
});
