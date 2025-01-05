import "./style.css";
import BongGan from "../Images/BongGan.png";

const D9_0_BongGan = ({}) => {
  return (
    <div id="section4-9" className="section">
      <div className="container">
        <h2>9. BONG GÂN</h2>
        <img
          src={BongGan}
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
            TRẬT KHƠP
          </span>
          <div style={{ display: "grid", textAlign: "left" }}>
            <span>Bước 1: Hạn chế di chuyển</span>
            <span>Bước 2: Cố định và ổn định khớp</span>
            <span>Bước 3: Sử dụng lạnh để giảm sưng phù</span>
            <span>Bước 4: Đưa đến cơ sở y tế</span>
            <div style={{ marginTop: 10, width: 300 }}>
              <span style={{ color: "#d54101", fontStyle: "italic" }}>
                Chú ý:
              </span>
              <span style={{ fontStyle: "italic" }}>
                &nbsp;Không thoa dầu nóng
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default D9_0_BongGan;
