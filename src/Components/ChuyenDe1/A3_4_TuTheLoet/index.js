import "./style.css";
import ViTriLoet from "../Images/vitriloet.png";

const A1_3_4_ViTriLoet = ({}) => {
  return (
    <div id="section1-3-4" className="section">
      <div className="container">
        <h2>3.4. CÁC VỊ TRÍ DỄ BỊ LOÉT</h2>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <img
            src={ViTriLoet}
            width={"100%"}
            style={{ borderRadius: 10 }}
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};
export default A1_3_4_ViTriLoet;
