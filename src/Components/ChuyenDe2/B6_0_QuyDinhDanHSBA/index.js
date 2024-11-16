import "./style.css";
import KhaiNiemPhanCap from "../Images/khainiemphancap.webp";

const B6_0_QuyDinhDanHSBA = ({}) => {
  return (
    <div id="section2-6" className="section">
      <div className="container">
        <h2>6. QUY ĐỊNH THỦ TỤC DÁN HSBA (Hồ sơ bệnh án)</h2>
        <span style={{ fontWeight: "bold" }}>( QĐ 1895/1997 QD BYT)</span>
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
              <li style={{ listStyle: "none" }}>1. Các giấy tờ hành chính</li>
              <li style={{ listStyle: "none" }}>
                2. Tài liệu tuyển trước nếu có
              </li>
              <li style={{ listStyle: "none" }}>3. Phiếu khám bệnh vào viện</li>
              <li style={{ listStyle: "none" }}>
                4. Các giấy tờ cận lâm sàng (đánh theo thứ tự thời gian, trước
                dưới sau trên)
              </li>
              <li style={{ listStyle: "none", paddingLeft: 20 }}>
                - Xét nghiệm (huyết học, hóa sinh, vi sinh, nước tiểu, chất
                dịch)
              </li>
              <li style={{ listStyle: "none", paddingLeft: 20 }}>
                - Thăm dò chức năng (Siêu âm, điện tim, nội soi…)
              </li>
              <li style={{ listStyle: "none", paddingLeft: 20 }}>
                - Chẩn đoán hình ảnh và giải phẫu bệnh
              </li>
              <li style={{ listStyle: "none" }}>
                5. Test kháng sinh (nếu có), phiếu đánh giá dinh dưỡng…
              </li>
              <li style={{ listStyle: "none" }}>6. Phiếu truyền (dịch, máu)</li>
              <li style={{ listStyle: "none" }}>
                7. Phiếu theo dõi chức năng sống và phiếu chăm sóc
              </li>
              <li style={{ listStyle: "none" }}>
                8. Phẫu thuật, thủ thuật (giấy cam đoan, gây mê hồi sức, phiếu
                phẫu thuật- thủ thuật…)
              </li>
              <li style={{ listStyle: "none" }}>
                9. Biên bản hội chẩn, sơ kết 15 ngày điều trị (nếu có)
              </li>
              <li style={{ listStyle: "none" }}>10. Tờ điều trị</li>
              <li style={{ listStyle: "none" }}>
                11. Công khai thuốc và vật tư tiêu hao.
              </li>
              <li
                style={{
                  listStyle: "none",
                  fontStyle: "italic",
                  color: "#d54101",
                }}
              >
                Chú ý:
              </li>
              <li style={{ listStyle: "none", fontStyle: "italic" }}>
                Phiếu chăm sóc, điều trị đánh số tờ
              </li>
              <li style={{ listStyle: "none", fontStyle: "italic" }}>
                Hết quyển kế ngang, không bôi xóa trong hồ sơ
              </li>
              <li style={{ listStyle: "none", fontStyle: "italic" }}>
                1 số phiếu khác phát sinh đánh theo quy định từng bệnh viện sao
                cho phù hợp.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default B6_0_QuyDinhDanHSBA;
