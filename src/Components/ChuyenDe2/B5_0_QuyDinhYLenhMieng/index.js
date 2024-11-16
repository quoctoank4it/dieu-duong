import "./style.css";
import QuyDinhYLenh from "../Images/quydinhylenh.png";

const B5_0_QuyDinhYLenhMieng = ({}) => {
  return (
    <div id="section2-5" className="section">
      <div className="container">
        <h2>5. QUY ĐỊNH Y LỆNH MIỆNG</h2>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <img
            src={QuyDinhYLenh}
            height={500}
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
              <li style={{ listStyle: "none" }}>
                <span style={{ color: "#d54101" }}>Chú ý:</span> ĐD nếu không
                nghe rõ phải hỏi lại BS. Sau khi thực hiện y lệnh miệng NB qua
                giai đoạn cấp cứu không quá 30 phút. BS ghi lại vào HSBA, ĐD ghi
                lại vào phiếu chăm sóc.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default B5_0_QuyDinhYLenhMieng;
