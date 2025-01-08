import "./style.css";
import LASA1_NhinGiongNhau_DocKhacNhau from "../Images/LASA1_NhinGiongNhau_DocKhacNhau.png";
import LASA2_NhinGiongNhau_DocGiongNhau from "../Images/LASA2_NhinGiongNhau_DocGiongNhau.png";
import LASA3_NhinGanGiongNhau_DocGanGiongNhau from "../Images/LASA3_NhinGanGiongNhau_DocGanGiongNhau.png";
import LASA4_NhinKhacNhau_DocGanGiongNhau from "../Images/LASA4_NhinKhacNhau_DocGanGiongNhau.png";
import LASA5_NhinKhacNhau_DocGiongNhau from "../Images/LASA5_NhinKhacNhau_DocGiongNhau.png";

const G6_DanhThuocLASA = ({}) => {
  return (
    <div id="section7-6" className="section">
      <div className="container">
        <h2>6. DANH MỤC THUỐC LASA</h2>
        <h1>Nhìn giống nhau, đọc khác nhau</h1>
        <img
          src={LASA1_NhinGiongNhau_DocKhacNhau}
          width={"100%"}
          style={{ marginBottom: 10 }}
          alt=""
        ></img>
        <h1>Nhìn giống nhau, đọc giống nhau</h1>
        <img
          src={LASA2_NhinGiongNhau_DocGiongNhau}
          width={"100%"}
          style={{ marginBottom: 10 }}
          alt=""
        ></img>
        <h1>Nhìn gần giống nhau, đọc gần giống nhau</h1>
        <img
          src={LASA3_NhinGanGiongNhau_DocGanGiongNhau}
          width={"100%"}
          style={{ marginBottom: 10 }}
          alt=""
        ></img>
        <h1>Nhìn khác nhau, đọc gần giống nhau</h1>
        <img
          src={LASA4_NhinKhacNhau_DocGanGiongNhau}
          width={"100%"}
          style={{ marginBottom: 10 }}
          alt=""
        ></img>
        <h1>Nhìn khác nhau, đọc giống nhau</h1>
        <img
          src={LASA5_NhinKhacNhau_DocGiongNhau}
          width={"100%"}
          style={{ marginBottom: 10 }}
          alt=""
        ></img>
        {/* <h1>NHỮNG THUỐC ĐỌC GIỐNG NHAU</h1> */}
      </div>
    </div>
  );
};
export default G6_DanhThuocLASA;
