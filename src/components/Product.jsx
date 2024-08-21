import React from 'react';
import { useCart } from '../contexts/CartContext';
const Product = (props) => {
    const { addToCart } = useCart(); // get addToCart from context

    // generate ingredient badges
    const ingGen = (ingArr) => {
        return ingArr.map((item, index) => (
            <div key={index} className="badge badge-outline">{item}</div>
        ));
    };

    return (
        <div className="card bg-base-100 w-80 shadow-2xl my-5 mt-10 h-[450px]">
            <figure>
                <img
                    style={{ width: '200px', objectFit: 'cover', height: '200px' }}
                    src={props.image}
                    alt={props.name}
                />
                {props.isInStock === 0 && (
                    <div className="absolute top-0 left-0 bg-gray-800 text-white text-xs px-2 py-1 rounded-br-lg">
                        Out of Stock
                    </div>
                )}
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title text-2xl font-semibold mb-2">{props.name}</h2>
                <p className="text-gray-600 mb-3">{props.flavorProfile}</p>
                <div className="flex flex-wrap mb-3">
                    {props.ingredients && ingGen(props.ingredients)}
                </div>
                <div className="flex items-center justify-between mb-3">
                    {props.veganFriendly && (
                        <div className="badge badge-success">Vegan</div>
                    )}
                    <p className="text-xl font-bold">${props.price.toFixed(2)}</p>
                </div>
                <div className="card-actions flex justify-between items-center">
                    <button
                        className={`btn btn-primary text-white ${props.isInStock === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                        onClick={() => addToCart(props)}
                        disabled={props.isInStock === 0}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
