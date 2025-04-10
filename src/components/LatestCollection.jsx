import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import Title from './Title'
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(AppContext);
    const [latestproducts, setLatestproducts] = useState([]);

    useEffect(() => {
        setLatestproducts(products.slice(0, 10));
    }, [products]);
    return (
        <div className='my-10'>
            <div className="text-center py-9 text-3xl">
                <Title text1={'LATEST'} text2={'COLLECTIONS'} /> 
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
            </div>
            {/* rendering product */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    latestproducts.map((item, index) => (
                        <ProductItem key={index} id={item._id}  image={item.image} name={item.name} price={item.price}/>
                    ))
                }
            </div>

        </div>
    )
}

export default LatestCollection