import "./style.css";
import HuyetTuong from "../Images/HuyetTuong.jpg";

const E3_SoDoTruyenHT = ({}) => {
  return (
    <div id="section5-3" className="section">
      <div className="container">
        <h2>2. SƠ ĐỒ TRUYỀN HUYẾT TƯƠNG</h2>
        <img
          src={HuyetTuong}
          width={"100%"}
          style={{ borderRadius: 10, marginBottom: 10 }}
          alt=""
        ></img>
        <table>
          <tr>
            <th>Nhóm máu người cho</th>
            <th>Nhóm máu người nhận</th>
          </tr>
          <tr>
            <td>O hoặc B hoặc A hoặc AB</td>
            <td>O</td>
          </tr>
          <tr>
            <td>A hoặc AB</td>
            <td>A</td>
          </tr>
          <tr>
            <td>B hoặc AB</td>
            <td>B</td>
          </tr>
          <tr>
            <td>AB</td>
            <td>AB</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default E3_SoDoTruyenHT;
