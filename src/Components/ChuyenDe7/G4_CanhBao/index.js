import "./style.css";
import DieuDuong from "../Images/DieuDuong.webp";
import BenhNhan from "../Images/BenhNhan.webp";

const G4_CanhBao = ({}) => {
  return (
    <div id="section7-4" className="section">
      <div className="container">
        <h2>4. CẢNH BÁO MỘT SỐ NGUY CƠ SAI SÓT TRONG SỬ DỤNG THUỐC</h2>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div className="card" style={{ width: "100%" }}>
            <div>
              <span
                style={{
                  fontWeight: "bold",
                  color: "#d54101",
                }}
              >
                Điều dưỡng
              </span>
            </div>

            <img
              src={DieuDuong}
              width={250}
              style={{ borderRadius: 10, marginTop: 20 }}
              alt=""
            ></img>
            <ul>
              <li style={{ listStyle: "none", color: "#d54101" }}>
                Yếu tố nguy cơ:
              </li>
              <li style={{ listStyle: "none", paddingLeft: 10 }}>
                * Dùng nhầm thuốc: mặc dù thấy thuốc đã kê đơn thuốc đúng chỉ
                định.
              </li>
              <li style={{ listStyle: "none", paddingLeft: 10 }}>
                * Sai liều, đường dùng, cách chuẩn bị thuốc, kỹ thuật sử dụng,
                thời điểm dùng.
              </li>
              <li style={{ listStyle: "none", paddingLeft: 10 }}>
                * Thông tin nhận được qua y lệnh miệng
              </li>
              <li style={{ listStyle: "none", paddingLeft: 10 }}>
                * Nhãn thuốc, bao bì, tên thuốc dễ gây nhầm lẫn
              </li>
              <li style={{ listStyle: "none", paddingLeft: 10 }}>
                * Dụng cụ, phương tiện chia thuốc còn thiếu, chưa đúng tiêu
                chuẩn.
              </li>
              <li style={{ listStyle: "none", paddingLeft: 10 }}>
                * Thiếu qui trình chuẩn, và giám sát thực hiện qui trình
              </li>
              <li style={{ listStyle: "none", paddingLeft: 10 }}>
                * Kinh nghiệm của nhân viên y tế, khối lượng công việc, môi
                trường làm việc.
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <div className="card" style={{ width: "100%" }}>
            <div>
              <span
                style={{
                  fontWeight: "bold",
                  color: "#d54101",
                }}
              >
                Do bệnh nhân
              </span>
            </div>

            <img
              src={BenhNhan}
              width={250}
              style={{ borderRadius: 10, marginTop: 20 }}
              alt=""
            ></img>
            <ul>
              <li style={{ listStyle: "none", paddingLeft: 10 }}>
                * Không tuân thủ điều trị
              </li>
              <li style={{ listStyle: "none", paddingLeft: 10 }}>
                * Từ chối điều trị
              </li>
              <li style={{ listStyle: "none", paddingLeft: 10 }}>
                * Không tuân thủ liệu trình điều trị...
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default G4_CanhBao;
