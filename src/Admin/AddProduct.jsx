/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { BASE_URL } from '../config/config';
import './Admin.css';

const AddProduct = () => {
const [categories,setCategories] = useState([]);
const [product,setProduct] = useState({
    title:"",
    category:"",
    size:"",
    price:0
})
const [img,setImg] = useState('');
const [loading,setLoading] = useState(false);

const fetchCategories = async () => {
  try {
    const res = await axios.get(BASE_URL + '/category');
   setCategories(res.data);
  } catch (error) {
    console.log(error);
  }
}

useEffect(()=>{
fetchCategories();
},[]);

const handleUpload = async e =>{
    e.preventDefault()
    try {
        const file = e.target.files[0];
        
        if(!file) return alert("File not exist.")

        if(file.size > 1024 * 1024) // 1mb
            return alert("Size too large!")

        if(file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
            return alert("File format is incorrect.")

        let formData = new FormData()
        formData.append('grocery', file)

        setLoading(true)
        const res = await axios.post(BASE_URL + '/upload', formData)
        setLoading(false)
        // console.log(res.data);
        console.log(img);
        setImg(res.data.imageURL);
 
    } catch (err) {
        console.log(err);
    }
}



const handleChangeInput = e =>{
    setProduct((initial)=>{
     return {...initial,[e.target.name]:e.target.value}
    })
}

const handleSubmit = async e =>{
    e.preventDefault()
    try {
        if(!img) return alert("No Image Upload")
 const response = await axios.post(BASE_URL + '/products', {...product, img});
 response && window.location.replace("/dashboard/product-list")

    } catch (err) {
        alert(err.response.data.msg)
    }
}

const styleUpload = {
  display: img ? "block" : "none"
}
return (
  <div className="create_product">
      <div className="upload">
          <input type="file" name="file" id="file_up" onChange={handleUpload}/>
          {
              loading ? <div id="file_img">...loading</div>

              :<div id="file_img" style={styleUpload}>
                  <img src={img ? img : ''} alt="alt"/>
              </div>
          }
          
      </div>

      <form onSubmit={handleSubmit}>
          <div className="row">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" id="title" required
               onChange={handleChangeInput} />
          </div>

          <div className="row">
              <label htmlFor="price">Price</label>
              <input type="number" name="price" id="price" required
               onChange={handleChangeInput} />
          </div>
         
          <div className="row">
              <label htmlFor="size">Size</label>
              <input type="text" name="size" id="size" required
               onChange={handleChangeInput} />
          </div>
         
          <div className="row">
              <label htmlFor="categories">Categories: </label>
              <select name="category" onChange={handleChangeInput} >
                  <option value="">Please select a category</option>
                  {
                      categories.map(category => (
                          <option value={category.name} key={category._id}>
                              {category.name}
                          </option>
                      ))
                  }
              </select>
          </div>

          <button type="submit"> Create</button>
      </form>
  </div>
)
}


export default AddProduct