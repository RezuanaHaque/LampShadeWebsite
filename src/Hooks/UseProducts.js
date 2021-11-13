import  { useEffect, useState } from 'react';

const UseProducts = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://stark-anchorage-74601.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    // console.log(products);
    return [products,setProducts]
};

export default UseProducts;