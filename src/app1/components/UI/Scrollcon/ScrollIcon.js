import "./ScrollIcon.css";

const ScrollIcon = ({ offset }) => {
  const offsetClass = offset === 0 ? "scroll-visible" : "scroll-hidden";
  return (
    <div className={`scroll-container ${offsetClass}`}>
      <div className="scroll-icon"></div>
      <div className="scroll-icon"></div>
      <div className="scroll-icon"></div>
      <span className="scroll-text">Scroll down</span>
    </div>
  );
};

export default ScrollIcon;
