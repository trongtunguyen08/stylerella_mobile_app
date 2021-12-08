let defaultState = {
    listProduct: {
        items: []
    }
}

let shoppingListReducer = (state = defaultState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case 'ADD_TO_SHOPPING_LIST': {
            //Check if the product already exists in the cart
            let filterProduct = state.listProduct.items.filter((item) => item.id == action.payload.id)
            let filterState = filterProduct[0]
            let isAlreadyInShoppingCart = () => {
                return Boolean(newState.listProduct.items.find((item => item.id == action.payload.id)))
            }
            //The remaining products after subtracting filtered products
            let remainingProducts = state.listProduct.items.filter((item) => item.id != action.payload.id)

            if (isAlreadyInShoppingCart()) {
                newState.listProduct = {
                    items: [
                        {
                            ...filterState,
                            quantity: filterState.quantity + action.payload.quantity
                        },
                        ...remainingProducts
                    ]
                }
                return newState
            } else {
                newState.listProduct = {
                    items: [...newState.listProduct.items, action.payload]
                }
            }
            return newState
        }
        case 'REMOVE_FROM_SHOPPING_LIST': {
            newState.listProduct = {
                items: [...newState.listProduct.items.filter((item) => item.id != action.payload)]
            }
            return newState
        }
        case "CHECK_ALL": {
            let isAllCheck = state.listProduct.items.every(item => item.isChecked)
            newState.listProduct.items.map(item => item.isChecked = !isAllCheck)
        }
        case 'SELECT_ITEM': {
            let tempt = state.listProduct.items.map(item =>
                (item.id === action.payload)
                    ?
                    {
                        ...item,
                        isChecked: !item.isChecked
                    }
                    :
                    item
            )
            newState.listProduct = {
                items: tempt
            }
            return newState
        }
        case 'DECREASE_AMOUNT': {
            let tempt = state.listProduct.items.map(item =>
                (item.id === action.payload)
                    ?
                    {
                        ...item,
                        quantity: item.quantity - 1
                    }
                    :
                    item
            )
            newState.listProduct = {
                items: tempt
            }
            return newState
        }
        case 'INCREASE_AMOUNT': {
            let tempt = state.listProduct.items.map(item =>
                (item.id === action.payload && item.quantity < item.inStock)
                    ?
                    {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    :
                    item

            )
            newState.listProduct = {
                items: tempt
            }
            return newState
        }
        case 'DELETE_ITEMS_SELECTED': {
            let tempt = state.listProduct.items.filter(item => item.isChecked != true)
            newState.listProduct = {
                items: tempt
            }
            return newState
        }

        default:
            return state
    }
}

export default shoppingListReducer