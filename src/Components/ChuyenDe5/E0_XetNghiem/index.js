import "./style.css";
import XetNghiem from "../Images/XetNghiem.webp";

const E0_XetNghiem = ({}) => {
  return (
    <div id="section5" className="section">
      <div className="container">
        <h2>CHUYÊN ĐỀ V: XÉT NGHIỆM</h2>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <img
            src={XetNghiem}
            width={150}
            style={{ borderRadius: 10 }}
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};
export default E0_XetNghiem;
