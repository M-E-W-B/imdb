const chai = require("chai");
const chaiHttp = require("chai-http");
const Episode = require("../models/episode");
const app = require("../app");
const { MongooseConnect } = require("../utils");

const should = chai.should();
const baseUrl = "/api/v1";

chai.use(chaiHttp);

describe("Episode Routes", () => {
  before(function(done) {
    MongooseConnect.open()
      .then(() => done())
      .catch(done);
  });
  // after(function(done) {
  //   MongooseConnect.close()
  //     .then(() => done())
  //     .catch(done);
  // });
  beforeEach(done => {
    Episode.remove({}, err => {
      done();
    });
  });
  describe("/GET Episode", () => {
    it("it should GET all the episodes", done => {
      chai
        .request(app)
        .get(baseUrl + "/episode")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("/POST episode", () => {
    it("it should not POST a episode without name field", done => {
      let episode = {
        sequence: 10,
        plot:
          "Elliot tries to save Darlene, but things do not go as planned; Mr. Robot must decide whether to step up or step back.",
        runtime: 57,
        rating: 9.6
      };
      chai
        .request(app)
        .post(baseUrl + "/episode")
        .send(episode)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("errors");
          res.body.errors.should.have.property("name");
          res.body.errors.name.should.have.property("kind").eql("required");
          done();
        });
    });
    it("it should not POST a episode without sequence field", done => {
      let episode = {
        name: "eps3.9_shutdown-r",
        plot:
          "Elliot tries to save Darlene, but things do not go as planned; Mr. Robot must decide whether to step up or step back.",
        runtime: 57,
        rating: 9.6
      };
      chai
        .request(app)
        .post(baseUrl + "/episode")
        .send(episode)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("errors");
          res.body.errors.should.have.property("sequence");
          res.body.errors.sequence.should.have.property("kind").eql("required");
          done();
        });
    });
    it("it should POST a episode ", done => {
      let episode = {
        name: "eps3.9_shutdown-r",
        sequence: 10,
        plot:
          "Elliot tries to save Darlene, but things do not go as planned; Mr. Robot must decide whether to step up or step back.",
        runtime: 57,
        rating: 9.6
      };
      chai
        .request(app)
        .post(baseUrl + "/episode")
        .send(episode)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("name");
          res.body.should.have.property("sequence");
          res.body.should.have.property("plot");
          res.body.should.have.property("runtime");
          res.body.should.have.property("rating");
          done();
        });
    });
  });
  describe("/GET/:id episode", () => {
    it("it should GET a episode by the given id", done => {
      let episode = new Episode({
        name: "eps3.9_shutdown-r",
        sequence: 10,
        plot:
          "Elliot tries to save Darlene, but things do not go as planned; Mr. Robot must decide whether to step up or step back.",
        runtime: 57,
        rating: 9.6
      });
      episode.save((err, episode) => {
        chai
          .request(app)
          .get(baseUrl + "/episode/" + episode.id)
          .send(episode)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("name");
            res.body.should.have.property("sequence");
            res.body.should.have.property("plot");
            res.body.should.have.property("runtime");
            res.body.should.have.property("rating");
            res.body.should.have.property("_id").eql(episode.id);
            done();
          });
      });
    });
  });
  describe("/PUT/:id episode", () => {
    it("it should UPDATE a episode given the id", done => {
      let episode = new Episode({
        name: "eps3.9_shutdown-r",
        sequence: 10,
        plot:
          "Elliot tries to save Darlene, but things do not go as planned; Mr. Robot must decide whether to step up or step back.",
        runtime: 57,
        rating: 9.6
      });
      episode.save((err, episode) => {
        chai
          .request(app)
          .put(baseUrl + "/episode/" + episode.id)
          .send({
            name: "eps3.10_shutdown-r",
            sequence: 10,
            plot:
              "Elliot tries to save Darlene, but things do not go as planned; Mr. Robot must decide whether to step up or step back.",
            runtime: 57,
            rating: 9.6
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("name").eql("eps3.10_shutdown-r");
            done();
          });
      });
    });
  });
  describe("/DELETE/:id episode", () => {
    it("it should DELETE a episode given the id", done => {
      let episode = new Episode({
        name: "eps3.9_shutdown-r",
        sequence: 10,
        plot:
          "Elliot tries to save Darlene, but things do not go as planned; Mr. Robot must decide whether to step up or step back.",
        runtime: 57,
        rating: 9.6
      });
      episode.save((err, episode) => {
        chai
          .request(app)
          .delete(baseUrl + "/episode/" + episode.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("ok").eql(1);
            res.body.should.have.property("n").eql(1);
            done();
          });
      });
    });
  });
});
