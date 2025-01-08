import "./style.css";
import QuanLyThuoc from "../Images/QuanLyThuoc.jpg";

const G5_QuanLyThuoc = ({}) => {
  return (
    <div id="section7-5" className="section">
      <div className="container">
        <h2>5. QUẢN LÝ THUỐC CÓ NGUY CƠ CAO</h2>
        <img
          src={QuanLyThuoc}
          width={"100%"}
          style={{ marginBottom: 10 }}
          alt=""
        ></img>
      </div>
    </div>
  );
};
export default G5_QuanLyThuoc;
