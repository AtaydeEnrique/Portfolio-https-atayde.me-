import "./ScrollingText.css";

const ScrollingText = ({ direction = "left" }) => {
  return (
    <div className="infinite">
      <div className="infinite-container">
        <div className={`infinite-text ${direction}`}>
          STUDY. PRACTICE. WORK. BUILD.
        </div>
        <div className={`infinite-text ${direction}`}>
          STUDY. PRACTICE. WORK. BUILD.
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
