import { getProducts, getUsers, getCompanies, getReviews } from './api.js';
import { User } from './classes/User.js';
import { Company } from './classes/Company.js';
import { Product } from './classes/Product.js';
import { Review } from './classes/Review.js';

let productsData, usersData, reviewsData, companiesData = [];

//получение данных
async function getData() {
   try {
      productsData = await getProducts();
      usersData = await getUsers();
      reviewsData = await getReviews();
      companiesData = await getCompanies();
   } catch (error) {
      console.error("Error getting data:", error);
      throw error;
   }
}

function mapToObject(array, className) {
   return array.map((obj) => new className(obj));
}

//создание массивов экземпляров объектов
let products, users, reviews, companies = [];
async function mapDataToObjects() {
   try {
      await getData();
      products = mapToObject(productsData, Product);
      users = mapToObject(usersData, User);
      reviews = mapToObject(reviewsData, Review);
      companies = mapToObject(companiesData, Company);
   } catch (error) {
      console.error("Error processing data:", error);
      throw error;
   }
}

//объединение массивов
async function combineData() {
   try {
      await mapDataToObjects();
      reviews.forEach((review) => {
         review.user = users.find((user) => user.id === review.userId);
      })

      products.forEach((product) => {
         product.reviews = reviews.filter((review) => product.reviewIds.includes(review.id));
      })

      companies.forEach((company) => {
         company.products = products.filter((product) => product.companyId === company.id);
      })
      return companies;
   } catch (error) {
      console.error("Error combining data:", error);
      return [];
   }
}








