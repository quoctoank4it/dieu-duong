import "./style.css";
import DungKuKemChieuNhiet from "../Images/DungKuKemChieuNhiet.png";

const F11_KemChiuNhiet = ({}) => {
  return (
    <div id="section6-11" className="section">
      <div className="container">
        <h2>11. QUY TRÌNH KHỬ KHUẨN DỤNG CỤ KÉM CHỊU NHIỆT</h2>
        <span>(Bình hút, dây hút...)</span>
        <img
          src={DungKuKemChieuNhiet}
          width={"100%"}
          style={{ borderRadius: 10, marginBottom: 10, marginTop: 20 }}
          alt=""
        ></img>
      </div>
    </div>
  );
};
export default F11_KemChiuNhiet;
