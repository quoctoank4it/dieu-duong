import NhietDo from "../Images/nhietdo.webp";
import HuyetAp from "../Images/huyetap.webp";
import NhipTho from "../Images/nhiptho.webp";
import Mach from "../Images/mach.webp";

const A1_0_DauHieuSinhTon = ({}) => {
  return (
    <div id="section1" className="section">
      <span className="lever1">
        CHUYÊN ĐỀ 1: NHẬN ĐỊNH VÀ ĐÁNH GIÁ NGƯỜI BỆNH
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginTop: 10,
        }}
      >
        <img src={Mach} width={150} style={{ borderRadius: 10 }} alt=""></img>
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
          padding: 10,
        }}
      >
        <span
          className="lever2"
          style={{
            width: 200,
            border: "2px solid #3498db",
            borderRadius: 10,
            textAlign: "justify",
            padding: 10,
          }}
        >
          <span style={{ color: "#d54101", fontWeight: "bold" }}>
            1. Dấu hiệu sinh tồn:
          </span>{" "}
          Là một nhóm gồm 4 dấu hiệu quan trọng của cơ thể (mạch, nhiệt độ,
          huyết áp và nhịp thở) cho biêt trạng thái sống còn của cơ thể
        </span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <img
          src={HuyetAp}
          width={150}
          style={{ borderRadius: 10 }}
          alt=""
        ></img>
        <img
          src={NhipTho}
          width={150}
          style={{ borderRadius: 10 }}
          alt=""
        ></img>
      </div>
    </div>
  );
};
export default A1_0_DauHieuSinhTon;
