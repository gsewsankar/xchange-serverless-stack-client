import React, { useState, useEffect } from "react";
import { 
    Form,
    FormControl, 
    FormGroup,  
    ListGroup, 
    ListGroupItem } from "react-bootstrap";
import { onError } from "../libs/errorLib";
import { LinkContainer } from "react-router-bootstrap";

export default function StockSearchBar() {
  
  const alpha = require('alphavantage')({ key: '7VI5KAEV2K0NQIAE' });  
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  const handleChange = (e) => {
    setInput(e.target.value);
  }

  useEffect(() => {
      try{
        if(input !== "")
        {
            alpha.data.search(input).then(data => {
                setSearchResults(data["bestMatches"]);
            });
        }
      }catch(e){
        onError(e);
      }
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
        <FormGroup controlId="search">
          <FormControl
            value={input}
            placeholder="Enter Ticker Symbol"
            componentClass="input"
            onChange={handleChange}
          />
        </FormGroup>
        <ListGroup>
         {input && searchResults.map((element,i) => (
          <LinkContainer key={i} to={`/stocks/${element['1. symbol']}`}>
          <ListGroupItem><b>{element["1. symbol"]}</b>{" " + element["2. name"]}</ListGroupItem>
          </LinkContainer>   
        ))}
      </ListGroup>
    </Form>
  );
}