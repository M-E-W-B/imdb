const chai = require("chai");
const chaiHttp = require("chai-http");
const Movie = require("../models/movie");
const app = require("../app");
const { MongooseConnect } = require("../utils");

const should = chai.should();
const baseUrl = "/api/v1";

chai.use(chaiHttp);

describe("Movie Routes", () => {
  before(function(done) {
    MongooseConnect.open().then(() => done());
    // .catch(done);
  });
  // after(function(done) {
  //   MongooseConnect.close().then(() => done());
  //   .catch(done);
  // });
  beforeEach(done => {
    Movie.remove({}, err => {
      done();
    });
  });
  describe("/GET Movie", () => {
    it("it should GET all the movies", done => {
      chai
        .request(app)
        .get(baseUrl + "/movie")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("/POST movie", () => {
    it("it should not POST a movie without name field", done => {
      let movie = {
        genre: ["Adventure", "Biography", "Drama"],
        plot:
          "Based on a true story. After graduating from Emory University, Christopher McCandless abandoned his possessions, gave his entire savings account to charity, and hitchhiked to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters who shape his life.",
        runtime: 148,
        rating: 8.1
      };
      chai
        .request(app)
        .post(baseUrl + "/movie")
        .send(movie)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("errors");
          res.body.errors.should.have.property("name");
          res.body.errors.name.should.have.property("kind").eql("required");
          done();
        });
    });
    it("it should not POST a movie without genre field", done => {
      let movie = {
        name: "Into the Wild",
        plot:
          "Based on a true story. After graduating from Emory University, Christopher McCandless abandoned his possessions, gave his entire savings account to charity, and hitchhiked to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters who shape his life.",
        runtime: 148,
        rating: 8.1
      };
      chai
        .request(app)
        .post(baseUrl + "/movie")
        .send(movie)
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
    it("it should not POST a movie with empty genre", done => {
      let movie = {
        genre: [],
        name: "Into the Wild",
        plot:
          "Based on a true story. After graduating from Emory University, Christopher McCandless abandoned his possessions, gave his entire savings account to charity, and hitchhiked to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters who shape his life.",
        runtime: 148,
        rating: 8.1
      };
      chai
        .request(app)
        .post(baseUrl + "/movie")
        .send(movie)
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
    it("it should POST a movie ", done => {
      let movie = {
        genre: ["Adventure", "Biography", "Drama"],
        name: "Into the Wild",
        plot:
          "Based on a true story. After graduating from Emory University, Christopher McCandless abandoned his possessions, gave his entire savings account to charity, and hitchhiked to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters who shape his life.",
        runtime: 148,
        rating: 8.1
      };
      chai
        .request(app)
        .post(baseUrl + "/movie")
        .send(movie)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.genre.should.be.a("array");
          res.body.should.have.property("genre");
          res.body.should.have.property("name");
          res.body.should.have.property("runtime");
          res.body.should.have.property("rating");
          done();
        });
    });
  });
  describe("/GET/:id movie", () => {
    it("it should GET a movie by the given id", done => {
      let movie = new Movie({
        genre: ["Adventure", "Biography", "Drama"],
        name: "Into the Wild",
        plot:
          "Based on a true story. After graduating from Emory University, Christopher McCandless abandoned his possessions, gave his entire savings account to charity, and hitchhiked to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters who shape his life.",
        runtime: 148,
        rating: 8.1
      });
      movie.save((err, movie) => {
        chai
          .request(app)
          .get(baseUrl + "/movie/" + movie.id)
          .send(movie)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.genre.should.be.a("array");
            res.body.should.have.property("genre");
            res.body.should.have.property("name");
            res.body.should.have.property("runtime");
            res.body.should.have.property("rating");
            res.body.should.have.property("_id").eql(movie.id);
            done();
          });
      });
    });
  });
  describe("/PUT/:id movie", () => {
    it("it should UPDATE a movie given the id", done => {
      let movie = new Movie({
        genre: ["Adventure", "Biography", "Drama"],
        name: "Into the Wild",
        plot:
          "Based on a true story. After graduating from Emory University, Christopher McCandless abandoned his possessions, gave his entire savings account to charity, and hitchhiked to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters who shape his life.",
        runtime: 148,
        rating: 8.1
      });
      movie.save((err, movie) => {
        chai
          .request(app)
          .put(baseUrl + "/movie/" + movie.id)
          .send({
            genre: ["Adventure", "Biography", "Drama"],
            name: "Into the Wild",
            plot:
              "Based on a true story. After graduating from Emory University, Christopher McCandless abandoned his possessions, gave his entire savings account to charity, and hitchhiked to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters who shape his life.",
            runtime: 148,
            rating: 7.9
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("rating").eql(7.9);
            done();
          });
      });
    });
  });
  describe("/DELETE/:id movie", () => {
    it("it should DELETE a movie given the id", done => {
      let movie = new Movie({
        genre: ["Adventure", "Biography", "Drama"],
        name: "Into the Wild",
        plot:
          "Based on a true story. After graduating from Emory University, Christopher McCandless abandoned his possessions, gave his entire savings account to charity, and hitchhiked to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters who shape his life.",
        runtime: 148,
        rating: 8.1
      });
      movie.save((err, movie) => {
        chai
          .request(app)
          .delete(baseUrl + "/movie/" + movie.id)
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
