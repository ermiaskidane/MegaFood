const menus = [
    {
        _id: "1",
        name: "Cheese Burger",
        image: "/images/burger-2.jpg",
        price: 2.90.toPrecision(3),
        oldPrice: 4.00.toPrecision(3),
        category: "Burger",
        offer: "Sale",
        rating: 4.5,
        numReviews: 12
    },
    {
        _id: "2",
        name: "Mini Burger",
        image: "/images/burger-3.jpg",
        price: 1.90.toPrecision(3),
        oldPrice: 3.00.toPrecision(3),
        category: "Burger",
        offer: "Sale",
        rating: 4.8,
        numReviews: 10
    },
    {
        _id: "3",
        name: "Fried Chicken",
        image: "/images/fried-chicken.jpg",
        price: 1.90.toPrecision(3),
        oldPrice: 3.00.toPrecision(3),
        category: "Fries",
        offer: "Sale",
        rating: 4.4,
        numReviews: 8
    },
    {
        _id: "4",
        name: "Fried Chicken Broccoli",
        image: "/images/fries-meat.jpg",
        price: 4.50.toPrecision(3),
        oldPrice: 7.00.toPrecision(3),
        category: "Fries",
        offer: "Sale",
        rating: 4.0,
        numReviews: 9
    },
    {
        _id: "5",
        name: "Pizza Mixed",
        image: "/images/pizza-4.jpg",
        price: 5.50.toPrecision(3),
        category: "Pizza",
        offer: "",
        rating: 4.6,
        numReviews: 9
    },
    {
        _id: "6",
        name: "Vegeterian Pizza",
        image: "/images/pizza-05.jpg",
        price: 6.00.toPrecision(3),
        category: "Pizza",
        offer: "",
        rating: 4.3,
        numReviews: 8
    },
    {
        _id: "7",
        name: "Deli Taco Crunchy",
        image: "/images/taco-1.jpg",
        price: 7.00.toPrecision(3),
        category: "Taco",
        offer: "",
        rating: 3.90,
        numReviews: 7
    },
    {
        _id: "8",
        name: "Avaco Deli Taco",
        image: "/images/taco-2.jpg",
        price: 5.00.toPrecision(3),
        category: "Taco",
        offer: "",
        rating: 4.2,
        numReviews: 5
    },
]

const PurchaseImg = {
    wrapImg: "/images/wrap-2.jpg",
    pizzaImg: "/images/pizza-3.jpg",
    burgerImg: "/images/burger-1.jpg"
}
const AllSellers = [
    {
        _id: "1",
        name: "Chillie fries",
        image: "/images/chillie-fries.jpg",
        price: 2.50.toPrecision(3),
        oldPrice: 3.00.toPrecision(3),
        category: "Fries",
        offer:"Sale",
        rating: 4.3,
        numReviews: 6
    },
    {
        _id: "2",
        name: "Deli Taco Crunchy",
        image: "/images/taco-1.jpg",
        price: 4.90.toPrecision(3),
        oldPrice: 6.00.toPrecision(3),
        category: "Taco",
        offer:"Sale",
        rating: 4.0,
        numReviews: 8
    },
    {
        _id: "3",
        name: "Meal Burger",
        image: "/images/shop-burger-2.jpg",
        price: 5.90.toPrecision(3),
        oldPrice: 6.90.toPrecision(3),
        category: "Burger",
        offer:"Sale",
        rating: 4.0,
        numReviews: 8
    },
    {
        _id: "4",
        name: "Beef Pizza",
        image: "/images/Pizza-meat-1.jpg",
        price: 6.90.toPrecision(3),
        oldPrice: "",
        category: "Pizza",
        offer:"",
        rating: 4.0,
        numReviews: 8
    },
    {
        _id: "5",
        name: "Pepperoni Pizza",
        image: "/images/pizza-pepperoni-Custom.jpg",
        price: 4.90.toPrecision(3),
        oldPrice: "",
        category: "Pizza",
        offer:"",
        rating: 4.2,
        numReviews: 8
    },
    {
        _id: "6",
        name: "Cheese Burger",
        image: "/images/shop-burger-1.jpg",
        price: 3.90.toPrecision(3),
        oldPrice: "",
        category: "Burger",
        offer:"",
        rating: 4.4,
        numReviews: 6
    },
    {
        _id: "7",
        name: "Fried Chicken",
        image: "/images/shop-burger-2.jpg",
        price: 3.50.toPrecision(3),
        oldPrice: "",
        category: "Fries",
        offer:"",
        rating: 4.6,
        numReviews: 8
    },
    {
        _id: "8",
        name: "Avoca Deli Taco",
        image: "/images/taco-2.jpg",
        price: 5.00.toPrecision(3),
        oldPrice: "",
        category: "Taco",
        offer:"",
        rating: 4.8,
        numReviews: 10
    },
    
]

const bestSellerImg = [
    {
        _id: "1",
        name: "Meal Burger",
        image: "/images/shop-burger-2.jpg",
        price: 5.90.toPrecision(3),
        oldPrice: 6.90.toPrecision(3),
        category: "Burger",
        offer: "Sale",
        rating: 4.2,
        numReviews: 5
    },
    {
        _id: "2",
        name: "Burrito",
        image: "/images/wrap-2.jpg",
        price: 4.90.toPrecision(3),
        oldPrice: 6.00.toPrecision(3),
        category: "Burrito",
        offer: "Sale",
        rating: 4.2,
        numReviews: 5
    },
    {
        _id: "3",
        name: "Mixed Pizza",
        image: "images/pizza-pepperoni-Custom.jpg",
        price: 4.90.toPrecision(3),
        oldPrice: 6.00.toPrecision(3),
        category: "Pizza",
        offer: "Sale",
        rating: 4.2,
        numReviews: 5
    }
]



export {menus, PurchaseImg, bestSellerImg, AllSellers};