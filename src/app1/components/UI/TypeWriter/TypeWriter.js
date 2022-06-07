import { useEffect, useState } from "react";
import "./TypeWriter.css";
const TypeWriter = ({ speed, delay1, delay2, text, emoji, classes }) => {
  const [count, setCount] = useState(0);
  const [word, setWord] = useState([]);
  const [reverse, setReverse] = useState(false);
  const [icon, setIcon] = useState(0);
  const [next, setNext] = useState(0);

  const nextWord = text[next];
  const length = nextWord.length;

  useEffect(() => {
    const typing = setTimeout(() => {
      if (reverse) {
        return;
      }
      let temp = word;
      if (nextWord[length - 1 - count]) {
        temp.unshift(nextWord[length - 1 - count]);
      }
      setWord(temp);
      setCount((c) => c + 1);
      if (count === length) {
        setTimeout(() => {
          setReverse(true);
          setIcon(Math.floor(Math.random() * (emoji.length - 0)));
          return;
        }, delay1);
      }
    }, speed);
    return () => {
      clearTimeout(typing);
    };
  });

  useEffect(() => {
    const typing = setTimeout(() => {
      if (reverse) {
        let temp = word;
        temp.shift();
        setWord(temp);
        setCount((c) => c + 1);
        if (word.length < 1) {
          setReverse(false);
          if (text.length - 1 === next) {
            setNext(0);
          } else {
            setNext((n) => n + 1);
          }
          setTimeout(() => {
            setCount(0);
          }, delay2);
        }
      }
    }, speed);
    return () => {
      clearTimeout(typing);
    };
  });

  return (
    <span className={classes}>
      <span>{`${
        word.length >= 0 && word.length < length - 2 ? `${emoji[icon]}` : ""
      }${word.length === length - 2 ? "⚟" : ""}${word.join("")}`}</span>
    </span>
  );
};

export default TypeWriter;
