export class Review {
    constructor({ id, userId, text }) {
      this.id = id;
      this.userId = userId;
      this.text = text;
      this.user = null; 
    }
  }