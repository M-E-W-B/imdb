const chai = require("chai");
const chaiHttp = require("chai-http");
const Star = require("../models/star");
const app = require("../app");
const { MongooseConnect } = require("../utils");

const should = chai.should();
const baseUrl = "/api/v1";

chai.use(chaiHttp);

describe("Star Routes", () => {
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
    Star.remove({}, err => {
      done();
    });
  });
  describe("/GET Star", () => {
    it("it should GET all the stars", done => {
      chai
        .request(app)
        .get(baseUrl + "/star")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("/POST star", () => {
    it("it should not POST a star without name field", done => {
      let star = {
        profession: ["Actor", "Producer"],
        bio:
          "Henry William Dalgliesh Cavill (born 5 May 1983) is a British actor. He has appeared in the films The Count of Monte Cristo and Stardust, and played the role of Charles Brandon, 1st Duke of Suffolk, on the Showtime series The Tudors, from 2007 until 2010. He has been cast as Superman in the 2012 film Man of Steel.",
        imageUrl:
          "https://image.tmdb.org/t/p/w235_and_h235_face/hErUwonrQgY5Y7RfxOfv8Fq11MB.jpg",
        born: "1983-05-05",
        gender: "Male"
      };
      chai
        .request(app)
        .post(baseUrl + "/star")
        .send(star)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("errors");
          res.body.errors.should.have.property("name");
          res.body.errors.name.should.have.property("kind").eql("required");
          done();
        });
    });
    it("it should not POST a star without profession field", done => {
      let star = {
        name: "Henry Cavill",
        bio:
          "Henry William Dalgliesh Cavill (born 5 May 1983) is a British actor. He has appeared in the films The Count of Monte Cristo and Stardust, and played the role of Charles Brandon, 1st Duke of Suffolk, on the Showtime series The Tudors, from 2007 until 2010. He has been cast as Superman in the 2012 film Man of Steel.",
        imageUrl:
          "https://image.tmdb.org/t/p/w235_and_h235_face/hErUwonrQgY5Y7RfxOfv8Fq11MB.jpg",
        born: "1983-05-05",
        gender: "Male"
      };
      chai
        .request(app)
        .post(baseUrl + "/star")
        .send(star)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("errors");
          res.body.errors.should.have.property("profession");
          res.body.errors.profession.should.have
            .property("kind")
            .eql("user defined");
          res.body.errors.profession.should.have
            .property("message")
            .eql("Profession cannot be empty!");
          done();
        });
    });
    it("it should not POST a star with empty profession", done => {
      let star = {
        profession: [],
        name: "Henry Cavill",
        bio:
          "Henry William Dalgliesh Cavill (born 5 May 1983) is a British actor. He has appeared in the films The Count of Monte Cristo and Stardust, and played the role of Charles Brandon, 1st Duke of Suffolk, on the Showtime series The Tudors, from 2007 until 2010. He has been cast as Superman in the 2012 film Man of Steel.",
        imageUrl:
          "https://image.tmdb.org/t/p/w235_and_h235_face/hErUwonrQgY5Y7RfxOfv8Fq11MB.jpg",
        born: "1983-05-05",
        gender: "Male"
      };
      chai
        .request(app)
        .post(baseUrl + "/star")
        .send(star)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("errors");
          res.body.errors.should.have.property("profession");
          res.body.errors.profession.should.have
            .property("kind")
            .eql("user defined");
          res.body.errors.profession.should.have
            .property("message")
            .eql("Profession cannot be empty!");
          done();
        });
    });
    it("it should POST a star ", done => {
      let star = {
        profession: ["Actor", "Producer"],
        name: "Henry Cavill",
        bio:
          "Henry William Dalgliesh Cavill (born 5 May 1983) is a British actor. He has appeared in the films The Count of Monte Cristo and Stardust, and played the role of Charles Brandon, 1st Duke of Suffolk, on the Showtime series The Tudors, from 2007 until 2010. He has been cast as Superman in the 2012 film Man of Steel.",
        imageUrl:
          "https://image.tmdb.org/t/p/w235_and_h235_face/hErUwonrQgY5Y7RfxOfv8Fq11MB.jpg",
        born: "1983-05-05",
        gender: "Male"
      };
      chai
        .request(app)
        .post(baseUrl + "/star")
        .send(star)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.profession.should.be.a("array");
          res.body.should.have.property("name");
          res.body.should.have.property("bio");
          res.body.should.have.property("imageUrl");
          res.body.should.have.property("profession");
          res.body.should.have.property("born");
          res.body.should.have.property("gender");
          done();
        });
    });
  });
  describe("/GET/:id star", () => {
    it("it should GET a star by the given id", done => {
      let star = new Star({
        profession: ["Actor", "Producer"],
        name: "Henry Cavill",
        bio:
          "Henry William Dalgliesh Cavill (born 5 May 1983) is a British actor. He has appeared in the films The Count of Monte Cristo and Stardust, and played the role of Charles Brandon, 1st Duke of Suffolk, on the Showtime series The Tudors, from 2007 until 2010. He has been cast as Superman in the 2012 film Man of Steel.",
        imageUrl:
          "https://image.tmdb.org/t/p/w235_and_h235_face/hErUwonrQgY5Y7RfxOfv8Fq11MB.jpg",
        born: "1983-05-05",
        gender: "Male"
      });
      star.save((err, star) => {
        chai
          .request(app)
          .get(baseUrl + "/star/" + star.id)
          .send(star)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.profession.should.be.a("array");
            res.body.should.have.property("name");
            res.body.should.have.property("bio");
            res.body.should.have.property("imageUrl");
            res.body.should.have.property("profession");
            res.body.should.have.property("born");
            res.body.should.have.property("gender");
            res.body.should.have.property("_id").eql(star.id);
            done();
          });
      });
    });
  });
  describe("/PUT/:id star", () => {
    it("it should UPDATE a star given the id", done => {
      let star = new Star({
        profession: ["Actor", "Producer"],
        name: "Henry Cavill",
        bio:
          "Henry William Dalgliesh Cavill (born 5 May 1983) is a British actor. He has appeared in the films The Count of Monte Cristo and Stardust, and played the role of Charles Brandon, 1st Duke of Suffolk, on the Showtime series The Tudors, from 2007 until 2010. He has been cast as Superman in the 2012 film Man of Steel.",
        imageUrl:
          "https://image.tmdb.org/t/p/w235_and_h235_face/hErUwonrQgY5Y7RfxOfv8Fq11MB.jpg",
        born: "1983-05-05",
        gender: "Male"
      });
      star.save((err, star) => {
        chai
          .request(app)
          .put(baseUrl + "/star/" + star.id)
          .send({
            profession: ["Actor", "Producer"],
            name: "Henry Cavill",
            bio:
              "Henry William Dalgliesh Cavill (born 5 May 1983) is a British actor. He has appeared in the films The Count of Monte Cristo and Stardust, and played the role of Charles Brandon, 1st Duke of Suffolk, on the Showtime series The Tudors, from 2007 until 2010. He has been cast as Superman in the 2012 film Man of Steel.",
            imageUrl:
              "https://image.tmdb.org/t/p/w235_and_h235_face/hErUwonrQgY5Y7RfxOfv8Fq11MB.jpg",
            born: "1983-05-05",
            gender: "Female"
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("gender").eql("Female");
            done();
          });
      });
    });
  });
  describe("/DELETE/:id star", () => {
    it("it should DELETE a star given the id", done => {
      let star = new Star({
        profession: ["Actor", "Producer"],
        name: "Henry Cavill",
        bio:
          "Henry William Dalgliesh Cavill (born 5 May 1983) is a British actor. He has appeared in the films The Count of Monte Cristo and Stardust, and played the role of Charles Brandon, 1st Duke of Suffolk, on the Showtime series The Tudors, from 2007 until 2010. He has been cast as Superman in the 2012 film Man of Steel.",
        imageUrl:
          "https://image.tmdb.org/t/p/w235_and_h235_face/hErUwonrQgY5Y7RfxOfv8Fq11MB.jpg",
        born: "1983-05-05",
        gender: "Male"
      });
      star.save((err, star) => {
        chai
          .request(app)
          .delete(baseUrl + "/star/" + star.id)
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
