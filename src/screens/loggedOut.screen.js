import React, { useEffect, useState } from "react";
import { NavBar } from "../components/navbar/navbar";
import { CardComp } from "../components/card/card";
import { LoginCard } from "../components/card/loginProposal";
import { Link } from "react-router-dom";
import "./loggedout.css";
import axios from "axios";

export const LogoutView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/user").then((res) => {
      setData(res.data.reverse());
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className="container mt4">
        <div>
          <div className="tagline">
            <p className="ptagline">Startup ideas seeking for reviews.</p>
          </div>
          <div className="loginCardHolder">
            <LoginCard />
          </div>
          <div className="cardContainer">
            {data.map((startup) => {
              return (
                <Link
                  to={`/detail/${startup._id}`}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <CardComp title={startup.name} brief={startup.brief} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
