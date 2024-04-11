import React, { useEffect, useState } from "react";
import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";
import { SendMoney } from "./SendMoney";
// require("dotenv").config();

export const Dashboard = () => {
  //   const [users, setUsers] = useState([]);
  const [balance, setBalance] = useState("");
  //   const getUsersUrl = "http://localhost:3000/api/v1/user/bulk";
  const getBalanceUrl = `${process.env.BACKEND_URL}/account/balance`;

  const bearerToken = "Bearer " + localStorage.getItem("token");

  //   const fetchData =  (url,setter) => {

  //   };
  useEffect(() => {
    // axios
    //   .get(getUsersUrl, {
    //     headers: {
    //       Authorization: bearerToken,
    //     },
    //   })
    //   .then((response) => setUsers(response.data.users));
    axios
      .get(getBalanceUrl, {
        headers: {
          Authorization: bearerToken,
        },
      })
      .then((response) => setBalance(response.data.balance));
  }, []);
  return (
    <div>
      <AppBar></AppBar>
      <Balance value={balance}></Balance>
      <Users></Users>
    </div>
  );
};
