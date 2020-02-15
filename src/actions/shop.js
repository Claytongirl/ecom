import  {
    //SET_SHOP_CATEGORIES
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS
} from './types';

export function fetchShopCategories() {
    return ({
        type: SET_NAVBAR_LINKS,
        payload: [
            {
                _id: 0,
                title: "All"
            },
            {
                _id: 1,
                title: "Javascript"
            },
            {
                _id: 2,
                title: "UI/UX"
            },
            {
                _id: 3,
                title: "Linux"
            },
            {
                _id: 4,
                title: "Python"
            },
            {
                _id: 5,
                title: "UML"
            },
            {
                _id: 6,
                title: "Ruby"
            }
        ]
    })
}

export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: "Javascript in the Broswer",
                description: "dummy text",
                price: 1.99,
                belongsTo: [0,1]
            },
            {
                _id: 1,
                title: "Graph Database",
                description: "dummy text",
                price: 1.99,
                belongsTo: [0,6]
                //Isn't really Ruby
            },
            {
                _id: 2,
                title: "Full Stack Development",
                description: "dummy text",
                price: 1.99,
                belongsTo: [0,1,4]
            },
            {
                _id: 3,
                title: "Javascript Development",
                description: "dummy text",
                price: 1.99,
                belongsTo: [0,1]
            },
            {
                _id: 4,
                title: "User Interface Design",
                description: "dummy text",
                price: 1.99,
                belongsTo: [0,2]
            },
            {
                _id: 5,
                title: "User Experience Design",
                description: "dummy text",
                price: 1.99,
                belongsTo: [0,2]
            },
            {
                _id: 6,
                title: "Advanced Object Oriented Programming",
                description: "dummy text",
                price: 1.99,
                belongsTo: [0,6]
            }
        ]
    })
}