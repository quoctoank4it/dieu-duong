import "./style.css";
import HanCheNhamLanThuoc from "../Images/HanCheNhamLanThuoc.png";
import DungDungThuoc from "../Images/5DungDungThuoc.png";

const G3_HanCheNhamLanThuoc = ({}) => {
  return (
    <div id="section7-3" className="section">
      <div className="container">
        <h2>3. HẠN CHẾ NHẦM LẪN THUỐC</h2>
        <img
          src={HanCheNhamLanThuoc}
          width={"100%"}
          style={{ borderRadius: 10, marginBottom: 10 }}
          alt=""
        ></img>
        <img
          src={DungDungThuoc}
          width={"100%"}
          style={{ borderRadius: 10, marginBottom: 10, marginTop: 10 }}
          alt=""
        ></img>
      </div>
    </div>
  );
};
export default G3_HanCheNhamLanThuoc;
