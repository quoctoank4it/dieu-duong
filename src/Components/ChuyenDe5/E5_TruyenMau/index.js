import "./style.css";

const E5_TruyenMau = ({}) => {
  return (
    <div id="section5-5" className="section">
      <div className="container">
        <h2>5. MỘT SỐ LƯU Ý KHI TRUYỀN MÁU</h2>
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
                ➤ Định nhóm máu tại giường: phải lấy máu trực tiếp khi làm định
                nhóm máu.
              </li>
              <li style={{ listStyle: "none" }}>
                ➤ Duy trì thêm một đường truyền, phải sử dụng bộ dây truyền máu
                có bầu lọc
              </li>
              <li style={{ listStyle: "none" }}>
                ➤ Kiểm tra mạch, nhiệt độ, huyết áp, tinh thần người bệnh tại
                thời điểm trước và trong quá trình truyền máu, đặc biệt lưu ý
                theo dõi trong 15 phút đầu để phát hiện và xử trí kịp thời tai
                biến
              </li>
              <li style={{ listStyle: "none" }}>
                ➤ Túi máu đã lĩnh phải truyền cho người bệnh trong vòng 06 giờ
                kể từ thời điểm giao nhận giữa đơn vị phát máu và đơn vị điều
                trị (nếu chưa tiến hành truyền máu, các túi máu hoặc chế phẩm
                máu phải được bảo quản (2-6 độ c)).
              </li>
              <li style={{ listStyle: "none" }}>
                ➤ Lưu ý: khối tiểu cầu phải truyền ngay.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default E5_TruyenMau;
