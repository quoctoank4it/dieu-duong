import "./style.css";
import KhaiNiemPhanCap from "../Images/khainiemphancap.webp";

const B1_0_PhanCapChamSoc = ({}) => {
  return (
    <div id="section2-1" className="section">
      <div className="container">
        <h2>
          CHUYÊN ĐỀ 2: MỘT SỐ QUY ĐỊNH VÀ KHÁI NIỂM CỦA ĐIỀU DƯỠNG - HỘ SINH -
          KỸ THUẬT VIÊN
        </h2>
        <h1>1. Khái niệm phân cấp chăm sóc</h1>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <img
            src={KhaiNiemPhanCap}
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
            <ul>
              <li style={{ listStyle: "none", fontWeight: "bold" }}>
                TT07/2011-BYT ngày 26/11/2011 của BYT hướng dẫn công tác CSNB
                trong bệnh viện
              </li>
              <li>
                <span style={{ color: "#d54101" }}>Chăm sóc cấp 1:</span> NB
                nặng, nguy kịch, hôn mê, suy hô hấp, suy tuần hoàn, phải nằm bất
                động và một số yêu cầu đặc biệt của chuyên khoa
              </li>
              <li>
                <span style={{ color: "#d54101" }}>Chăm sóc cấp 2:</span> NB
                không nguy kịch, vận động hạn chế, truyền dịch, truyền máu; phải
                theo dõi chức năng hô hấp, tuần hoàn và phục hồi chức năng
              </li>
              <li>
                <span style={{ color: "#d54101" }}>Chăm sóc cấp 3:</span> NB
                nhẹ, tự vận động, tự phục vụ.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default B1_0_PhanCapChamSoc;
