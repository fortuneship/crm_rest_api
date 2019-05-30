/* class Client {
  constructor(name, phone, email, dob) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.dob = dob;
  }

  createClient() {
    let sql = `INSERT INTO clients(name, phone, email, dob) \
                   VALUES('${this.name}','${this.phone}','${this.email}',${
      this.dob
    })`;
    return sql;
  }

  static getClientById(clientId) {
    let sql = `SELECT * FROM clients WHERE clientId = ${clientId}`;
    return sql;
  }

  static deleteClientById(clientId) {
    let sql = `DELETE FROM clients WHERE clientId = ${clientId}`;
    return sql;
  }

  static getAllClient() {
    let sql = `SELECT * FROM clients`;
    return sql;
  }
}

export default Client;
 */