import "./ScrollingText.css";

const ScrollingText = ({ direction = "left", customClass = null, text }) => {
  return (
    <div
      className={`infinite lax lax_preset_fadeInOut:309${
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
