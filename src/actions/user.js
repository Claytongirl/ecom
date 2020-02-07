import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
                creditCard: '-9999',
                user: {
                    name: 'Thomas Dolby',
                    shippingAddress: '1234 West Main Street'
                }
            },
            {
                _id: 8,
                total: 10.02,
                orderNumber: 'ANSUDVSofd6',
                orderDate: new Date(),
                creditCard: '-9999',
                user: {
                    name: 'Thomas Dolby',
                    shippingAddress: '1234 West Main Street'
                }
            }
        ]
    })
}