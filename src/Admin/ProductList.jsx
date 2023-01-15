import "./Admin.css";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {BASE_URL} from "../config/config";

export default function ProductList() {
  const [data, setData] = useState([]);

const fetchProducts = async () => {
  try {
    const response = await axios.get(BASE_URL + '/products');
    setData(response.data); 
  } catch (error) {
    console.log(error);
  }

}

useEffect(()=>{
  fetchProducts();
},[]);


  const handleDelete = async (id) => {
    try {
     const response =  await axios.delete(BASE_URL + `/products/${id}`);
     response && window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 400,
      height: 600,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "category",
      headerName: "Category",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlinedIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
      style={{ height: 400, width: '100%' }}
        rows={data}
        getRowId={(row)=>row._id}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}