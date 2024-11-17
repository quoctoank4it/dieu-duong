import "./style.css";

const C6_3_TaiBien = ({}) => {
  return (
    <div id="section3-6-3" className="section">
      <div className="container">
        <h2>6.3. TAI BIẾN VÀ XỬ TRÍ KHI TRUYỀN DỊCH</h2>
        <table>
          <tr>
            <th>Dấu hiệu bất thường</th>
            <th>Xử trí</th>
          </tr>
          <tr>
            <td>Dịch chảy tốc độ không theo y lệnh</td>
            <td>
              <ul>
                <li>Kiểm tra đường truyền có thông?</li>
                <li>Đưa chai dịch truyền lên cao</li>
                <li>Báo BS, thiết lập đường truyền khác</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Phù nơi tiêm</td>
            <td>
              <ul>
                <li>Ngừng truyền dịch, rút bỏ kim</li>
                <li>Thiết lập đường truyền mới</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Cần bơm thuốc khi đang truyền dịch</td>
            <td>
              <ul>
                <li>
                  Dùng NaCl 0,9% bơm đuổi dịch truyền trước và sau khi bơm thuốc
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Phù phổi cấp: đột ngột ho, khó thở, tím tái, khạc đờm hồng</td>
            <td>
              <ul>
                <li>Ngừng truyền</li>
                <li>Lấy dấu hiệu sinh tồn</li>
                <li>Báo bác sĩ, thực hiện y lệnh</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              Nhiễm trùng nơi tiêm hoặc dọc đường đi tĩnh mạch: sưng, nóng, đỏ,
              đau
            </td>
            <td>
              <ul>
                <li>Rút bỏ kim</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default C6_3_TaiBien;
