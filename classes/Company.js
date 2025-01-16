export class Company {
    constructor({ id, name, created, country }) {
      this.id = id;
      this.name = name;
      this.created = created;
      this.country = country;
      this.products = []; 
    }
  }