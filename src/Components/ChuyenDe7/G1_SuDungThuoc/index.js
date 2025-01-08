import "./style.css";
import CheckList from "../Images/CheckList.jpg";
import TrongKhiDungThuoc from "../Images/TrongKhiDungThuoc.jpg";
import SauKhiDungThuoc from "../Images/SauKhiDungThuoc.webp";

const G1_SuDungThuoc = ({}) => {
  return (
    <div id="section7" className="section">
      <div className="container">
        <h2>CHUYÊN ĐỀ VII: SỬ DỤNG THUỐC</h2>
        <h1>1. QUY ĐỊNH SỬ DỤNG THUỐC CỦA ĐIỀU DƯỠNG</h1>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div className="card" style={{ width: "100%" }}>
            <span
              style={{
                fontWeight: "bold",
                color: "#d54101",
              }}
            >
              Trước khi NB dùng thuốc
            </span>
            <img
              src={CheckList}
              width={250}
              style={{ borderRadius: 10, marginTop: 20 }}
              alt=""
            ></img>
            <ul>
              <li style={{ listStyle: "none" }}>➤ Công khai thuốc</li>
              <li style={{ listStyle: "none" }}>
                ➤ Chuẩn bị phương tiện dùng thuốc
              </li>
              <li style={{ listStyle: "none" }}>
                ➤ Kiểm tra y lệnh, số lượng, hạn dùng, chất lượng...
              </li>
              <li style={{ listStyle: "none" }}>
                ➤ Hướng dẫn giải thích cho NB
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <div className="card" style={{ width: "100%" }}>
            <span
              style={{
                fontWeight: "bold",
                color: "#d54101",
              }}
            >
              Trong khi NB dùng thuốc
            </span>
            <img
              src={TrongKhiDungThuoc}
              width={250}
              style={{ borderRadius: 10, marginTop: 20 }}
              alt=""
            ></img>
            <ul>
              <li style={{ listStyle: "none" }}>➤ Đảm bảo chống nhiễm khuẩn</li>
              <li style={{ listStyle: "none" }}>➤ Đảm bảo 5 đúng</li>
              <li style={{ listStyle: "none" }}>
                ➤ Trực tiếp chứng kiến NB dùng thuốc, theo dõi NB trong khi dùng
                thuốc
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <div className="card" style={{ width: "100%" }}>
            <span
              style={{
                fontWeight: "bold",
                color: "#d54101",
              }}
            >
              Sau khi NB dùng thuốc
            </span>
            <img
              src={SauKhiDungThuoc}
              width={250}
              style={{ borderRadius: 10, marginTop: 20 }}
              alt=""
            ></img>
            <ul>
              <li style={{ listStyle: "none" }}>
                ➤ Theo dõi tác dụng không mong muốn
              </li>
              <li style={{ listStyle: "none" }}>
                ➤ Chủ động phát hiện tương tác
              </li>
              <li style={{ listStyle: "none" }}>
                ➤ Bảo quản thuốc còn lại (nếu có)
              </li>
              <li style={{ listStyle: "none" }}>
                ➤ Ghi chép diễn biến lâm sàng
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default G1_SuDungThuoc;
