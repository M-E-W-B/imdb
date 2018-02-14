const chai = require("chai");
const chaiHttp = require("chai-http");
const User = require("../models/user");
const app = require("../app");
const { MongooseConnect } = require("../utils");

const should = chai.should();
const baseUrl = "/api/v1";

chai.use(chaiHttp);

describe("User Routes", () => {
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
    User.remove({}, err => {
      done();
    });
  });
  describe("/GET User", () => {
    it("it should GET all the users", done => {
      chai
        .request(app)
        .get(baseUrl + "/user")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("/POST user", () => {
    it("it should not POST a user without firstName field", done => {
      let user = {
        lastName: "Shirish",
        password: "google",
        phoneNumber: 8796678632,
        email: "kisley@gmail.com"
      };
      chai
        .request(app)
        .post(baseUrl + "/signup")
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("errors");
          res.body.errors.should.have.property("firstName");
          res.body.errors.firstName.should.have
            .property("kind")
            .eql("required");
          done();
        });
    });
    it("it should not POST a user without email field", done => {
      let user = {
        firstName: "Kisley",
        lastName: "Shirish",
        password: "google",
        phoneNumber: 8796678632
      };
      chai
        .request(app)
        .post(baseUrl + "/signup")
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("errors");
          res.body.errors.should.have.property("email");
          res.body.errors.email.should.have.property("kind").eql("required");
          done();
        });
    });
    it("it should not POST a user without phoneNumber field", done => {
      let user = {
        firstName: "Kisley",
        lastName: "Shirish",
        password: "google",
        email: "kisley@gmail.com"
      };
      chai
        .request(app)
        .post(baseUrl + "/signup")
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("errors");
          res.body.errors.should.have.property("phoneNumber");
          res.body.errors.phoneNumber.should.have
            .property("kind")
            .eql("required");
          done();
        });
    });
    it("it should not POST a user without password field", done => {
      let user = {
        firstName: "Kisley",
        lastName: "Shirish",
        phoneNumber: 8796678632,
        email: "kisley@gmail.com"
      };
      chai
        .request(app)
        .post(baseUrl + "/signup")
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql("Password is required!");
          done();
        });
    });
    it("it should not POST if password is not valid", done => {
      let user = {
        firstName: "Kisley",
        lastName: "Shirish",
        password: "xxxxx",
        phoneNumber: 8796678632,
        email: "kisley@gmail.com"
      };
      chai
        .request(app)
        .post(baseUrl + "/signup")
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have
            .property("message")
            .eql("Only 6 to 20 character length allowed!");
          done();
        });
    });
    it("it should not POST if phoneNumber is not valid", done => {
      let user = {
        firstName: "Kisley",
        lastName: "Shirish",
        password: "google",
        phoneNumber: 1234567890,
        email: "kisley@gmail.com"
      };
      chai
        .request(app)
        .post(baseUrl + "/signup")
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("errors");
          res.body.errors.should.have.property("phoneNumber");
          res.body.errors.phoneNumber.should.have
            .property("kind")
            .eql("user defined");
          res.body.errors.phoneNumber.should.have
            .property("message")
            .eql("Phone no. should start with [6,7,8,9]!");
          done();
        });
    });
    it("it should not POST if email is not valid", done => {
      let user = {
        firstName: "Kisley",
        lastName: "Shirish",
        password: "google",
        phoneNumber: 8796678632,
        email: "kisley@gmail"
      };
      chai
        .request(app)
        .post(baseUrl + "/signup")
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("errors");
          res.body.errors.should.have.property("email");
          res.body.errors.email.should.have
            .property("kind")
            .eql("user defined");
          done();
        });
    });
    it("it should POST a user ", done => {
      let user = {
        firstName: "Kisley",
        lastName: "Shirish",
        password: "google",
        phoneNumber: 8796678632,
        email: "kisley@gmail.com"
      };
      chai
        .request(app)
        .post(baseUrl + "/signup")
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("firstName");
          res.body.should.have.property("lastName");
          res.body.should.have.property("phoneNumber");
          res.body.should.have.property("password");
          res.body.should.have.property("email");
          done();
        });
    });
  });
  describe("/GET/:id user", () => {
    it("it should GET a user by the given id", done => {
      let user = new User({
        firstName: "Kisley",
        lastName: "Shirish",
        password: "google",
        phoneNumber: 8796678632,
        email: "kisley@gmail.com"
      });
      user.save((err, user) => {
        chai
          .request(app)
          .get(baseUrl + "/user/" + user.id)
          .send(user)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("firstName");
            res.body.should.have.property("lastName");
            res.body.should.have.property("phoneNumber");
            res.body.should.have.property("password");
            res.body.should.have.property("email");
            res.body.should.have.property("_id").eql(user.id);
            done();
          });
      });
    });
  });
  describe("/PUT/:id user", () => {
    it("it should UPDATE a user given the id", done => {
      let user = new User({
        firstName: "Kisley",
        lastName: "Shirish",
        password: "google",
        phoneNumber: 8796678632,
        email: "kisley@gmail.com"
      });
      user.save((err, user) => {
        chai
          .request(app)
          .put(baseUrl + "/user/" + user.id)
          .send({
            firstName: "K",
            lastName: "Shirish",
            password: "google",
            phoneNumber: 8796678632,
            email: "kisley@gmail.com"
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("firstName").eql("K");
            done();
          });
      });
    });
  });
  describe("/DELETE/:id user", () => {
    it("it should DELETE a user given the id", done => {
      let user = new User({
        firstName: "Kisley",
        lastName: "Shirish",
        password: "google",
        phoneNumber: 8796678632,
        email: "kisley@gmail.com"
      });
      user.save((err, user) => {
        chai
          .request(app)
          .delete(baseUrl + "/user/" + user.id)
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
