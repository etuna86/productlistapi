import React,{useEffect,useState,useRef} from 'react';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import ProductList from "./components/pages/productList.js"
import ProductDetail from "./components/pages/productDetail.js"
import { axiosAT } from './redux1/actions/index.js';
import axios from 'axios';

let customHistory = createBrowserHistory();


const baseURL = "https://teknasyon.myshopify.com";
const AccessToken = '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';


function App() {
  useEffect(()=>{
    if(customHistory.location.pathname=="/"){
      customHistory.push('/productlist');
    }

    //getProducts()
  },[]);




  return (
    <>
      <Router history={customHistory} >  
        <Switch>
            <Route exact path="/productlist">
                <ProductList />
            </Route>
            <Route  path="/productdetail">
                <ProductDetail />
            </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;