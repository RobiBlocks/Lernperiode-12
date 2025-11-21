import { useState } from "react";

function CardCounter(props) {
  const [copies, setCopies] = useState(0);

  const handleIncrease = () => {
    setCopies(copies + 1);
  };

  const handleDecrease = () => {
    setCopies(copies - 1);
  };

  return (
    <div className="cardCounter">
      <p className="cardNumber">Nr. {props.number}</p>
      <div className="buttonRow">
        <button onClick={handleDecrease}>
          <p>-</p>
        </button>
        {copies === 0 ? (
          <span className="copies">0 copies</span>
        ) : copies === 1 ? (
          <span className="copies">1 copy</span>
        ) : (
          <span className="copies">{copies} copies</span>
        )}
        <button onClick={handleIncrease}>
          <p>+</p>
        </button>
      </div>
    </div>
  );
}

export default CardCounter;
