export interface Product {
    id: number; // Unique identifier for the product
    name: string; // Name of the product
    description: string; // Description of the product
    price: number; // Price of the product
    rating: string; // Rating of the product (e.g., "★★★★☆")
    image: string; // URL of the product image
    reviews: UserReview[]; // Array of user reviews
    quantity:number;
  }
  
  export interface UserReview {
    id: number; // Unique identifier for the review
    username: string; // Name of the user who left the review
    rating: number; // Rating given by the user (e.g., 4.5)
    comment: string; // User's review comment
    date: Date; // Date when the review was posted
  }
  