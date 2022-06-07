import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="spinner-box">
      <div className="border-1">
        <div className="core"></div>
      </div>
      <div className="border-2">
        <div className="core"></div>
      </div>
    </div>
  );
};

export default Spinner;
