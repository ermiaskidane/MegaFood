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

const featurePost =  [
    {
        _id: "1",
        image: "images/shop-c-Medium.jpg",
        postDate: "31.November.2019",
        title: "Most Popular Dishes In UK",
        comments: "2 comments"
    },
    {
        _id: "2",
        image: "images/shop-burrito-1.jpg",
        postDate: "31.November.2019",
        title: "How To Make Burrito",
        comments: "0 comment"
    },
    {
        _id: "3",
        image: "images/pizza-veg-Custom.jpg",
        postDate: "31.November.2019",
        title: "How To Make Our Pizza",
        comments: "0 comment"
    },
    {
        _id: "4",
        image: "images/shop-b-Custom.jpg",
        postDate: "31.November.2019",
        title: "You Know How To Make Yummy Food",
        comments: "1 comment"
    },
]

const featureInstagram = [
    {
        _id: "1",
        image: "images/burger-2.jpg"
    },
    {
        _id: "2",
        image: "images/fried-chicken.jpg"
    },
    {
        _id: "3",
        image: "images/pizza-pepperoni-Custom.jpg"
    },
    {
        _id: "4",
        image: "images/taco-1.jpg"
    },
    {
        _id: "5",
        image: "images/pizza-4.jpg"
    },
    {
        _id: "6",
        image: "images/fries-meat.jpg"
    },
]

const featureArticles = [ 
    {
        _id: "1",
        image: "images/shop-c-Medium.jpg",
        date: 31,
        month: "Nov",
        type: "News",
        title: "Most Popular Dishes In Uk",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Vitae unde vel fugiat fuga delectus enim aspernatur, corporis exdolores minima modi quae quidem, aperiam suscipit quisquam?Reiciendis, dolorem molestiae in eos eligendi at repellendus odit vitae necessitatibus recusandae dolore suscipit vel sint quae? Itaque aliquam ipsam qui quia. Voluptatibus sunt accusantium eum rem tempore repudiandae unde nesciunt quas laborum quaerat. aliquam ipsam qui quia. Voluptatibus sunt ...",
        author: "BY :: Andrew Colt",
        comments: "2 comments",
    },
    {
        _id: "2",
        image: "images/shop-burrito-1.jpg",
        date: 31,
        month: "Nov",
        type: "News",
        title: "How to make Burrito ",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Distinctio deserunt asperiores quisquam quasi, saepe, iusto dicta ducimus, est illum itaque ipsum doloremque necessitatibus pariatur doloribus tempora. Quam repellat provident maiores aperiam animi quasi fuga! Accusamus, quibusdam quisquam maiores animi, veritatis tempore explicabo quia quaerat eveniet totam laborum quo ipsa sed excepturi! Accusamus minus ea natus...",
        author: "BY :: Andrew Colt",
        comments: "0 comment",
    },
    {
        _id: "3",
        image: "images/pizza-veg-Custom.jpg",
        date: 31,
        month: "Nov",
        type: "News",
        title: "How we make our pizza",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea tempore eos dolore blanditiis. Repudiandae maiores fugiat similique, impedit inventore ut voluptatum blanditiis mollitia porro cumque. Tenetur dolorem ipsam ut laudantium ipsum  quaerat fugiat! Corrupti rem iusto sunt nulla, facere repellat ex ea saepe, esse maiores beatae voluptate? Fugiat sed eveniet culpa consectetur rerum, dignissimos magnam voluptas debitis natus, modi sequi deleniti distinctio cupiditate ex...",
        author: "BY :: Andrew Colt",
        comments: "0 comment",
    },
    {
        _id: "4",
        image: "images/shop-b-Custom.jpg",
        date: 31,
        month: "Nov",
        type: "News",
        title: "You know how to make yummy Food",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae unde vel fugiat fuga delectus enim aspernatur, corporis ex dolores minima modi quae quidem, aperiam suscipit quisquam? Reiciendis, dolorem molestiae in eos eligendi at repellendus  odit vitae necessitatibus recusandae dolore suscipit vel sint quae? Itaque aliquam ipsam qui quia. Voluptatibus sunt accusantium eum rem tempore repudiandae unde nesciunt quas laborum quaerat. aliquam ipsam qui quia. Voluptatibus sunt ...",
        author: "BY :: Andrew Colt",
        comments: "1 comment",
    }
]


export {menus, PurchaseImg, bestSellerImg, AllSellers, featurePost, featureInstagram, featureArticles};
