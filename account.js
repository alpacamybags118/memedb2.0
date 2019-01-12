const uuidv5 = require('uuid/v5');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class Account {
    constructor(username, password) {
        this.accountid = uuidv5();
        this.username = username;
        this.password = password;
    }
}