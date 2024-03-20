import { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import { FaTwitter } from "react-icons/fa";
const themeColors = [
  "#16A085",
  "#27AE60",
  "#2C3E50",
  "#F39C12",
  "#F8719D",
  "#9B59B6",
  "#FB6964",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];
const Quotes = [
  {
    quotes: "Do what you can, where you are, with what you have.",
    author: "Teddy Roosevelt",
  },
  {
    quotes: "Education costs money. But then so does ignorance.",
    author: "Sir Claus Moser",
  },
  {
    quotes:
      "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
  },
  {
    quotes: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford",
  },
  {
    quotes:
      "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
    author: "Leonardo da Vinci",
  },
];

function App() {
  const [quote, setQuote] = useState(
    "Life isn’t about getting and having, it’s about giving and being."
  );
  const [author, setAuthor] = useState("Kevin Kruse");
  const [color, setColor] = useState("#73A857");
  const handleNextChange = () => {
    let num = Math.floor(Math.random() * 5);
    let newQuote = Quotes[num];
    setQuote(newQuote.quotes);
    setAuthor(newQuote.author);
    let nextColor = themeColors[Math.floor(Math.random() * themeColors.length)];
    console.log(nextColor);
    setColor(nextColor);
  };
  return (
    <div
      className={`w-[full] h-[100vh] flex justify-center items-center `}
      style={{ backgroundColor: `${color}` }}
    >
      <div
        id="quote-box"
        className="w-[36%] h-[full] bg-white rounded-lg border-solid border-1 border-black flex flex-col items-center justify-around"
      >
        <div id="quote-text" className="flex items-start text-[30px] px-8 pt-8">
          <i
            className={`fa fa-quote-left icon mr-2 before:content-[" \f10d "]`}
            style={{ color: `${color}` }}
          ></i>
          <span
            id="text"
            className={`text-[23px] px-2 font-madimi font-semibold`}
            style={{ color: `${color}` }}
          >
            {quote}
          </span>
        </div>
        <div id="author-text" className="w-[100%] flex justify-end me-10 p-3">
          <div
            id="author"
            className={`author text-[22px] mb-2 font-madimi`}
            style={{ color: `${color}` }}
          >
            {" "}
            - {author}
          </div>
        </div>
        <div className="w-[100%] flex justify-between p-3">
          <a
            id="tweet-quote"
            href="twitter.com/intent/tweet"
            className={`ms-10 text-[20px] font-madimi rounded-lg p-2 text-white`}
            style={{ backgroundColor: `${color}` }}
          >
            <FaTwitter />
          </a>
          <button
            id="new-quote"
            onClick={handleNextChange}
            className={`text-white me-10 text-[16px] font-madimi rounded-lg px-2 py-1`}
            style={{ backgroundColor: `${color}` }}
          >New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
