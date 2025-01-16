export class Product {
    constructor({ id, name, description, companyId, reviewIds }) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.companyId = companyId;
      this.reviewIds = reviewIds;
      this.reviews = []; 
    }
  }