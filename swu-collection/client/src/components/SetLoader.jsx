import useSWR from "swr";
import { useState } from "react";
import CardCounter from "./CardCounter";

function SetLoader(props) {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const {
    data: response,
    error,
    isLoading,
  } = useSWR(
    `https://corsproxy.io/?${encodeURIComponent(
      `https://api.swu-db.com/cards/${props.set}`
    )}`,
    fetcher
  );

  const [copies, setCopies] = useState({});
  const updateCopies = (number, value) => {
    setCopies((prev) => ({ ...prev, [number]: value }));
  };

  if (error) return <div className="failed">failed to load</div>;
  if (isLoading) return <div className="Loading">Loading...</div>;

  const cards = response?.data || [];
  const sortedCards = cards.sort((a, b) => a.Number - b.Number);

  return (
    <div className="setLoader">
      {sortedCards.map((card, index) => {
        const cardCopies = copies[card.Number] || 0;
        return (
          <div
            className={`cardWrapper ${cardCopies > 0 ? "bright" : ""}`}
            key={index}
          >
            <img key={index} src={card.FrontArt} alt="card"  loading="lazy" />
            <CardCounter
              number={card.Number}
              value={cardCopies}
              onChange={updateCopies}
            />
          </div>
        );
      })}
    </div>
  );
}

export default SetLoader;
