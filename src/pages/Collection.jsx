import React, { use, useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
const Collection = () => {
  const {products , search , showSearch } = useContext(AppContext);
  const [showFilter, setShowFilter] = useState(false);
  const [fiterProducts, setFiterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);

  const toogleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  }

  const toogleSubcategory = (e) => {
    if(subcategory.includes(e.target.value)){
      setSubcategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubcategory(prev => [...prev, e.target.value]);
    }
  }

  const applyFilter = () => {
   let producstCopy = products.slice();
   if(showSearch && search) {
    producstCopy = producstCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
   }
   if(category.length > 0){
    producstCopy = producstCopy.filter(item => category.includes(item.category));
   }
   
   if(subcategory.length > 0){
    producstCopy = producstCopy.filter(item => subcategory.includes(item.subCategory));
   }
   setFiterProducts(producstCopy);
  }

  const sortProducts = (e) => {
    let producstCopy = products.slice();
    switch (e.target.value) {
      case 'relavent':
        setFiterProducts(producstCopy = products.slice());
       break;
     case 'low-high':
       setFiterProducts(producstCopy.sort((a,b) => a.price - b.price));
       break;
     case 'high-low':
       setFiterProducts(producstCopy.sort((a,b) => b.price - a.price));
       break;
     default:
       break;
    } 
  }

  useEffect(() => {
    applyFilter();
  },[category, subcategory , search , showSearch])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter options */}
      <div className="min-w-60">
        <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS
          <img src={assets.dropdown_icon} alt="" className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}/>
        </p>
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' onChange={toogleCategory} value={'Men'}/> Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' onChange={toogleCategory} value={'Women'}/> Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' onChange={toogleCategory} value={'Kids'}/> Kids
            </p>
          </div>
        </div>
        {/* subcategoy filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' onChange={toogleSubcategory} value={'Topwear'}/> Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' onChange={toogleSubcategory} value={'Bottomwear'}/> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' onChange={toogleSubcategory} value={'Winterwear'}/> Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* products */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'All'} text2={'COLLECTIONS'}/>
          {/* PRODUCTS SHORT */}
          <select className="border-2 border-gray-300 text-sm px-2" onChange={sortProducts}>
            <option value="relavent">Sort by: relavent</option>
            <option value="low-high">Sort by: low to high</option>
            <option value="high-low">Sort by:high to low</option>
          </select>
        </div>
        {/* product items */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {fiterProducts.map((item, index) => {
            return <ProductItem key={index} id={item._id}  image={item.image} name={item.name} price={item.price}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Collection