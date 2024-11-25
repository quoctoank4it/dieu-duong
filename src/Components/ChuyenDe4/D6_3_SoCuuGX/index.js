import "./style.css";
import SoCuuGayXuong from "../Images/SoCuuGayXuong.png";
import SoCuuNutGayXuong from "../Images/SoCuuNutGayXuong.jpg";

const D6_3_SoCuuGX = ({}) => {
  return (
    <div id="section4-6-3" className="section">
      <div className="container">
        <h2>6. SƠ CỨU GÃY XƯƠNG</h2>
        <img
          src={SoCuuGayXuong}
          width={"100%"}
          style={{ borderRadius: 10, marginTop: 10, marginBottom: 10 }}
          alt=""
        ></img>
        <div
          style={{
            border: "1px solid blue",
            borderRadius: 10,
            padding: 10,
            display: "inline-block",
          }}
        >
          <span
            style={{
              fontWeight: "bold",
              color: "#d54101",
            }}
          >
            NỨT GÃY XƯƠNG
          </span>
          <img
            src={SoCuuNutGayXuong}
            width={"100%"}
            style={{ borderRadius: 10, marginTop: 10, marginBottom: 10 }}
            alt=""
          ></img>
          <div style={{ display: "grid", textAlign: "left" }}>
            <span>Bước 1: Cầm máu nhưng không được tự ý nắn lại vết gãy </span>
            <span>
              Bước 2: Cố định vùng bị chấn thương, đặt nẹp nhẹ nhàng dưới chỗ bị
              gãy, cố định nẹp{" "}
            </span>
            <span>Bước 3: Chườm đá để giảm sưng đau</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default D6_3_SoCuuGX;
