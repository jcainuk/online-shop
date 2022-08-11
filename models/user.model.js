const db = require('../data/database');

class User {
  constructor(email, password, fullname, street, postal, city) {
    this.email = email;
    this.password = password;
    this.name = fullname;
    this.address = {
      street,
      postalCode: postal,
      city,
    };
  }

  signup() {
    db.getDb().collection('users').insertOne({
      email: this.email,
      password: this.password, // ?,
      name: this.name,
      address: this.address,
    });
  }
}
