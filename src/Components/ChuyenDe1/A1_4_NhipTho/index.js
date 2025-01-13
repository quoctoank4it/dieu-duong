import "./style.css";
import NhipTho from "../Images/nhiptho.webp";

const A1_4_NhipTho = ({}) => {
  return (
    <div id="section1-1-4" className="section">
      <div className="container" style={{ overflowX: "auto" }}>
        <h2>1.4. NHỊP THỞ</h2>
        <table className="pulse-table">
          <thead>
            <tr>
              <th>Đối tượng</th>
              <th>Thở chậm</th>
              <th>Bình thường</th>
              <th>Thở nhanh</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Người lớn</td>
              <td>&lt;10</td>
              <td>12-20</td>
              <td>&gt;25</td>
            </tr>
            <tr>
              <td>Trẻ em</td>
              <td>&lt;15</td>
              <td>20-30</td>
              <td>&gt;35</td>
            </tr>
            <tr>
              <td>Trẻ &lt;1 tuổi</td>
              <td>&lt;25</td>
              <td>30-40</td>
              <td>&gt;55</td>
            </tr>
            <tr>
              <td>Sơ sinh</td>
              <td>&lt;40</td>
              <td>40-60</td>
              <td>&gt;60</td>
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
            src={NhipTho}
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
            marginTop: 10,
          }}
        >
          <div className="card" style={{ width: "100%" }}>
            <h2>Chú ý:</h2>
            <ul>
              <li>Trước khi đếm nhịp thở người bệnh nằm nghỉ 15 phút.</li>
              <li>
                Không làm thủ thuật gì khi theo dõi nhịp thở. Không đếm nhịp thở
                khi người bệnh mới uống thuốc đặc biết là thuốc kích thích hô
                hấp.
              </li>
              <li>
                Theo dõi nhịp thở tối thiểu ngày 2 lần, nếu nhịp thở bất thường
                phải báo cáo với BS.
              </li>
              <li>
                Khi theo dõi nhịp thở không để cho NB biết mình đang được theo
                dõi nhịp thở.
              </li>
              <li>Theo dõi nhịp thở trong 1 phút.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default A1_4_NhipTho;
