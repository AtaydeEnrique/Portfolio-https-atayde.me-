import "./ScrollingText.css";

const ScrollingText = ({
  direction = "left",
  abs = false,
  customClass = null,
  text,
}) => {
  return (
    <div
      className={`infinite${abs ? " infinite-absolute" : ""}${
        customClass ? " " + customClass : ""
      }`}
    >
      <div className="infinite-container">
        <div className={`infinite-text ${direction}`}>{text}</div>
        <div className={`infinite-text ${direction}`}>{text}</div>
      </div>
    </div>
  );
};

export default ScrollingText;
