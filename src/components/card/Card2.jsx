import React from "react";
import "./card.css";
import * as FaIcons from "react-icons/fa";
import axios from "axios";
import { useAuth } from "../../contexts/auth-context";
import { useHistory } from "../../contexts/history-context";

export default function Card2({ item }) {
  const { user } = useAuth();
  const { history, setHistory } = useHistory();

  const removeFromHistory = async () => {
    try {
      const removeFromHistoryResponse = await axios({
        method: "delete",
        url: `/api/user/history/${item._id}`,
        headers: { authorization: user.token },
        data: { video: item },
      });
      setHistory({ history: removeFromHistoryResponse.data.history });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="parent">
        <div className="card-container">
          <div className="card-img-container">
            <img className="card-img" src={item.cardImg} alt="cricket-ball" />
          </div>
          <div className="card-sub-container">
            <img src={item.cardImg} className="avatar-img"></img>
            <div className="card-title"> {item.cardTitle} </div>
            <FaIcons.FaTrash
              onClick={removeFromHistory}
              className="icons sidebar-icons"
            />
          </div>
          <div className="card-sub-container2">
            <div className="card-channel-name"> {item.cardOwner} </div>
            <FaIcons.FaCheckCircle className="icons sidebar-icons" />
          </div>
          <div className="card-sub-container3">{item.description}</div>
        </div>
      </div>
    </div>
  );
}
