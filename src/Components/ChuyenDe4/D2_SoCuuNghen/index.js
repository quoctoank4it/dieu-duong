import "./style.css";
import SoCuuNghen from "../Images/socuunghen.png";
import B1VoLung from "../Images/b1volung.png";
import B2AnNguc from "../Images/b2annguc.png";

const D2_SoCuuNghen = ({}) => {
  return (
    <div id="section4-2" className="section">
      <div className="container">
        <h2>2. SƠ CỨU KHI BỊ NGHẸN HÓC</h2>
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
            Đối với người lớn và trẻ trên 1 tuổi
          </span>
          <img
            src={SoCuuNghen}
            width={"100%"}
            style={{ borderRadius: 10, marginTop: 10, marginBottom: 10 }}
            alt=""
          ></img>
          <div style={{ display: "grid", textAlign: "left" }}>
            <span>1. Đứng sau và ôm lấy đoạn giữa nạn nhân bằng cả 2 tay</span>
            <span>2. Bẻ gập người về phía trước</span>
            <span>
              3. Nắm chặt 1 bàn tay thành nắm đấm và đặt nó giữa rốn và xương ức
            </span>
            <span>
              4. Quấn chặt nắm đấm bằng tay kia, đột ngột ấn vào dạ dày và hướng
              lên trên (5 lần)
            </span>
            <span>
              5. Nếu nạn nhân bắt tình ngồi trên đùi họ và đột ngột ấn cả 2 tay
              vào mạng sườn
            </span>
            <span>
              6. Đặt NB nằm nghiêng 1 bên, dùng ngón tay lấy dị vật ra ngoài
            </span>
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
          <span
            style={{
              fontWeight: "bold",
              color: "#d54101",
            }}
          >
            Đối trẻ dưới 1 tuổi
          </span>
          <div className="card" style={{ marginTop: 10 }}>
            <img
              src={B1VoLung}
              width={"100%"}
              style={{ borderRadius: 10 }}
              alt=""
            ></img>
            <div style={{ display: "grid", textAlign: "left", marginTop: 10 }}>
              <span style={{ color: "red", fontWeight: "bold" }}>
                Bước 1: Vỗ lưng
              </span>
              <span>
                1. Đặt bé nằm sấp trên cánh tay, đầu chúi xuống hơi thấp hơn và
                cánh tay tay thả lỏng tựa vào cẳng chân bạn. Đỏ đầu của bé bằng
                lòng bàn tay bạn, nếu bé quá nặng có thể đặt bé nằm xuống đùi.
              </span>
              <span>2. Dùng gót bàn tay vỗ mạnh 5 cái vào lưng.</span>
              <span>
                3. Kiểm tra miệng xem có dị vật không và lấy ra. Nếu vỗ lưng
                không hiệu quả chuyển sang án ngực.
              </span>
            </div>
          </div>
          <div className="card" style={{ marginTop: 10 }}>
            <img
              src={B2AnNguc}
              width={"100%"}
              style={{ borderRadius: 10 }}
              alt=""
            ></img>
            <div style={{ display: "grid", textAlign: "left", marginTop: 10 }}>
              <span style={{ color: "red", fontWeight: "bold" }}>
                Bước 2: Ấn ngực
              </span>
              <span>
                1. Đặt bé nằm trên đùi bạn, đầu thấp hơn thân. Đặt 3 ngón tay
                phải ở giữa ngực bé. Ngón tay giữ nên để ngay giữa ngực.
              </span>
              <span>
                2. Nâng ngón tay giữa và chỉ sử dụng các ngón tay còn lại để đẩy
                lên 5 lần thật chắc.
              </span>
            </div>
          </div>
          <div style={{ marginTop: 10, width: 300 }}>
            <span style={{ color: "#d54101", fontStyle: "italic" }}>
              Chú ý:
            </span>
            <span style={{ fontStyle: "italic" }}>
              &nbsp;Tuyệt đối không dùng tay móc họng trẻ, di vật vào sâu hơn và
              gây tổn thương hóng.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default D2_SoCuuNghen;
