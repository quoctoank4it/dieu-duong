import "./style.css";

const A5_0_ThangDiemGlasgrow = ({}) => {
  return (
    <div id="section1-5" className="section">
      <div className="container">
        <h2>5. THANG ĐIỂM Glasgrow</h2>
        <table class="assessment-table">
          <tr>
            <th></th>
            <th>Mức độ</th>
            <th>Điểm</th>
          </tr>
          <tr>
            <td rowspan="4" class="category">
              1. Mắt (E: eyes)
            </td>
            <td>Mở tự nhiên</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Gọi mở</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Cấu mở</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Không mở</td>
            <td>1</td>
          </tr>
          <tr>
            <td rowspan="5" class="category">
              2. Trả lời (V: verbal)
            </td>
            <td>Nhanh, chính xác</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Chậm, không chính xác</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Trả lời lộn xộn</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Không thành tiếng (lộn xộn, rên)</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Nằm im không trả lời</td>
            <td>1</td>
          </tr>
          <tr>
            <td rowspan="6" class="category">
              3. Vận động (M: motor)
            </td>
            <td>Làm theo lệnh</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Bấu đau: gạt tay đúng chỗ</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Bấu đau: gạt tay không đúng chỗ</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Gập cứng 2 tay</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Duỗi cứng tứ chi</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Nằm im không đáp ứng</td>
            <td>1</td>
          </tr>
        </table>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <div className="card" style={{ width: "100%" }}>
            <h2>Cách tính điểm:</h2>
            <ul>
              <li style={{ listStyle: "none" }}>
                (Cộng E + V + M: điểm thấp nhất 3, điểm cao nhất 15)
              </li>
              <li>Glasgrow 14-15: Không hôn mê</li>
              <li>
                Glasgrow 12-13:{" "}
                <span style={{ color: "green" }}>Hôn mê độ I</span>
              </li>
              <li>
                Glasgrow 9-11:{" "}
                <span style={{ color: "blue" }}>Hôn mê độ II</span>
              </li>
              <li>
                Glasgrow 5-8:{" "}
                <span style={{ color: "purple" }}>Hôn mê độ III</span>
              </li>
              <li>
                Glasgrow 3-4: <span style={{ color: "red" }}>Hôn mê độ IV</span>
              </li>
              <li style={{ listStyle: "none" }}>
                Chấn thương sọ não nặng là những trường hợp có điểm điểm số
                Glasgrow từ 3-8.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default A5_0_ThangDiemGlasgrow;
