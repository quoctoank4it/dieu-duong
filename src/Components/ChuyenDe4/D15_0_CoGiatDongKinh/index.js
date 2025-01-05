import "./style.css";
import CoGiat from "../Images/CoGiat.webp";

const D15_0_CoGiatDongKinh = ({}) => {
  return (
    <div id="section4-15" className="section">
      <div className="container">
        <h2>15. CO GIẬT/ ĐỘNG KINH</h2>
        <img
          src={CoGiat}
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
            <h2>CẦN LÀM</h2>
            <ul>
              <li style={{ listStyle: "none" }}>
                1. Chắc chắn không có mối đe dọa xung quanh và kéo nạn nhân ra
                khỏi nước
              </li>
              <li style={{ listStyle: "none" }}>
                2. Đặt nạn nhân gập người trên đầu gối bạn để nước chảy ra từ
                đường hô hấp
              </li>
              <li style={{ listStyle: "none" }}>
                3. Làm sạch miệng nạn nhân (bùn, nhầy). Và gọi cấp cứu.
              </li>
              <li style={{ listStyle: "none" }}>
                4. Kiểm tra động mạch, đồng tử và nhịp thở
              </li>
              <li style={{ listStyle: "none" }}>
                5. Nếu không có mạch và nhịp thở thì làm hô hấp nhân tạo (đến
                khi xe cấp cứu đến hoặc bắt đầu thở và nhịp đập trở lại)
              </li>
              <li style={{ listStyle: "none" }}>
                6. Khi hơi thở và nhịp tim được hồi phục giữu ấm cho nạn nhân
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
          <div className="card" style={{ width: "100%" }}>
            <h2
              style={{
                color: "#d54101",
              }}
            >
              Lưu ý
            </h2>
            <ul>
              <li style={{ listStyle: "none" }}>
                ➤ Nếu nghi ngờ cột sống bị gây hãy sử dụng ván đưa nạn nhân vào
              </li>
              <li style={{ listStyle: "none" }}>
                ➤ HSCC được thực hiện ngay cả khi nạn nhân dưới nước 5-20 phút
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default D15_0_CoGiatDongKinh;
