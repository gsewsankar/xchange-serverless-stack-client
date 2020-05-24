import React, { useRef, useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { onError } from "../libs/errorLib";
import "./Stocks.css";

import StockSearchBar from "../components/StockSearchBar";

export default function Stocks() {

    const alpha = require('alphavantage')({ key: '7VI5KAEV2K0NQIAE' });
    const { id } = useParams();
    const [stock, setStock] = useState("");
    const [price, setPrice] = useState("");
    const labels = [];
    const priceData= [];
    
  useEffect(() => {
    function loadStock() {
      alpha.data.quote(id, "compact", "1min").then(data => {
        setStock(data['Global Quote']['01. symbol']);
        setPrice(data['Global Quote']['05. price']);
      });

      alpha.data.intraday(id, "compact", "1min").then(data => {
        console.log(data);
        for(var key in data["Time Series (1min)"]){
          labels.push(key);
          priceData.push(data["Time Series (1min)"][key]["1. open"]);
        }
      });
    }

    async function onLoad() {
      try {
        await loadStock();
      } catch (e) {
        onError(e);
      }
    }
    onLoad();
  }, [id]);


  

  return (
    <div className="Stocks">
    <StockSearchBar></StockSearchBar>
  <p>{stock}{" $"}{price}</p>
  
  </div>
  );
}