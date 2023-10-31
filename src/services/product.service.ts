import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  products = [
    {
      name: "Product 1",
      price: "19.99",
      rating: "★★★☆☆",
      image: "/assets/product1.jpg",
      description: `
        Explore the elegance and grace of our Product 1. These classic pearl earrings are perfect for special occasions. 
        The pearls are hand-picked for their quality and luster, ensuring a timeless and sophisticated look. 
        These earrings are designed to elevate your style and complement your attire, whether it's a formal event or a casual outing.
  
        Each pearl is carefully set in a delicate, silver framework that adds to their beauty. 
        The intricate design captures the essence of femininity and adds a touch of sophistication to your appearance. 
        With a secure clasp, these earrings stay comfortably in place. 
        Wear them with confidence and let your beauty shine with the glow of these elegant pearls.
  
        Product 1 features a timeless design that appeals to classic and contemporary tastes. 
        Its versatility allows you to pair it with a wide range of outfits, making it a must-have accessory 
        for every fashion-conscious individual.
  
        Whether you're purchasing these pearls as a gift or treating yourself to something special, 
        Product 1 will leave a lasting impression. It's a symbol of luxury and elegance, 
        perfect for enhancing your jewelry collection.
      `, quantity: 1,
    },
    {
      name: "Product 2",
      price: "24.99",
      rating: "★★★☆☆",
      image: "/assets/product2.jpg",
      description: `
        Discover the beauty of Product 2 with its elegant design and unmatched quality. 
        These earrings are a perfect choice for adding a touch of sophistication to your style. 
        Crafted with attention to detail, they feature a unique combination of elements that create a captivating look.
  
        The shimmering crystals and silver accents make these earrings a statement piece that complements your outfit. 
        You'll love the way they catch the light and shine with every movement. 
        With a comfortable fit and secure clasp, they stay in place throughout the day.
  
        Product 2 has a timeless appeal, making it a versatile addition to your jewelry collection. 
        Whether you're heading to a party or a formal event, these earrings are sure to impress. 
        The meticulous craftsmanship and exquisite design ensure that you stand out from the crowd.
  
        These earrings are more than just accessories; they are a reflection of your style and taste. 
        When you choose Product 2, you're choosing elegance and confidence.
      `, quantity: 1,
    },
    {
      name: "Product 3",
      price: "14.95",
      rating: "★★★★☆",
      image: "/assets/product3.jpg",
      description: `
        Introducing Product 3, a stunning gemstone ring that adds a pop of color to your life. 
        This unique masterpiece is crafted with precision and showcases the beauty of nature's gemstones. 
        Each ring is handcrafted to perfection and designed to turn heads.
  
        The gemstone at the center is carefully chosen for its quality and color. 
        It's surrounded by a halo of sparkling diamonds that enhance its brilliance. 
        The combination of colors and shapes creates a captivating piece of jewelry.
  
        Product 3 is versatile and can be worn on various occasions, from casual outings to formal gatherings. 
        It's a true representation of beauty and sophistication, making it a must-have in your collection. 
        The ring's design is not only aesthetically pleasing but also comfortable to wear throughout the day.
  
        When you choose Product 3, you're choosing a touch of luxury that brings a smile to your face 
        every time you look at your hand. It's a conversation starter and a symbol of your unique style.
      `, quantity: 1,
    },
    {
      name: "Product 4",
      price: "29.99",
      rating: "★★★☆☆",
      image: "/assets/product4.jpg",
      description: `
        Elevate your style with Product 4, a pair of sophisticated diamond earrings that are perfect for every occasion. 
        These earrings are crafted with precision, and the attention to detail is evident in their design.
  
        The diamonds are selected for their quality and brilliance, ensuring that they catch the light beautifully. 
        With a comfortable and secure fit, Product 4 is designed to be worn throughout the day. 
        Whether you're going to a wedding or a romantic dinner, these earrings are the perfect choice.
  
        The classic yet stylish design of Product 4 makes it a versatile addition to your jewelry collection. 
        The combination of white gold and diamonds creates a timeless look that never goes out of style.
  
        When you choose Product 4, you're not just buying earrings; you're investing in a piece of art 
        that enhances your beauty and confidence.
      `, quantity: 1,
    },
    {
      name: "Product 5",
      price: "39.99",
      rating: "★★★☆☆",
      image: "/assets/product5.jpg",
      description: `
        Add a touch of glamour to your jewelry collection with Product 5. These stunning pearl necklaces are a symbol 
        of timeless beauty and elegance. Each pearl is carefully chosen for its luster and quality, ensuring 
        a luxurious and sophisticated look.
  
        Product 5 is designed to complement your style, whether you're dressing up for a formal event or 
        adding a touch of elegance to your casual outfit. The pearls are delicately strung to create 
        a harmonious and captivating design that's bound to impress.
  
        The secure clasp ensures that your necklace stays in place, allowing you to wear it with confidence. 
        Product 5 is not just an accessory; it's a statement of your taste and appreciation for fine jewelry.
  
        With these pearls around your neck, you're sure to turn heads and receive compliments. 
        Discover the magic of Product 5 and add a touch of luxury to your life.
      `, quantity: 1,
    },
    {
      name: "Product 6",
      price: "49.99",
      rating: "★★★★☆",
      image: "/assets/product6.jpg",
      description: `
        Product 6 is a masterpiece of design and craftsmanship. These exquisite gemstone earrings are a testament 
        to luxury and style. Each gemstone is hand-picked for its quality and color, 
        ensuring a one-of-a-kind piece of jewelry that captures attention.
  
        The intricate design of Product 6 is not only visually stunning but also comfortable to wear. 
        The combination of gemstones and white gold creates a captivating and timeless look.
  
        These earrings are perfect for adding a pop of color to your outfit, whether you're going to a party 
        or a formal event. Product 6 is a conversation starter and a symbol of your unique style.
  
        When you choose Product 6, you're choosing elegance, confidence, and a touch of luxury.
      `, quantity: 1,
    },
    {
      name: "Product 7",
      price: "22.95",
      rating: "★★★★☆",
      image: "/assets/product7.jpg",
      description: `
        Explore the beauty of Product 7, a unique and captivating diamond necklace that radiates elegance and grace. 
        Each diamond is carefully selected for its brilliance and clarity, creating a piece of jewelry 
        that enhances your beauty on any occasion.
  
        The design of Product 7 is a perfect balance of classic and contemporary elements. 
        The diamonds are set in a white gold framework that adds to their allure. 
        These necklaces are perfect for special occasions or as an everyday statement piece.
  
        With a secure clasp, Product 7 remains comfortably in place throughout the day. 
        Whether you're attending a gala or a romantic dinner, this necklace is a perfect choice.
  
        Make a statement with Product 7 and let your elegance shine through.
      `,quantity: 1,}, 
    {
      name: "Product 8",
      price: "21.95",
      rating: "★★★☆☆",
      image: "/assets/product8.jpg",
      description: `
          Experience the luxury of Product 8, a stunning sapphire necklace that enhances your style and beauty.
          Each sapphire is carefully selected for its vivid color and clarity, ensuring a piece of jewelry that stands out.
    
          The unique design of Product 8 captures attention with its intricate details and timeless appeal.
          The sapphires are set in a white gold framework that adds to their allure.
          This necklace is perfect for special occasions or as a statement piece for your everyday style.
    
          With a secure clasp, Product 8 stays comfortably in place, allowing you to wear it with confidence.
          It's not just a necklace; it's a symbol of elegance and sophistication, perfect for enhancing your collection.
    
          When you choose Product 8, you're choosing to shine with the beauty of fine jewelry.
        `, quantity: 1,
    },
    {
      name: "Product 9",
      price: "35.99",
      rating: "★★★★☆",
      image: "/assets/product9.jpg",
      description: `
          Product 9 is a masterpiece of design and craftsmanship. These exquisite emerald earrings are a testament
          to luxury and style. Each emerald is hand-picked for its quality and captivating color,
          ensuring a one-of-a-kind piece of jewelry that's bound to impress.
    
          The intricate design of Product 9 is not only visually stunning but also comfortable to wear.
          The combination of emeralds and white gold creates a captivating and timeless look.
    
          These earrings are perfect for adding a pop of color to your outfit, whether you're going to a party
          or a formal event. Product 9 is a conversation starter and a symbol of your unique style.
    
          When you choose Product 9, you're choosing elegance, confidence, and a touch of luxury.
        `,
      quantity: 1,
    },
    {
      name: "Product 10",
      price: "27.95",
      rating: "★★★★☆",
      image: "/assets/product10.jpg",
      description: `
          Add a touch of sophistication to your jewelry collection with Product 10. These stunning ruby necklaces are
          designed to enhance your style and make a statement. Each ruby is hand-selected for its brilliant red hue,
          ensuring a piece of jewelry that radiates luxury.
    
          The rubies are set in an elegant white gold framework that creates a timeless and captivating design.
          Product 10 is perfect for special occasions or as an everyday accessory.
          With a comfortable fit and secure clasp, you can wear it with confidence.
    
          These necklaces are more than just jewelry; they are a reflection of your love for elegance and luxury.
          Whether you're attending a gala or celebrating a special occasion, Product 10 is the perfect choice.
    
          When you choose Product 10, you're choosing to shine with the brilliance of fine jewelry.
        `,
      quantity: 1,
    },
    {
      name: "Product 11",
      price: "14.99",
      rating: "★★★☆☆",
      image: "/assets/product11.jpg",
      description: `
          Product 11 is a symbol of elegance and charm. These exquisite pearl bracelets are a statement
          of timeless beauty and grace. Each pearl is hand-selected for its quality and luster,
          ensuring a luxurious and elegant look.
    
          The pearls are delicately strung to create a harmonious design that adds a touch of grace to your wrist.
          The secure clasp ensures that your bracelet stays in place throughout the day,
          allowing you to wear it with confidence.
    
          Whether you're attending a wedding or going out for a casual lunch, Product 11 is a versatile accessory
          that complements your style. It's not just a bracelet; it's an expression of your love for fine jewelry.
    
          When you choose Product 11, you're choosing elegance and timeless beauty.
        `,
      quantity: 1,
    },
    {
      name: "Product 12",
      price: "39.99",
      rating: "★★★★☆",
      image: "/assets/product12.jpg",
      description: `
          Discover the charm of Product 12, a captivating amethyst necklace that adds a pop of color to your style.
          Each amethyst is hand-picked for its quality and alluring purple hue,
          ensuring a one-of-a-kind piece of jewelry that's bound to impress.
    
          The amethysts are set in an intricate white gold design that enhances their brilliance and charm.
          The combination of colors and shapes creates a mesmerizing piece of jewelry that turns heads.
    
          Product 12 is versatile and perfect for various occasions, from parties to formal events.
          It's a symbol of luxury and style, representing your unique taste in fine jewelry.
    
          When you choose Product 12, you're choosing to add a touch of elegance and color to your life.
        `,
      quantity: 1,
    },





    {
      name: "Product 13",
      price: "39.95",
      rating: "★★★★☆",
      image: "/assets/product13.jpg",
      description: `
          Experience the luxury of Product 13, a stunning diamond necklace that enhances your style and beauty. 
          Each diamond is carefully selected for its brilliance and clarity, ensuring a piece of jewelry that stands out.
    
          The unique design of Product 13 captures attention with its intricate details and timeless appeal. 
          The diamonds are set in a white gold framework that adds to their allure. 
          This necklace is perfect for special occasions or as a statement piece for your everyday style.
    
          With a secure clasp, Product 13 stays comfortably in place, allowing you to wear it with confidence. 
          It's not just a necklace; it's a symbol of elegance and sophistication, perfect for enhancing your collection.
    
          When you choose Product 13, you're choosing to shine with the beauty of fine jewelry.
        `,
      quantity: 1,
    },
    {
      name: "Product 14",
      price: "29.99",
      rating: "★★★☆☆",
      image: "/assets/product14.jpg",
      description: `
          Elevate your style with Product 14, a pair of sophisticated diamond earrings that are perfect for every occasion. 
          These earrings are crafted with precision, and the attention to detail is evident in their design.
    
          The diamonds are selected for their quality and brilliance, ensuring that they catch the light beautifully. 
          With a comfortable and secure fit, Product 14 is designed to be worn throughout the day. 
          Whether you're going to a wedding or a romantic dinner, these earrings are the perfect choice.
    
          The classic yet stylish design of Product 14 makes it a versatile addition to your jewelry collection. 
          The combination of white gold and diamonds creates a timeless look that never goes out of style.
    
          When you choose Product 14, you're not just buying earrings; you're investing in a piece of art 
          that enhances your beauty and confidence.
        `,
      quantity: 1,
    },
    {
      name: "Product 15",
      price: "49.95",
      rating: "★★★★☆",
      image: "/assets/product15.jpg",
      description: `
          Product 15 is a masterpiece of design and craftsmanship. These exquisite gemstone earrings are a testament 
          to luxury and style. Each gemstone is hand-picked for its quality and color, 
          ensuring a one-of-a-kind piece of jewelry that's bound to impress.
    
          The intricate design of Product 15 is not only visually stunning but also comfortable to wear. 
          The combination of gemstones and white gold creates a captivating and timeless look.
    
          These earrings are perfect for adding a pop of color to your outfit, whether you're going to a party 
          or a formal event. Product 15 is a conversation starter and a symbol of your unique style.
    
          When you choose Product 15, you're choosing elegance, confidence, and a touch of luxury.
        `,
      quantity: 1,
    },
    {
      name: "Product 16",
      price: "24.99",
      rating: "★★★★★",
      image: "/assets/product16.jpg",
      description: `
          Add a touch of sophistication to your jewelry collection with Product 16. These stunning diamond necklaces 
          are designed to enhance your style and make a statement. Each diamond is hand-selected for its brilliance 
          and clarity, ensuring a piece of jewelry that radiates luxury.
    
          The diamonds are set in an elegant white gold framework that creates a timeless and captivating design. 
          Product 16 is perfect for special occasions or as an everyday accessory. 
          With a comfortable fit and secure clasp, you can wear it with confidence.
    
          These necklaces are more than just jewelry; they are a reflection of your love for elegance and luxury. 
          Whether you're attending a gala or celebrating a special occasion, Product 16 is the perfect choice.
    
          When you choose Product 16, you're choosing to shine with the brilliance of fine jewelry.
        `, quantity: 1,

    },
    {
      name: "Product 17",
      price: "19.99",
      rating: "★★★★☆",
      image: "/assets/product17.jpg",
      description: `
          Product 17 is a symbol of elegance and charm. These exquisite pearl bracelets are a statement 
          of timeless beauty and grace. Each pearl is hand-selected for its quality and luster, 
          ensuring a luxurious and elegant look.
    
          The pearls are delicately strung to create a harmonious design that adds a touch of grace to your wrist. 
          The secure clasp ensures that your bracelet stays in place throughout the day, 
          allowing you to wear it with confidence.
    
          Whether you're attending a wedding or going out for a casual lunch, Product 17 is a versatile accessory 
          that complements your style. It's not just a bracelet; it's an expression of your love for fine jewelry.
    
          When you choose Product 17, you're choosing elegance and timeless beauty.
        `,
      quantity: 1,
    },
    {
      name: "Product 18",
      price: "34.99",
      rating: "★★★★☆",
      image: "/assets/product18.jpg",
      description: `
          Discover the charm of Product 18, a captivating gemstone necklace that adds a pop of color to your style. 
          Each gemstone is hand-picked for its quality and hue, ensuring a one-of-a-kind piece of jewelry 
          that's bound to impress.
    
          The gemstones are set in an intricate white gold design that enhances their brilliance and charm. 
          The combination of colors and shapes creates a mesmerizing piece of jewelry that turns heads.
    
          Product 18 is versatile and perfect for various occasions, from parties to formal events. 
          It's a symbol of luxury and style, representing your unique taste in fine jewelry.
    
          When you choose Product 18, you're choosing to add a touch of elegance and color to your life.
        `,
      quantity: 1,
    },
    {
      name: "Product 19",
      price: "29.99",
      rating: "★★★☆☆",
      image: "/assets/product19.jpg",
      description: `
          Add a touch of sophistication to your collection with Product 19. These stunning diamond rings are 
          designed to enhance your style and make a statement. Each diamond is hand-selected for its brilliance 
          and clarity, ensuring a piece of jewelry that radiates luxury.
    
          The diamonds are set in an elegant white gold framework, creating a timeless and captivating design. 
          Product 19 is perfect for special occasions or as an everyday accessory. 
          With a comfortable fit and secure setting, you can wear it with confidence.
    
          These rings are more than just jewelry; they are an expression of your love for elegance and luxury. 
          Whether you're celebrating an anniversary or treating yourself, Product 19 is the perfect choice.
        `, quantity: 1,
    },
    {
      name: "Product 20",
      price: "44.95",
      rating: "★★★★★",
      image: "/assets/product20.jpg",
      description: `
          Product 20 is a celebration of elegance and charm. These exquisite gemstone rings are designed to make 
          a statement and capture attention. Each gemstone is hand-picked for its quality and hue, 
          creating a piece of jewelry that adds a pop of color to your life.
    
          The gemstones are set in a unique white gold design that enhances their brilliance and charm. 
          The combination of colors and shapes creates a captivating piece of jewelry that complements your style.
    
          Product 20 is perfect for various occasions, from parties to formal events. It's an expression of your 
          unique taste and a symbol of your love for fine jewelry.
    
          When you choose Product 20, you're choosing to stand out and embrace the beauty of colorful gemstones.
        `,
      quantity: 1,
    },



  ]


  private cartItems: Product[] = [];
  private cartItemsSubject = new BehaviorSubject<Product[]>([]); 
   private cartCountSubject = new BehaviorSubject<number>(0);


  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(product: Product) {
    this.cartItems.push(product);
    this.cartItemsSubject.next(this.cartItems);
    // console.log(this.cartItems);
    this.cartCountSubject.next(this.cartItems.length);
    const existingProduct = this.cartItems.find(item => item.id === product.id);

  if (existingProduct) {
    // If the product already exists in the cart, increment its quantity
    existingProduct.quantity += 1;
  } else {
    // If the product is not in the cart, add it with a quantity of 1
    this.cartItems.push({
      ...product,
      quantity: 1,
    });
  }

  }
  getCartItems(): Product[] {
    return this.cartItems;
  }

  updateCartItem(updatedItem: Product): void {
    const index = this.cartItems.findIndex((item) => item.id === updatedItem.id);
    if (index !== -1) {
      this.cartItems[index] = updatedItem;
    }
  }

  removeFromCart(item: Product): void {
    const index = this.cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  updateCartItems(cartItems: Product[]): void {
    this.cartItems = cartItems;
  }

  calculateTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  getCartCount(): BehaviorSubject<number> {
    return this.cartCountSubject;
  }

}
