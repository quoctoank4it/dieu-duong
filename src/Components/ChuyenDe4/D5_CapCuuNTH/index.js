import "./style.css";
import HoHapNhanTao from "../Images/HoHapNhanTao.png";

const D5_CapCuuNTH = ({}) => {
  return (
    <div id="section4-5" className="section">
      <div className="container">
        <h2>5. CẤP CỨU NGỪNG TUẦN HOÀN</h2>
        <img
          src={HoHapNhanTao}
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
          <div className="card" style={{ width: "100%", padding: 10 }}>
            <ul>
              <li style={{ listStyle: "none" }}>
                - Khi phát hiện NB ngừng thở hoặc thở bất thường hồi sinh tim
                phổi theo thứ tự A-B-C
              </li>
              <li style={{ listStyle: "none" }}>
                - A (Airway): khai thông đường thở
              </li>
              <li style={{ listStyle: "none" }}>- B (Breathing): thông khí</li>
              <li style={{ listStyle: "none", paddingLeft: 20 }}>
                + Hô hấp miệng – miệng hoặc miệng – mũi: thổi ngạt 2 lần
              </li>
              <li style={{ listStyle: "none", paddingLeft: 20 }}>
                + Bóp bóng qua mask
              </li>
              <li style={{ listStyle: "none" }}>
                - C (Circulation): ép tim ngoài lồng ngực: 30 lần
              </li>
              <li
                style={{ listStyle: "none", fontWeight: "bold", color: "red" }}
              >
                → theo tiến trình A → B → C, chu kỳ 30:2.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default D5_CapCuuNTH;
