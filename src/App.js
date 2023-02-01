import { useEffect, useState } from "react";

const App = () => {
  const [quote, setQuote] = useState("");
  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => setQuote(data));

    let hexNumbers = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColorCode = "";
    for (var i = 0; i < 6; i++) {
      hexColorCode += hexNumbers[Math.floor(Math.random() * hexNumbers.length)];
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "#" + hexColorCode;
    }
  };

  useEffect(() => getQuote(), []);

  return (
    <section className="section-center">
      <div className="text-center">
        <h3 className="font">{quote.content}</h3>
        <i className="font">
          <p style={{ textAlign: "right" }}>-&nbsp;{quote.author}</p>
        </i>
        <button className="btn btn-secondary" onClick={getQuote}>
          Get Quote
        </button>
      </div>
    </section>
  );
};

export default App;
