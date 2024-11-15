import "./style.css";
import PhuChan from "../Images/phuchan.webp";
import PhuTay from "../Images/phutay.jpg";

const A2_1_Phu = ({}) => {
  return (
    <div id="section1-2" className="section">
      <div className="container">
        <h2>2. NHẬN ĐỊNH TÌNH TRẠNG PHÙ DA, NIÊM MẠC</h2>
        <h1>2.1 Phù</h1>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <img
            src={PhuTay}
            width={150}
            style={{ borderRadius: 10, marginRight: 20 }}
            alt=""
          ></img>
          <img
            src={PhuChan}
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
              <li>
                Định nghĩa: Phù là sự tích tụ quá nhiều chất lỏng dư thừa trong
                các mô
              </li>
              <li>
                Cơ chế: Phù xuất hiện do gián đoạn của quá trình lọc tại cầu
                thận và thay đổi các áp lực thẩm thấu của dịch lưu thông trong
                cơ thể
              </li>
              <li>Nguyên nhân:</li>
              <li style={{ listStyle: "none", paddingLeft: 10 }}>
                - Phù toàn thân gặp trong suy thận, suy tim, xơ gan, suy dinh
                dưỡng
              </li>
              <li style={{ listStyle: "none", paddingLeft: 10 }}>
                - Phù khu trú: gặp trong viêm tắc tĩnh mạch
              </li>
              <li>Nguyên tắc khám:</li>
              <li style={{ listStyle: "none", paddingLeft: 10 }}>
                Khám toàn thân: nhìn - sờ (ấn trên nền xương)
              </li>
              <li>Nhận định dễ khi có dấu hiệu:</li>
              <li style={{ listStyle: "none", paddingLeft: 10 }}>
                - Cảm giác ngủ dậy: nặng mặt và mi
              </li>
              <li style={{ listStyle: "none", paddingLeft: 10 }}>
                - Tăng cân, chân tay to, to vòng bụng
              </li>
              <li style={{ listStyle: "none", paddingLeft: 10 }}>
                - Ấn lõmm (phù mềm)
              </li>
              <li style={{ listStyle: "none", paddingLeft: 10 }}>
                - Ấn không lõm (phù cứng)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default A2_1_Phu;
