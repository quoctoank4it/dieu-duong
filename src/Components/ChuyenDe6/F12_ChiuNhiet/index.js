import "./style.css";
import DungCuChiuNhiet from "../Images/DungCuChiuNhiet.png";

const F12_ChiuNhiet = ({}) => {
  return (
    <div id="section6-12" className="section">
      <div className="container">
        <h2>12. QUY TRÌNH TIỆT KHUẨN DỤNG CỤ CHỊU NHIỆT</h2>
        <span>(Panh, kéo, khay, dụng cụ phẫu thuật...)</span>
        <img
          src={DungCuChiuNhiet}
          width={"100%"}
          style={{ borderRadius: 10, marginBottom: 10, marginTop: 20 }}
          alt=""
        ></img>
      </div>
    </div>
  );
};
export default F12_ChiuNhiet;
