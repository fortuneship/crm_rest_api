// const moment = require("moment");
// const uuid = require("uuid");

// class ClientModel {
//   constructor() {
//     this.clientsmodel = [];
//   }

//   create(data) {
//     const newClient = {
//       id: uuid.v4(),
//       name: data.name || "",
//       phone: data.phone || "",
//       email: data.email || "",
//       dob: data.dob || "",
//       createdDate: moment.now(),
//       modifiedDate: moment.now()
//     };
//     this.clientsmodel.push(newClient);
//     return newClient;
//   }

//   findOne(id) {
//     return this.clientsmodel.find(client => client.id === id);
//   }

//   findAll() {
//     return this.clientsmodel;
//   }

//   update(id, data) {
//     const client = this.findOne(id);
//     const index = this.clientsmodel.indexOf(client);
//     this.clientsmodel[index].name = data["name"] || client.name;
//     this.clientsmodel[index].phone = data["phone"] || client.phone;
//     this.clientsmodel[index].email = data["email"] || client.email;
//     this.clientsmodel[index].dob = data["dob"] || client.dob;
//     this.clientsmodel[index].modifiedDate = moment.now();
//     return this.clientsmodel[index];
//   }

//   delete(id) {
//     const client = this.findOne(id);
//     const index = this.clientsmodel.indexOf(client);
//     this.clientsmodel.splice(index, 1);
//     return {};
//   }
// }

// export default new ClientModel();
