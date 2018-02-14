const chai = require("chai");
const chaiHttp = require("chai-http");
const TvSeries = require("../models/tvseries");
const app = require("../app");
const { MongooseConnect } = require("../utils");

const should = chai.should();
const baseUrl = "/api/v1";

chai.use(chaiHttp);

describe("TvSeries Routes", () => {
  before(function(done) {
    MongooseConnect.open().then(() => done());
    // .catch(done);
  });
  // after(function(done) {
  //   MongooseConnect.close().then(() => done());
  //   .catch(done);
  // });
  beforeEach(done => {
    TvSeries.remove({}, err => {
      done();
    });
  });
  describe("/GET TvSeries", () => {
    it("it should GET all the tvseriess", done => {
      chai
        .request(app)
        .get(baseUrl + "/tvseries")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("/POST tvseries", () => {
    it("it should not POST a tvseries without name field", done => {
      let tvseries = {
        genre: ["Crime", "Drama", "Thriller"],
        plot:
          "Follows Elliot, a young programmer working as a cyber-security engineer by day, and a vigilante hacker by night.",
        yearFrom: 2015,
        rating: 8.6
      };
      chai
        .request(app)
        .post(baseUrl + "/tvseries")
        .send(tvseries)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("errors");
          res.body.errors.should.have.property("name");
          res.body.errors.name.should.have.property("kind").eql("required");
          done();
        });
    });
    it("it should not POST a tvseries without genre field", done => {
      let tvseries = {
        name: "Mr. Robot",
        plot:
          "Follows Elliot, a young programmer working as a cyber-security engineer by day, and a vigilante hacker by night.",
        yearFrom: 2015,
        rating: 8.6
      };
      chai
        .request(app)
        .post(baseUrl + "/tvseries")
        .send(tvseries)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("errors");
          res.body.errors.should.have.property("genre");
          res.body.errors.genre.should.have
            .property("kind")
            .eql("user defined");
          res.body.errors.genre.should.have
            .property("message")
            .eql("Genre cannot be empty!");
          done();
        });
    });
    it("it should not POST a tvseries with empty genre", done => {
      let tvseries = {
        name: "Mr. Robot",
        genre: [],
        plot:
          "Follows Elliot, a young programmer working as a cyber-security engineer by day, and a vigilante hacker by night.",
        yearFrom: 2015,
        rating: 8.6
      };
      chai
        .request(app)
        .post(baseUrl + "/tvseries")
        .send(tvseries)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("errors");
          res.body.errors.should.have.property("genre");
          res.body.errors.genre.should.have
            .property("kind")
            .eql("user defined");
          res.body.errors.genre.should.have
            .property("message")
            .eql("Genre cannot be empty!");
          done();
        });
    });
    it("it should POST a tvseries ", done => {
      let tvseries = {
        name: "Mr. Robot",
        genre: ["Crime", "Drama", "Thriller"],
        plot:
          "Follows Elliot, a young programmer working as a cyber-security engineer by day, and a vigilante hacker by night.",
        yearFrom: 2015,
        rating: 8.6
      };
      chai
        .request(app)
        .post(baseUrl + "/tvseries")
        .send(tvseries)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.genre.should.be.a("array");
          res.body.should.have.property("genre");
          res.body.should.have.property("name");
          res.body.should.have.property("plot");
          res.body.should.have.property("rating");
          done();
        });
    });
  });
  describe("/GET/:id tvseries", () => {
    it("it should GET a tvseries by the given id", done => {
      let tvseries = new TvSeries({
        name: "Mr. Robot",
        genre: ["Crime", "Drama", "Thriller"],
        plot:
          "Follows Elliot, a young programmer working as a cyber-security engineer by day, and a vigilante hacker by night.",
        yearFrom: 2015,
        rating: 8.6
      });
      tvseries.save((err, tvseries) => {
        chai
          .request(app)
          .get(baseUrl + "/tvseries/" + tvseries.id)
          .send(tvseries)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.genre.should.be.a("array");
            res.body.should.have.property("genre");
            res.body.should.have.property("name");
            res.body.should.have.property("plot");
            res.body.should.have.property("rating");
            res.body.should.have.property("_id").eql(tvseries.id);
            done();
          });
      });
    });
  });
  describe("/PUT/:id tvseries", () => {
    it("it should UPDATE a tvseries given the id", done => {
      let tvseries = new TvSeries({
        name: "Mr. Robot",
        genre: ["Crime", "Drama", "Thriller"],
        plot:
          "Follows Elliot, a young programmer working as a cyber-security engineer by day, and a vigilante hacker by night.",
        yearFrom: 2015,
        rating: 8.6
      });
      tvseries.save((err, tvseries) => {
        chai
          .request(app)
          .put(baseUrl + "/tvseries/" + tvseries.id)
          .send({
            name: "Mr. Robot 2.0",
            genre: ["Crime", "Drama", "Thriller"],
            plot:
              "Follows Elliot, a young programmer working as a cyber-security engineer by day, and a vigilante hacker by night.",
            yearFrom: 2015,
            rating: 8.6
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("name").eql("Mr. Robot 2.0");
            done();
          });
      });
    });
  });
  describe("/DELETE/:id tvseries", () => {
    it("it should DELETE a tvseries given the id", done => {
      let tvseries = new TvSeries({
        name: "Mr. Robot",
        genre: ["Crime", "Drama", "Thriller"],
        plot:
          "Follows Elliot, a young programmer working as a cyber-security engineer by day, and a vigilante hacker by night.",
        yearFrom: 2015,
        rating: 8.6
      });
      tvseries.save((err, tvseries) => {
        chai
          .request(app)
          .delete(baseUrl + "/tvseries/" + tvseries.id)
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
