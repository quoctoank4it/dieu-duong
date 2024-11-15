import "./style.css";
import Mach from "../Images/mach.webp";

const A1_1_Mach = ({}) => {
  return (
    <div id="section1-1-1" className="section">
      <div className="container">
        <h2>1.1. MẠCH (lần/phút)</h2>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <img src={Mach} width={150} style={{ borderRadius: 10 }} alt=""></img>
        </div>
        <table className="pulse-table">
          <thead>
            <tr>
              <th>Đối tượng</th>
              <th>Mạch chậm</th>
              <th>Bình thường</th>
              <th>Mạch nhanh</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Người lớn</td>
              <td>&lt;60</td>
              <td>60-90</td>
              <td>&gt;90</td>
            </tr>
            <tr>
              <td>Trẻ em</td>
              <td>&lt;80</td>
              <td>80-100</td>
              <td>&gt;100</td>
            </tr>
            <tr>
              <td>Sơ sinh</td>
              <td>&lt;140</td>
              <td>140-160</td>
              <td>&gt;160</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default A1_1_Mach;
