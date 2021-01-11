import React, { useReducer, useContext, createContext } from 'react'


const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "setProduct":
            return { ...state, product: payload.product }

        default: return { ...state }
            break;
    }
}

export const UseProducts = () => useContext(Context)
const inicialState = { product: {} }
const Context = createContext(inicialState);
export const ContextProduct = ({ children }) => {
    const [productStore, setProductStore] = useReducer(reducer, inicialState)
    return (
        <Context.Provider value={{ productStore, setProductStore }}>
            {children}
        </Context.Provider>)
}