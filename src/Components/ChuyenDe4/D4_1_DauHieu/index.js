import "./style.css";

const D4_1_DauHieu = ({}) => {
  return (
    <div id="section4-4-1" className="section">
      <div className="container">
        <h2>4.1. DẤU HIỆU NHẬN BIẾT NGƯỜI BỆNH ĐỘT QUỴ</h2>
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
                F.A.S.T – Quy tắc phát hiện đột quỵ cơ bản
              </li>
              <li style={{ listStyle: "none" }}>
                – F (face): Biểu hiện khuôn mặt bị mất cân đối, một bên mặt bị
                chảy xệ, cười méo mó do yếu liệt. Để quan sát kỹ hơn, bạn có thể
                yêu cầu bệnh nhân cười. Nếu nụ cười lõm vào, có tình trạng biến
                dạng như méo, lệch về một bên thì rất có thể bệnh nhân đã bị đột
                quỵ.
              </li>
              <li style={{ listStyle: "none" }}>
                – A (arm): Bệnh nhân cử động khó khăn hoặc không thể cử động tay
                chân, thậm chí yếu liệt một bên cơ thể. Lúc này, nếu được yêu
                cầu giơ tay lên, bệnh nhân có thể không đưa được hai tay qua đầu
                hoặc nhanh chóng buông thõng.
              </li>
              <li style={{ listStyle: "none" }}>
                – S (speech): Biểu hiện đặc trưng là giọng nói bị thay đổi, bệnh
                nhân nói ngọng, dính chữ. Khi được yêu cầu nói những câu đơn
                giản, bệnh nhân thường không thể nhắc lại hoặc nói khó nghe, nói
                lắp,…
              </li>
              <li style={{ listStyle: "none" }}>
                – T (time): Thời gian với những bệnh nhân đột quỵ là “vàng”.
                Càng cấp cứu sớm thì tổn thương càng ít, khả năng phục hồi càng
                cao và ngược lại bệnh nhân sẽ dễ tử vong và đối mặt với những di
                chứng nặng nề sau này.
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
                B.E.F.A.S.T – Triệu chứng bệnh đột quỵ nâng cao
              </li>
              <li style={{ listStyle: "none" }}>
                – B (balance): Mô tả tình trạng bệnh nhân đột ngột mất thăng
                bằng, đồng thời chóng mặt, đau đầu dữ dội và mất khả năng phối
                hợp vận động.
              </li>
              <li style={{ listStyle: "none" }}>
                – E (eyesight): Bệnh nhân bị giảm hoặc mất hoàn toàn thị lực của
                1 hoặc cả 2 bên mắt, cảm thấy mờ mắt, nhìn nhòe,…
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default D4_1_DauHieu;
