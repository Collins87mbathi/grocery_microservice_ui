import React from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from '../Product/Product';
import onions from '../Assets/kitungu.png';
import tomatoes from '../Assets/toma.png';
import spinach from '../Assets/spino.png';
import kales from '../Assets/sukuma.png';
import papaya from '../Assets/papa.png';
import cabbage from '../Assets/cabo.png';
const CheapProduct = () => {
    const products = [
        {
         "imageUrl":cabbage,
         "title":"Cabbage",
         "size":"1kg",
         "price":"10"
        },
        {
          "imageUrl":spinach,
          "title":"Spinach",
          "size":"1kg",
          "price":"10"
         },
         {
          "imageUrl":kales,
          "title":"Kale",
          "size":"1kg",
          "price":"10"
         },
         {
          "imageUrl":papaya,
          "title":"Papaya",
          "size":"1kg",
          "price":"10"
         },
         {
          "imageUrl":tomatoes,
          "title":"Tomatoes",
          "size":"1kg",
          "price":"10"
         },
         {
          "imageUrl":onions,
          "title":"Onions",
          "size":"1kg",
          "price":"10"
         },
       ];
       const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5,
          slidesToSlide: 2,
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };

  return (
    <div className='max-w-[1640px] mx-auto px-4 py-4 '>
     <h2 className="font-semibold text-[20px] py-4">Best Selling</h2>   
     <Carousel  responsive={responsive}>
     {
          products.map((product,index)=> {
            return <Product key={index} product={product}/>
          })
         }
      </Carousel>
    </div>
  )
}

export default CheapProduct