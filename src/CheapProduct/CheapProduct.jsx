import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../Product/Product";
import { BASE_URL } from "../config/config";
import axios from "axios";

const CheapProduct = () => {
  const [products, setProducts] = useState([]);

  const fetchproducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      if (response.status === 200 && response.data.length > 0) {
        setProducts(response.data);
      } else if (response.status === 200 && response.data.length === 0) {
        setProducts([]);
      }

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchproducts();
  }, []);

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
    <div className="mx-auto max-w-4xl xl:max-w-6xl">
      <h2 className="font-semibold text-3xl py-4">Best Selling</h2>
      <Carousel responsive={responsive} className="gap-2">
        {products.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      </Carousel>
    </div>
  );
};

export default CheapProduct;
