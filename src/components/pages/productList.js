import React, { useEffect, useState, useRef } from 'react';
import AxiosAT from "../../redux1/actions"
import { Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios';
import jsonData from '../../data.json'
import PaginationList from 'react-pagination-list';


const baseURL = "https://teknasyon.myshopify.com";
const AccessToken = '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';


function ProductList() {
  const [productdata, setProductdata] = useState([]);

  useEffect(() => {
    setProductdata(jsonData.products);
  }, []);

  function getProducts() {
    axios
      .get("https://teknasyon.myshopify.com/admin/api/2022-01/products.json", {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods': "OPTIONS, DELETE, POST, GET, PATCH, PUT",
          'X-Shopify-Access-Token': AccessToken
        }

      })
      .then((res) => {
          console.warn("res.data.message: ", res.data);
     
      }).catch(
        function (error) {
          console.log('Show error notification!')
          console.warn(error);
          return Promise.reject(error)
        }
      );
  }
  return (
    <>
    <div className='products-page'>
      <Container>
      <Row>
      <PaginationList
        data={productdata}
        pageSize={10}
        renderItem={(item, key) => (
          <div className='col-md-4' key={key}>
            <Link to={{
                pathname: '/productdetail',
                state: {productid:item.id}
            }} >
            <div className='product-box'>
              <div className='product-img'>
                  <img src={item.image.src} />
              </div>
              <div className='product-title'>
                  <h3>{item.title}</h3>
              </div>
             
            </div>
            </Link>
        </div>   
        )}
      />
      </Row>
      </Container>
    </div>

    </>
  );
}

export default ProductList;