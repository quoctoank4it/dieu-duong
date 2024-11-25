import "./style.css";
import GayDuiHo from "../Images/GayDuiHo.jpg";
import GayXuong from "../Images/GayXuong.webp";

const D6_0_GayXuong = ({}) => {
  return (
    <div id="section4-6-0" className="section">
      <div className="container">
        <h2>6. GÃY XƯƠNG</h2>
        <img
          src={GayDuiHo}
          width={"100%"}
          style={{ borderRadius: 10, marginTop: 10, marginBottom: 10 }}
          alt=""
        ></img>
        <img
          src={GayXuong}
          width={"100%"}
          style={{ borderRadius: 10, marginTop: 10, marginBottom: 10 }}
          alt=""
        ></img>
      </div>
    </div>
  );
};
export default D6_0_GayXuong;
