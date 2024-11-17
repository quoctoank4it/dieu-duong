import "./style.css";
import ViTriTiem from "../Images/vitritiem.png";
import TiemCoDuoi from "../Images/tiemcoduoi.png";
import ViTriTiemMong from "../Images/vitritiemmong.png";
import TiemInsulin from "../Images/vttieminsulin.png";
import CachVeoDaTiemInsulin from "../Images/cachveodatieminsulin.png";

const C3_0_TaiBien = ({}) => {
  return (
    <div id="section3-3" className="section">
      <div className="container">
        <h2>3. TAI BIẾN XỬ TRÍ VÀ CÁCH ĐỀ PHÒNG KHI TIÊM</h2>
        <table>
          <tr class="c3header">
            <th>Tai biến</th>
            <th>Phát hiện</th>
            <th>Xử trí</th>
            <th>Cách đề phòng</th>
          </tr>
          <tr>
            <td>Phản vệ</td>
            <td>Hoa mắt, chóng mặt, nôn, mẩn ngứa, mạch nhanh, huyết áp tụt</td>
            <td>
              - Dừng ngay đường tiếp xúc với dị nguyên
              <br />- Xử trí theo phác đồ cấp cứu phản vệ
            </td>
            <td>
              - Hỏi kỹ tiền sử dị ứng
              <br />
              - Chuẩn bị hộp chống sốc khi tiêm
              <br />- Theo dõi sát NB trong và sau tiêm
            </td>
          </tr>
          <tr>
            <td>Tắc kim</td>
            <td>Không tiêm thuốc vào được</td>
            <td>
              - Rút kim
              <br />- Không cố bơm thuốc vào
            </td>
            <td>Dùng kim tiêm đường kính lớn khi tiêm thuốc dạng dầu, sữa</td>
          </tr>
          <tr>
            <td>Tắc mạch do để khí lọt vào trong lòng mạch</td>
            <td>
              - NB khó thở
              <br />- Đau đầu
            </td>
            <td></td>
            <td>
              - Đảm bảo đuổi hết khí trong bơm tiêm
              <br />- Chú ý khi thay các đường truyền
            </td>
          </tr>
          <tr>
            <td>Đâm vào dây thần kinh hông to</td>
            <td>
              - NB khó hoặc không cử động được chân
              <br />- Buốt dọc chân bên tiêm
            </td>
            <td>
              - Dừng ngay tiêm thuốc
              <br />- Kiểm tra lại thuốc tiêm và tình trạng NB
            </td>
            <td>Hướng dẫn NB duỗi chân trong và sau khi đâm kim</td>
          </tr>
          <tr>
            <td>Hoại tử vị trí tiêm</td>
            <td>
              - Vùng tiêm sưng tấy
              <br />- Loét vùng tiêm
            </td>
            <td>
              - Vệ sinh sạch vùng da
              <br />
              - Không bôi, đắp lên da bất kỳ thuốc nào
              <br />- Kiểm tra vị trí tiêm
            </td>
            <td>Kiểm tra lại đường dùng thuốc trước khi sử dụng</td>
          </tr>
          <tr>
            <td>Nhiễm khuẩn</td>
            <td>
              - Vị trí tiêm bị sưng tấy
              <br />
              - NB có sốt
              <br />- Tình trạng bệnh nặng hơn
            </td>
            <td>- Làm sạch da vùng sưng tấy</td>
            <td>
              - Đảm bảo vô khuẩn dụng cụ và thuốc
              <br />
              - Đảm bảo vệ sinh phòng bệnh, giường bệnh
              <br />- Đảm bảo vệ sinh tay
            </td>
          </tr>
          <tr>
            <td>Đâm nhầm vào mạch máu (tiêm bắp)</td>
            <td>Thấy có máu trào ra ở đốc kim</td>
            <td>Rút ngay kim ra và tiêm vị trí khác</td>
            <td>
              - Xác định đúng vị trí tiêm bắp
              <br />- Rút thử nòng kim xem có máu không
            </td>
          </tr>
          <tr>
            <td>Choáng, ngất</td>
            <td>NB kêu sợ và lo lắng khi tiêm thuốc, da xanh tái</td>
            <td>
              - Dừng ngay tiêm, cần loại trừ với sốc phản vệ
              <br />- Đặt NB nằm tư thế an toàn
            </td>
            <td>
              - Động viên và giải thích NB phối hợp
              <br />- Không để NB nhìn trực tiếp vào máu
            </td>
          </tr>
          <tr>
            <td>Phồng nơi tiêm</td>
            <td>
              - NB kêu buốt khi tiêm thuốc
              <br />- Nơi tiêm phồng lên
            </td>
            <td>
              - Kiểm tra xem kim có nằm trong lòng mạch không
              <br />- Rút ra lấy lại vị trí khác
            </td>
            <td>
              - Rút nòng bơm tiêm xem có máu không
              <br />- Quan sát và hỏi cảm giác của NB khi tiêm
            </td>
          </tr>
          <tr>
            <td>Lây truyền qua đường máu</td>
            <td>Phát hiện xác định bằng xét nghiệm máu</td>
            <td>Báo lãnh đạo khoa phối hợp xử lý</td>
            <td>
              - Đảm bảo công tác vô khuẩn
              <br />
              - Tuân thủ sử dụng dụng cụ riêng
              <br />- Trước khi truyền máu và chế phẩm máu phải giải thích cho
              NB
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default C3_0_TaiBien;
