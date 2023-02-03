import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { useEffect, useState } from "react";
import axios from "axios";
import {BASE_URL} from "../config/config";

const Orders = () => {
  const [data, setData] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(BASE_URL + '/orders');
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
       const response =  await axios.delete(BASE_URL + `/orders/${id}`);
       response && window.location.reload();
      } catch (error) {
        console.log(error);
      }
    };

    const handleUpdate = async (id) => {
      try {
       const response =  await axios.put(BASE_URL + `/orders/${id}`);
       response && window.location.reload();
      } catch (error) {
        console.log(error);
      }
    };
  
    const columns = [
      { field: "_id", headerName: "ID", width: 90 },
      {
        field: "orders",
        headerName: "orders",
        width: 400,
        height: 600,
        renderCell: (params) => {
          return (
            <div className="productListItem">
              {params.row.orderId}
            </div>
          );
        },
      },
      {
        field: "date",
        headerName: "date",
        width: 120,
      },
      {
        field: "amount",
        headerName: "amount",
        width: 90,
      },
      {
        field: "isPaid",
        headerName: "isPaid",
        width: 120,
      },
      {
        field: "isDelivered",
        headerName: "isDelivered",
        width: 120,
      },

      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <button className="productListEdit" onClick={() => handleUpdate(params.row._id)}>Edit</button>
             
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

export default Orders