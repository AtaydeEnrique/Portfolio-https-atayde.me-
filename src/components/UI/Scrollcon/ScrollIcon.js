import "./ScrollIcon.css";

const ScrollIcon = ({ offset }) => {
  const offsetClass = offset === 0 ? "scroll-visible" : "scroll-hidden";
  return (
    <div class={`scroll-container ${offsetClass}`}>
      <div class="scroll-icon"></div>
      <div class="scroll-icon"></div>
      <div class="scroll-icon"></div>
      <span class="scroll-text">Scroll down</span>
    </div>
  );
};

export default ScrollIcon;
