import "./style.css";
import BangPhanLoaiRacYTe from "../Images/BangPhanLoaiRacYTe.jpg";

const F4_BangPhanLoaiCTYT = ({}) => {
  return (
    <div id="section6-4" className="section">
      <div className="container">
        <h2>4. BẢNG PHÂN LOẠI CHẤT THẢI Y TẾ</h2>
        <span style={{ fontWeight: "bold" }}>
          Theo TTSố: 58/2015/TTLT-BYT-BTNMT ngày 31/12/2015
        </span>
        <img
          src={BangPhanLoaiRacYTe}
          width={"100%"}
          style={{ borderRadius: 10, marginBottom: 10, marginTop: 20 }}
          alt=""
        ></img>
      </div>
    </div>
  );
};
export default F4_BangPhanLoaiCTYT;
