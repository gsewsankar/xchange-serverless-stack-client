import React, { useRef, useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { onError } from "../libs/errorLib";
import {Line} from 'react-chartjs-2';
import "./Stocks.css";

import StockSearchBar from "../components/StockSearchBar";

export default function Stocks() {

    const alpha = require('alphavantage')({ key: '7VI5KAEV2K0NQIAE' });
    const { id } = useParams();
    const [stock, setStock] = useState("");
    const [price, setPrice] = useState("");
    
  useEffect(() => {
    function loadStock() {
      alpha.data.quote(id, "compact", "1min").then(data => {
        setStock(data['Global Quote']['01. symbol']);
        setPrice(data['Global Quote']['05. price']);
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

  const chartdata = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }
  

  return (
    <div className="Stocks">
    <StockSearchBar></StockSearchBar>
  <p>{stock}{" $"}{price}</p>
  <Line
          data={chartdata}
          options={{
            title:{
              display:true,
              text:stock,
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
  </div>
  );
}