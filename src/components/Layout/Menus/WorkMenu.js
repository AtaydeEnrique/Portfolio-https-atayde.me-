import "./WorkMenu.css";
import Link from "../../../assets/linkIcon.svg";

const WorkMenu = () => {
  return (
    <div className="works-wrap">
      <div className="work-box">
        <div className="work-box_link">
          <a
            href="http://somim.org.mx/memorias/memorias2019/articulos/A5_158.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Link} alt="link icon" />
          </a>
        </div>
        <div className="work-box_content">
          <h3>
            Android app development for the calculation of the size of
            nanocrystals
          </h3>
          <h6>SOMIM (Mexican Society of Mechanical Engineering)</h6>
          <br />
          <h4>
            In this App, the Scherrer equation is used for calculating the size
            of nanocrystals using the X-ray diffraction (XRD) technique. This
            application becomes a very powerful tool to use in teaching
            methodologies of engineering students of materials science and
            nanotechnology engineering.
          </h4>
          <br />
          <h5>JAVA &nbsp;Android Studio</h5>
        </div>
      </div>
      <div className="work-box">
        <div className="work-box_link">
          <a
            href="https://www.theijes.com/papers/vol7-issue12/Version-1/I0712016368.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Link} alt="link icon" />
          </a>
        </div>
        <div className="work-box_content">
          <h3>Position study of a four-bar mechanism using MATLAB</h3>
          <h6>The Internatonal Journal of Engineerng and Science</h6>
          <br />
          <h4>
            A didactic program was developed to perform the analysis of the
            position of a generic mechanism of four bars. The program was
            carried out through the mathematical analysis of the closed loop
            equation of the mechanism and was implemented in the GUIDE platform
            of MATLAB through functions programmed in the MATLAB environment.
          </h4>
          <br />
          <h5>MATLAB</h5>
        </div>
      </div>
      <div className="work-box">
        <div className="work-box_link">
          <a
            href="http://somim.org.mx/memorias/memorias2018/articulos/A5_67.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Link} alt="link icon" />
          </a>
        </div>
        <div className="work-box_content">
          <h3>
            Determination of 2D and 3D safety factors for ductile materials on
            Android platform
          </h3>
          <h6>SOMIM (Mexican Society of Mechanical Engineering)</h6>

          <br />
          <h4>
            An application was developed for the Android platform in order to
            find the safety factors of mechanical elements depending on the
            axial and shearing forces to which it is subjected. The application
            developed turns out to be a very powerful tool during the teaching
            of the theory of failure in the engineering students, since it
            allows finding the values of the principal stresses, their graphic
            representation and the value of the safety factor
          </h4>
          <br />
          <h5>JAVA &nbsp;Android Studio</h5>
        </div>
      </div>
    </div>
  );
};

export default WorkMenu;
