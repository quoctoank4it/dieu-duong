import "./style.css";
import ConTrungCan from "../Images/ConTrungCan.png";

const D16_0_ConTrung = ({}) => {
  return (
    <div id="section4-16" className="section">
      <div className="container">
        <h2>16. CÔN TRÙNG CẮN</h2>
        <img
          src={ConTrungCan}
          width={"100%"}
          style={{ borderRadius: 10, marginTop: 10, marginBottom: 10 }}
          alt=""
        ></img>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <div className="card" style={{ width: "100%" }}>
            <ul>
              <li style={{ listStyle: "none" }}>
                1. Xem xét vết cắn và loại bỏ ngòi độc nếu bạn tìm thấy nó
              </li>
              <li style={{ listStyle: "none" }}>2. Chườm lạnh nơi vết cắn</li>
              <li style={{ listStyle: "none" }}>
                3. Báo Bác sĩ hoặc gọi cấp cứu nếu người đó bị dị ứng hoặc sốc
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default D16_0_ConTrung;
