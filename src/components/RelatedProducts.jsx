import React, { useContext, useEffect, useState } from 'react'
import { products } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({category, subCategory}) => {

    const {products} = useContext(AppContext);
    const [related , setRelated] = useState([]);

    useEffect(() => {
        if(products?.length > 0) {
            let productsCopy = products.slice();
            productsCopy =  productsCopy.filter((item) => item.category === category);
            productsCopy =  productsCopy.filter((item) => item.subCategory === subCategory);

            setRelated(productsCopy.slice(0,5));
            
        }
    },[category, subCategory])
  return (
    <div className='my-24'>
        <div className="text-center text-3xl py-2">
            <Title text1={'Related'} text2={'Products'}/>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {related.map((item, index) => (
                <ProductItem key={index} id={item._id}  image={item.image} name={item.name} price={item.price}/>
            ))}
        </div>
    </div>
  )
}

export default RelatedProducts