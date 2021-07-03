import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { onError } from "../libs/errorLib";
import StockSearchBar from "../components/StockSearchBar";
import "./Stocks.css";
import unirest from "unirest";

export default function Stocks() {

  const req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials");
  const { id } = useParams();
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");

  function loadStock() {
    req.headers({
      "x-rapidapi-key": "8e42adc923mshe9a87adcb674303p1da825jsn183304ed26e5",
      "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      "useQueryString": true
    });

    req.query({
      "symbol": id,
      "region": "US"
    });

    req.end(function (res) {
      if (res.error) throw new Error(res.error);
      setStock(res.body['quoteType']['shortName']);
      setPrice(res.body['price']['regularMarketPrice']['fmt']);
    });
  }
  
  useEffect(() => {
    loadStock();
    async function onLoad() {
      try {
        loadStock();
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