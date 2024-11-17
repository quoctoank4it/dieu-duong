import "./style.css";

const C6_4_PhongNgua = ({}) => {
  return (
    <div id="section3-6-4" className="section">
      <div className="container">
        <h2>6.4. PHÒNG NGỪA NGUY CƠ TAI BIẾN DO TRUYỀN DỊCH</h2>
        <table>
          <tr>
            <th>Nguy cơ - tai biến</th>
            <th>Phòng ngừa</th>
          </tr>
          <tr>
            <td>Nhầm lẫn dịch truyền</td>
            <td>
              <ul>
                <li>Thực hiện 5 đúng</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Quá tải hoặc thiếu dịch do tốc độ dịch truyền không đúng</td>
            <td>
              <ul>
                <li>Điều chỉnh tốc độ theo đúng y lệnh</li>
                <li>
                  Thường xuyên theo dõi tốc độ và số lượng dịch truyền để điều
                  chỉnh kịp thời
                </li>
                <li>
                  Dẫn dõi người bệnh và người nhà không được tự ý điều chỉnh
                  dịch truyền
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Thuyền tác mạch do khí</td>
            <td>
              <ul>
                <li>
                  Đuổi hết khí trong dây truyền dịch trước khi gắn vào người
                  bệnh
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Hoại tử da</td>
            <td>
              <ul>
                <li>
                  Kiểm tra kim luôn nằm trong lòng mạch trước khi cố định kim
                  truyền
                </li>
                <li>
                  Thay kim, tiêm nơi khác nếu phát hiện bơm thuốc nâng tay,
                  phụ,đỏ độc nơi tiêm
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Nhiễm trùng</td>
            <td>
              <ul>
                <li>Đảm bảo kỹ thuật vô trùng, hạn chế tháo lắp hệ thống</li>
                <li>Thay kim khi có dấu hiệu nhiễm trùng tại chỗ</li>
                <li>Thay dây truyền dịch mới khi có máu trong hệ thống</li>
                <li>Thay dây truyền dịch mới 24 giờ</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default C6_4_PhongNgua;
