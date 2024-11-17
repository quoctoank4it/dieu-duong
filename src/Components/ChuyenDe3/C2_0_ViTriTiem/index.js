import "./style.css";
import ViTriTiem from "../Images/vitritiem.png";

const C2_0_ViTriTiem = ({}) => {
  return (
    <div id="section3-2" className="section">
      <div className="container">
        <h2>2. VỊ TRÍ TIÊM</h2>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <div className="card" style={{ width: "100%", padding: 10 }}>
            <ul>
              <li
                style={{ listStyle: "none", color: "blue", fontWeight: "bold" }}
              >
                Vị trí tiêm và góc đâm kim:
              </li>
              <li style={{ listStyle: "none" }}>- Tiêm bắp: 45-90 độ</li>
              <li style={{ listStyle: "none" }}>- Dưới da: 30-45 độ</li>
              <li style={{ listStyle: "none" }}>- Trong da: 15 độ.</li>
            </ul>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <img
            src={ViTriTiem}
            width={"100%"}
            style={{ borderRadius: 10 }}
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};
export default C2_0_ViTriTiem;
