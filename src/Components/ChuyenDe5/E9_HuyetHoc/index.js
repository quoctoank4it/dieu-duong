import "./style.css";

const E9_HuyetHoc = ({}) => {
  return (
    <div id="section5-9" className="section">
      <div className="container">
        <h2>9. Ý NGHĨA MỘT SỐ CHỈ SỐ XÉT NGHIỆM HUYẾT HỌC</h2>
        <table>
          <thead>
            <tr>
              <th>Chỉ số</th>
              <th>Giá trị bình thường</th>
              <th>Tăng</th>
              <th>Giảm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>WBC (Bạch cầu)</td>
              <td>4-10 G/L</td>
              <td>Bệnh máu ác tính, viêm nhiễm</td>
              <td>Nhiễm trùng nặng, thiếu máu do giảm sinh tủy, nhiễm virus</td>
            </tr>
            <tr>
              <td>RBC (Hồng cầu)</td>
              <td>
                Nam: 4,2-5,4 G/L
                <br />
                Nữ: 4,0-4,9
              </td>
              <td>Hiện tượng cô đặc máu hoặc do bệnh lý đa hồng cầu</td>
              <td>Trong các tình trạng thiếu máu</td>
            </tr>
            <tr>
              <td>HGB (Huyết sắc tố)</td>
              <td>
                Nam: 130-160 g/l
                <br />
                Nữ: 120-142 g/l
              </td>
              <td>Mất nước, cô đặc máu</td>
              <td>Thiếu máu, chảy máu</td>
            </tr>
            <tr>
              <td>HCT</td>
              <td>
                Nam: 0,40-0,47 l/l
                <br />
                Nữ: 0,37-0,42 l/l
              </td>
              <td>Mất nước, cô đặc máu hoặc tăng hồng cầu</td>
              <td>Mất máu, thiếu máu, thai nghén</td>
            </tr>
            <tr>
              <td>PLT (Tiểu cầu)</td>
              <td>150-400 G/L</td>
              <td>
                Bệnh tăng sinh tủy (tăng tiểu cầu tiên phát). Tăng tiểu cầu thứ
                phát (nhiễm trùng, viêm nhiễm, mạch máu)
              </td>
              <td>
                Xuất huyết, giảm tiểu cầu, lách to, sốt xuất huyết, xơ gan, dễ
                bị chảy máu
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default E9_HuyetHoc;
