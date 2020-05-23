import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Profile.css";
import StockSearchBar from "../components/StockSearchBar";

export default function Profile() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <div className="Profile">
        <StockSearchBar/>
    </div>
  );
}