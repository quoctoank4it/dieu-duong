import "./style.css";

const B7_0_QuyChe = ({}) => {
  return (
    <div id="section2-7" className="section">
      <div className="container">
        <h2>7. QUY CHẾ LƯU TRỮ HSBA (Hồ sơ bệnh án)</h2>
        <p
          style={{
            marginTop: -10,
            fontSize: 14,
          }}
        >
          Khoản 3 Điều 59 của Luật Khám bệnh, chữa bệnh.
          <br />
          <span style={{ fontStyle: "italic" }}>
            Ban hành kèm theo Thông tư số 53/2017/TT-BYT ngày 29 tháng 12 năm
            2017 của Bộ Y tế
          </span>
        </p>
        <table style={{ marginTop: -10 }}>
          <thead>
            <tr>
              <th>TT</th>
              <th>Tên hồ sơ, tài liệu</th>
              <th>Thời hạn bảo quản</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Người bệnh tử vong</td>
              <td>30 năm</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Người bệnh tâm thần</td>
              <td>20 năm</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Tai nạn lao động, tai nạn sinh hoạt</td>
              <td>15 năm</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Bệnh án nội trú, ngoại trú thông thường</td>
              <td>10 năm</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Phiếu khảo sát hài lòng NB, NVYT</td>
              <td>5 năm</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Hồ sơ kết luận và kết quả giám định pháp y, tâm thần</td>
              <td>Vĩnh viễn</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default B7_0_QuyChe;
