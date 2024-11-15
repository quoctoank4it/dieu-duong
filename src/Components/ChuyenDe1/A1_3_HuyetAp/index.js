import "./style.css";
import HuyetAp from "../Images/huyetap.webp";
import ViTriDoHuyetApp from "../Images/vitridohuyetap.jpg";

const A1_3_HuyetAp = ({}) => {
  return (
    <div id="section1-1-3" className="section">
      <div className="container">
        <h2>1.3. HUYẾT ÁP (mmHg)</h2>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <img
            src={HuyetAp}
            width={150}
            style={{ borderRadius: 10 }}
            alt=""
          ></img>
        </div>
        <table className="blood-pressure-table">
          <tr>
            <th>Khái niệm</th>
            <th>Huyết áp tâm thu (mmHg)</th>
            <th></th>
            <th>Huyết áp tâm trương (mmHg)</th>
          </tr>
          <tr>
            <td>Huyết áp tối ưu</td>
            <td>&lt; 180</td>
            <td>và</td>
            <td>&lt; 120</td>
          </tr>
          <tr>
            <td>Huyết áp bình thường</td>
            <td>&lt; 130</td>
            <td>và</td>
            <td>&lt; 85</td>
          </tr>
          <tr>
            <td>Bình thường-cao</td>
            <td>130-139</td>
            <td>và/hoặc</td>
            <td>85-89</td>
          </tr>
          <tr className="highlight">
            <td colspan="4">Tăng huyết áp</td>
          </tr>
          <tr>
            <td>Giai đoạn 1</td>
            <td>140-159</td>
            <td>và/hoặc</td>
            <td>90-99</td>
          </tr>
          <tr>
            <td>Giai đoạn 2</td>
            <td>160-179</td>
            <td>và/hoặc</td>
            <td>100-109</td>
          </tr>
          <tr>
            <td>Giai đoạn 3</td>
            <td>&gt; 180</td>
            <td>và/hoặc</td>
            <td>&gt; 110</td>
          </tr>
        </table>
        <p className="note">
          Phân loại Tăng huyết áp theo WHO-ISH và khuyến cáo của Hội Tim Mạch
          Việt Nam
        </p>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <img
            src={ViTriDoHuyetApp}
            width={"100%"}
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
            <h2>Công thức tính huyết áp</h2>
            <ul>
              <li style={{ listStyle: "none" }}>
                Huyết áp tôi đa = 80+2n (n là số tuổi)
              </li>
              <li style={{ listStyle: "none" }}>
                Huyết áp tối thiểu = HA tối đa/2 + 10(20)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default A1_3_HuyetAp;
