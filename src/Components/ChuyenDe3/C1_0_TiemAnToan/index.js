import "./style.css";

const C1_0_TiemAnToan = ({}) => {
  return (
    <div id="section3-1" className="section">
      <div className="container">
        <h2>CHUYÊN ĐỀ 3: KIẾN THỨC VỀ THỰC HÀNH QUY TRÌNH ĐD</h2>
        <h1>1. Tiêm an toàn</h1>
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
                1.1. Khái niệm
              </li>
              <li style={{ listStyle: "none" }}>Tiêm an toàn là:</li>
              <li style={{ listStyle: "none" }}>
                - Không nguy hại cho người nhận mũi tiêm
              </li>
              <li style={{ listStyle: "none" }}>
                - Không phơi nhiễm cho người thực hiện
              </li>
              <li style={{ listStyle: "none" }}>
                - Không tạo chất thải cho người khác
              </li>
            </ul>
          </div>
        </div>
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
                1.2. Tác hại tiêm không an toàn
              </li>
              <li style={{ listStyle: "none" }}>- Có thể lây nhiễm </li>
              <li style={{ listStyle: "none" }}>- Có thể gây biến chứng</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default C1_0_TiemAnToan;
