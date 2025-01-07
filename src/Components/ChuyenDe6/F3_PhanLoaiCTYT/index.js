import "./style.css";
import SoDoPhanLoaiChatThaiYTe from "../Images/SoDoPhanLoaiChatThaiYTe.png";

const F3_PhanLoaiCTYT = ({}) => {
  return (
    <div id="section6-3" className="section">
      <div className="container">
        <h2>3. PHÂN LOẠI CHẤT THẢI Y TẾ</h2>
        <span style={{ fontWeight: "bold" }}>
          Theo TTSố: 58/2015/TTLT-BYT-BTNMT ngày 31/12/2015
        </span>
        <img
          src={SoDoPhanLoaiChatThaiYTe}
          width={"100%"}
          style={{ borderRadius: 10, marginBottom: 10, marginTop: 20 }}
          alt=""
        ></img>
      </div>
    </div>
  );
};
export default F3_PhanLoaiCTYT;
