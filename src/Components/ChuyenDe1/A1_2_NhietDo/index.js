import "./style.css";
import NhietDo from "../Images/nhietdo.webp";

const A1_2_NhietDo = ({}) => {
  return (
    <div id="section1-1-2" className="section">
      <div class="container">
        <h2>1.2. NHIỆT ĐỘ: ĐỌC VÀ PHÂN TÍCH KẾT QUẢ</h2>
        <table class="pulse-table">
          <thead>
            <tr>
              <th>Phân độ</th>
              <th>Nhiệt độ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bình thường</td>
              <td>36°C - 37°C</td>
            </tr>
            <tr>
              <td>Sốt nhẹ</td>
              <td>37°C1 - 38°C</td>
            </tr>
            <tr>
              <td>Sốt vừa</td>
              <td>38°C1 - 39°C</td>
            </tr>
            <tr>
              <td>Sốt cao</td>
              <td>39°C1 - 40°C</td>
            </tr>
            <tr>
              <td>Sốt rất cao</td>
              <td>Trên 40°C</td>
            </tr>
            <tr>
              <td>Hạ thân nhiệt</td>
              <td>Dưới 36°C</td>
            </tr>
          </tbody>
        </table>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <img
            src={NhietDo}
            width={150}
            style={{ borderRadius: 10 }}
            alt=""
          ></img>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div class="card">
            <h2>MỤC ĐÍCH ĐO NHIỆT ĐỘ</h2>
            <ul>
              <li>Xác định tình trạng sức khoẻ dựa trên hằng số sinh lý.</li>
              <li>
                Phát hiện những thay đổi về chức năng trong cơ thể bình thường.
              </li>
              <li>Cung cấp thông tin cho điều trị.</li>
              <li>Đánh giá sự đáp ứng với điều trị.</li>
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
          <div class="card">
            <h2>CHÚ Ý ĐO NHIỆT ĐỘ</h2>
            <ul>
              <li>Trước khi đo nhiệt độ nên nghỉ ngơi 15 phút.</li>
              <li>
                Ngày theo dõi nhiệt độ hai lần: 8h-14h, trường hợp đặc biệt theo
                chỉ định BS.
              </li>
              <li>
                Vị trí đo: nách, miệng, hậu môn. (trẻ nhỏ và NB tâm thần không
                đo miệng)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default A1_2_NhietDo;
