const chai = require("chai");
const chaiHttp = require("chai-http");
const Award = require("../models/award");
const app = require("../app");
const should = chai.should();

const baseUrl = "/api/v1";

chai.use(chaiHttp);

describe("Awards", () => {
  beforeEach(done => {
    Award.remove({}, err => {
      done();
    });
  });
  describe("/GET Award", () => {
    it("it should GET all the awards", done => {
      chai
        .request(app)
        .get(baseUrl + "/award")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("/POST award", () => {
    it("it should not POST a award without name field", done => {
      let award = {
        year: 2017,
        category: "Best Director"
      };
      chai
        .request(app)
        .post(baseUrl + "/award")
        .send(award)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("errors");
          res.body.errors.should.have.property("name");
          res.body.errors.name.should.have.property("kind").eql("required");
          done();
        });
    });
    it("it should not POST a award without year field", done => {
      let award = {
        name: "Academy Awards",
        category: "Best Director"
      };
      chai
        .request(app)
        .post(baseUrl + "/award")
        .send(award)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("errors");
          res.body.errors.should.have.property("year");
          res.body.errors.year.should.have.property("kind").eql("required");
          done();
        });
    });
    it("it should not POST a award without category field", done => {
      let award = {
        name: "Academy Awards",
        year: 2017
      };
      chai
        .request(app)
        .post(baseUrl + "/award")
        .send(award)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("errors");
          res.body.errors.should.have.property("category");
          res.body.errors.category.should.have.property("kind").eql("required");
          done();
        });
    });
    it("it should POST a award ", done => {
      let award = {
        name: "Academy Awards",
        year: 2017,
        category: "Best Director"
      };
      chai
        .request(app)
        .post(baseUrl + "/award")
        .send(award)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("name");
          res.body.should.have.property("year");
          res.body.should.have.property("category");
          done();
        });
    });
  });
  describe("/GET/:id award", () => {
    it("it should GET a award by the given id", done => {
      let award = new Award({
        name: "Academy Awards",
        year: 2017,
        category: "Best Director"
      });
      award.save((err, award) => {
        chai
          .request(app)
          .get(baseUrl + "/award/" + award.id)
          .send(award)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("name");
            res.body.should.have.property("year");
            res.body.should.have.property("category");
            res.body.should.have.property("_id").eql(award.id);
            done();
          });
      });
    });
  });
  describe("/PUT/:id award", () => {
    it("it should UPDATE a award given the id", done => {
      let award = new Award({
        name: "Academy Awards",
        year: 2017,
        category: "Best Director"
      });
      award.save((err, award) => {
        chai
          .request(app)
          .put(baseUrl + "/award/" + award.id)
          .send({
            name: "Academy Awards",
            year: 2017,
            category: "Best Actress"
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("category").eql("Best Actress");
            done();
          });
      });
    });
  });
  describe("/DELETE/:id award", () => {
    it("it should DELETE a award given the id", done => {
      let award = new Award({
        name: "Academy Awards",
        year: 2017,
        category: "Best Director"
      });
      award.save((err, award) => {
        chai
          .request(app)
          .delete(baseUrl + "/award/" + award.id)
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
