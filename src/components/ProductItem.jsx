import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const ProductItem = ({id, image, name, price}) => {
    const {curreny} = useContext(AppContext);
  return (
    <div>
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className='font-sm font-medium'>{curreny} {price}</p>
        </Link>

    </div>
  )
}

export default ProductItem