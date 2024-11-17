import "./style.css";
import ViTriTiem from "../Images/vitritiem.png";
import TiemCoDuoi from "../Images/tiemcoduoi.png";
import ViTriTiemMong from "../Images/vitritiemmong.png";
import TiemInsulin from "../Images/vttieminsulin.png";
import CachVeoDaTiemInsulin from "../Images/cachveodatieminsulin.png";

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
        <div
          style={{
            border: "1px solid blue",
            borderRadius: 10,
            padding: 10,
            display: "inline-block",
          }}
        >
          <span style={{ fontWeight: "bold", color: "#d54101" }}>TIÊM BẮP</span>
          <div className="card" style={{ marginTop: 10 }}>
            <img
              src={TiemCoDuoi}
              width={"100%"}
              style={{ borderRadius: 10 }}
              alt=""
            ></img>
            <span>
              Cơ tứ đầu đuồi: Tiêm vào 1/3 giữa, mặt trước ngoài cơ tứ đầu đuồi
            </span>
          </div>
          <div className="card" style={{ marginTop: 10 }}>
            <img
              src={ViTriTiemMong}
              width={"100%"}
              style={{ borderRadius: 10 }}
              alt=""
            ></img>
            <div style={{ display: "grid", textAlign: "left" }}>
              <span style={{ color: "#d54101" }}>
                Cách xác định vị trí tiêm mông:
              </span>
              <span>
                Cách 1: Nối từ gai chậu trước trên đến xương cùng cụt tiêm 1/3
                trên
              </span>
              <span>Cách 2: Chia mông làm 4 phần, tiêm 1/4 góc trên ngoài</span>
            </div>
          </div>
          <div className="card" style={{ marginTop: 10 }}>
            <div style={{ display: "grid", textAlign: "left" }}>
              <span style={{ color: "#d54101", fontStyle: "italic" }}>
                - Chống chỉ định tiêm bắp:
              </span>
              <span style={{ paddingLeft: 10 }}>
                Thuốc gây hoại tử cơ: Calciclorua, dung dịch ưu trương
              </span>
              <span style={{ color: "#d54101", fontStyle: "italic" }}>
                - Chống chỉ định tiêm TM:
              </span>
              <span style={{ paddingLeft: 10 }}>Các thuốc tan trong dầu</span>
            </div>
          </div>
        </div>
        <div
          style={{
            border: "1px solid blue",
            borderRadius: 10,
            padding: 10,
            display: "inline-block",
            marginTop: 10,
          }}
        >
          <span style={{ fontWeight: "bold", color: "#d54101" }}>
            VỊ TRÍ TIÊM INSULIN
          </span>
          <div className="card" style={{ marginTop: 10 }}>
            <img
              src={TiemInsulin}
              width={"100%"}
              style={{ borderRadius: 10 }}
              alt=""
            ></img>
          </div>
          <div className="card" style={{ marginTop: 10 }}>
            <img
              src={CachVeoDaTiemInsulin}
              width={"100%"}
              style={{ borderRadius: 10 }}
              alt=""
            ></img>
            <div
              style={{ display: "grid", textAlign: "center", marginTop: 10 }}
            >
              <span style={{ color: "#d54101" }}>Cách véo da tiêm Insulin</span>
            </div>
          </div>
          <div style={{ marginTop: 10, width: 300 }}>
            <span style={{ color: "#d54101", fontStyle: "italic" }}>
              Chú ý:
            </span>
            <span style={{ fontStyle: "italic" }}>
              &nbsp;Luôn luôn thay đổi vị trí đề phòng biến chứng loạn dưỡng lớp
              mỡ dưới da
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default C2_0_ViTriTiem;
