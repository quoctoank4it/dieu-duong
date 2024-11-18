import "./style.css";
import SoCuu from "../Images/socuu.webp";

const D0_SoCuu = ({}) => {
  return (
    <div id="section4" className="section">
      <div className="container">
        <h2>
          CHUYÊN ĐỀ IV: SƠ CẤP CỨU BAN ĐẦU MỘT SỐ TAI NẠN VÀ THƯƠNG TÍCH THƯỜNG
          GẶP
        </h2>
        <h1>SƠ CẤP CỨU BAN ĐẦU</h1>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <img
            src={SoCuu}
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
          <div className="card" style={{ width: "100%", padding: 10 }}>
            <ul>
              <li
                style={{ listStyle: "none", color: "blue", fontWeight: "bold" }}
              >
                Khái niệm:
              </li>
              <li style={{ listStyle: "none" }}>
                Sơ cấp cứu là những trợ giúp hay chữa trị ngay lúc ban đầu cho
                nạn nhân bị bất cứ chấn thương, sự cố hay bị một cơn bệnh đột
                ngột nào đó trước khi có xe cấp cứu, Bác sĩ, hoặc những người có
                chuyên môn đến chữa trị nhằm hạn chế tai biến nguy hiểm đến tính
                mạng.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default D0_SoCuu;
