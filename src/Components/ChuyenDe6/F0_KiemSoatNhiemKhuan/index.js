import "./style.css";
import KiemSoatNhiemKhuan1 from "../Images/KiemSoatNhiemKhuan1.webp";
import KiemSoatNhiemKhuan2 from "../Images/KiemSoatNhiemKhuan2.webp";

const F0_KiemSoatNhiemKhuan = ({}) => {
  return (
    <div id="section6" className="section">
      <div className="container">
        <h2>CHUYÊN ĐỀ VI: KIỂM SOÁT NHIỄM KHUẨN</h2>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <img
            src={KiemSoatNhiemKhuan1}
            width={150}
            style={{ borderRadius: 10, marginRight: 20 }}
            alt=""
          ></img>
          <img
            src={KiemSoatNhiemKhuan2}
            width={150}
            style={{ borderRadius: 10 }}
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};
export default F0_KiemSoatNhiemKhuan;
