import React, { useEffect, useState, useRef } from 'react';
import { Router, Switch, Route, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import jsonData from '../../data.json';

//var productData=[]

function ProductList(props) {
  const location = useLocation();
  const [productId, setProductId] = useState(0);
  const [productData, setProductData] = useState([]);
  const [productImage, setProductImage] = useState([]);
  const [productPrice, setProductPrice] = useState([]);

  useEffect(() => {
    setProductId(location.state.productId);
    setProductData(jsonData.products.filter(product => product.id == location.state.productid)[0]);
    setProductImage(jsonData.products.filter(product => product.id == location.state.productid)[0].image);
    setProductPrice(jsonData.products.filter(product => product.id == location.state.productid)[0].variants[0]);
  }, []);

  return (
    <>
      <div className='products-page'>
        <Container>
          <Row>
            <div className='col-md-6' >
              <div className='product-box'>
                <div className='product-img'>
                  <img src={productImage.src} />
                </div>
                <div className='product-title'>
                  <h3>{productData.title}</h3>
                </div>
                <div className='product-price'>
                  <span>Price: </span>
                  <small>{productPrice.price}</small>
              </div>
                <div className='product-body'>
                  <p dangerouslySetInnerHTML={{ __html: productData.body_html }} />
                </div>
                
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProductList;