import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS, 
    ADD_CART_PRODUCT,
    AUTHENTICATE_USER   
} from './types';

export function signIn({email, password}) {
    return ({
        type: AUTHENTICATE_USER,
        payload: {
            user: {
                _id: 0,
                name: 'Mr Jones',
                address: '1234 Main Street',
                cartProducts: []
            }
        }
    })
}

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function addCartProduct(product) {
    return ({
        type: ADD_CART_PRODUCT ,
        payload: product
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
              product: {
                _id: 0,
                title: "Javascript in the Browser",
                description: "The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly but gets faster each minute after you hear this signal bodeboop.",
                price: 1.99,
                belongsTo: [0,1],
                imageUrl: 'https://via.placeholder.com/80x80'
                },
                quantity: 2
            },
            {
              product: {
                _id: 1,
                title: "Graph Database",
                description: "The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly but gets faster each minute after you hear this signal bodeboop.",
                price: 1.99,
                belongsTo: [0,6],
                imageUrl: 'https://via.placeholder.com/80x80'
            },
            quantity: 2
          },
        ]
    })
}

export function fetchUserPurchases() {
    return({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 8.02,
                orderNumber: 'ANSUDVSofd6',
                orderDate: new Date().toDateString(),
                creditCard: '-9999',
                user: {
                    name: 'Thomas Dolby',
                    shippingAddress: '1234 West Main Street'
                }
            },
            {
                _id: 1,
                total: 9.02,
                orderNumber: 'ANSUDVSofd6',
                orderDate: new Date().toDateString(),
                creditCard: '-9999',
                user: {
                    name: 'Thomas Dolby',
                    shippingAddress: '1234 West Main Street'
                }
            },
            {
                _id: 2,
                total: 82.02,
                orderNumber: 'ANSUDVSofd6',
                orderDate: new Date().toDateString(),
                creditCard: '-9999',
                user: {
                    name: 'Thomas Dolby',
                    shippingAddress: '1234 West Main Street'
                }
            },
            {
                _id: 3,
                total: 68.02,
                orderNumber: 'ANSUDVSofd6',
                orderDate: new Date().toDateString(),
                creditCard: '-9999',
                user: {
                    name: 'Thomas Dolby',
                    shippingAddress: '1234 West Main Street'
                }
            },
            {
                _id: 4,
                total: 84.02,
                orderNumber: 'ANSUDVSofd6',
                orderDate: new Date().toDateString(),
                creditCard: '-9999',
                user: {
                    name: 'Thomas Dolby',
                    shippingAddress: '1234 West Main Street'
                }
            },
            {
                _id: 5,
                total: 845.02,
                orderNumber: 'ANSUDVSofd6',
                orderDate: new Date().toDateString(),
                creditCard: '-9999',
                user: {
                    name: 'Thomas Dolby',
                    shippingAddress: '1234 West Main Street'
                }
            },
            {
                _id: 6,
                total: 38.02,
                orderNumber: 'ANSUDVSofd6',
                orderDate: new Date().toDateString(),
                creditCard: '-9999',
                user: {
                    name: 'Thomas Dolby',
                    shippingAddress: '1234 West Main Street'
                }
            },
            {
                _id: 7,
                total: 23.02,
                orderNumber: 'ANSUDVSofd6',
                orderDate: new Date().toDateString(),
                creditCard: '-9999',
                user: {
                    name: 'Thomas Dolby',
                    shippingAddress: '1234 West Main Street'
                    }   
            }
        ]
    })
}