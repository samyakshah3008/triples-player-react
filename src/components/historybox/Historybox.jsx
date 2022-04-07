import React from "react";
import { useHistory } from "../../contexts/history-context";
import Card2 from "../card/Card2";
import axios from "axios";
import { useAuth } from "../../contexts/auth-context";

export default function Historybox({ item }) {
  const { history, setHistory } = useHistory();
  const { user } = useAuth();

  const clearHistoryHandler = async () => {
    try {
      const clearHistoryResponse = await axios({
        method: "DELETE",
        data: { video: item },
        url: `/api/user/history/all`,
        headers: { authorization: user.token },
      });
      setHistory({ history: clearHistoryResponse.data.history });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="page-title">
        History video ( {history.history.length} ){" "}
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clearHistoryHandler}
        className="page-title"
      >
        {" "}
        Clear History{" "}
      </div>

      <div className="video-listing-container">
        {history.history.map((item) => (
          <Card2 key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
