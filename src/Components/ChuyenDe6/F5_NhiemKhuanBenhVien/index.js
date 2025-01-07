import "./style.css";

const F5_NhiemKhuanBenhVien = ({}) => {
  return (
    <div id="section6-5" className="section">
      <div className="container">
        <h2>5. NHIỄM KHUẨN BỆNH VIỆN</h2>
        <span style={{ fontWeight: "bold" }}>(Theo CDC, Mỹ(2018))</span>
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
              <li style={{ listStyle: "none" }}>
                ➤ Nhiễm khuẩn được coi là nhiễm khuẩn bệnh viện khi ngày biến cố
                xuất hiện sau 2 (ngày tính từ ngày vào điều trị tại cơ sở điều
                trị nội trú, ngày vào điều trị là ngày 1).
              </li>
              <li style={{ listStyle: "none" }}>
                (Ngày biến cố là ngày xuất hiện dấu hiệu/triệu chứng đầu tiên
                đáp ứng một trong số các tiêu chuẩn chẩn đoán nhiễm khuẩn)
              </li>

              <li style={{ listStyle: "none" }}>
                ➤ Định nghĩa này không áp dụng với nhiễm khuẩn vết mổ, biến cố
                liên quan tới thở máy hoặc các biến cố được nhận biết dựa trên
                kết quả xét nghiệm.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default F5_NhiemKhuanBenhVien;
