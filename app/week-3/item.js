import React from 'react';

function Item({name,quantity,category}){
    return (
        <li className="p-4 mb-6 rounded-md shadow-md text-white bg-slate-800 w-80 h-20">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-sm">Buy {quantity} in {category}</p>
        </li>

    );
}

export default Item;
