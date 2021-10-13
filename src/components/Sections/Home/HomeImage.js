import { useState, useRef } from "react";
import pokmnTrainer from "../../../assets/pokemon_trainer.jpg";
import "./HomeImage.css";
const HomeImage = () => {
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const [rectImg, setRectImg] = useState({ rX: 0, rY: 0 });
  const [style, setStyle] = useState(false);
  const boxRef = useRef();
  const imgRef = useRef();

  const mouseMoveHandler = (e) => {
    setStyle(true);
    let rect = boxRef.current;
    let inner = imgRef.current;
    let _x = rect.offsetLeft + Math.floor(rect.offsetWidth / 2);
    let _y = rect.offsetTop + Math.floor(rect.offsetHeight / 2);
    setXY({
      x: e.clientX - _x,
      y: (e.clientY - _y) * -1,
    });
    setRectImg({ rX: inner.offsetWidth, rY: inner.offsetHeight });
  };

  let rotX = 0;
  let rotY = 0;
  if (xy.y > 0 && xy.x > 0) {
    rotX = "rotateX(" + (xy.x / rectImg.rX / 2).toFixed(2) * 30 + "deg)";
    rotY = "rotateY(" + (xy.y / rectImg.rY / 2).toFixed(2) * 30 + "deg)";
  }
  if (xy.y > 0 && xy.x < 0) {
    rotX = "rotateX(" + (xy.x / rectImg.rX / 2).toFixed(2) * -30 + "deg)";
    rotY = "rotateY(" + (xy.y / rectImg.rY / 2).toFixed(2) * -30 + "deg)";
  }
  if (xy.y < 0 && xy.x < 0) {
    rotX = "rotateX(" + (xy.x / rectImg.rX / 2).toFixed(2) * 30 + "deg)";
    rotY = "rotateY(" + (xy.y / rectImg.rY / 2).toFixed(2) * 30 + "deg)";
  }
  if (xy.y < 0 && xy.x > 0) {
    rotX = "rotateX(" + (xy.x / rectImg.rX / 2).toFixed(2) * -30 + "deg)";
    rotY = "rotateY(" + (xy.y / rectImg.rY / 2).toFixed(2) * -30 + "deg)";
  }

  return (
    <div
      className="trainer-img"
      onMouseMove={mouseMoveHandler}
      onMouseLeave={() => {
        setStyle(false);
      }}
      ref={boxRef}
    >
      <img
        style={
          style
            ? {
                transform: "perspective(800px)" + rotX + rotY,
              }
            : {}
        }
        ref={imgRef}
        src={pokmnTrainer}
        alt="Me"
      />
    </div>
  );
};

export default HomeImage;
