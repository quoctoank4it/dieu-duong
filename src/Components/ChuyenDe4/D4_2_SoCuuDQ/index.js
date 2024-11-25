import "./style.css";
import GoiCapCuu from "../Images/GoiCapCuu.jpg";
import DatNamYen from "../Images/DatNamYen.jpg";
import DatNamNghien from "../Images/DatNamNghien.jpg";
import GiuHamRang from "../Images/GiuHamRang.jpg";
import HoHap from "../Images/HoHap.jpg";
import CaoGio from "../Images/CaoGio.jpg";
import XoaBop from "../Images/XoaBop.jpg";
import LuuY from "../Images/luuy.png";
const D4_2_SoCuuDQ = ({}) => {
  return (
    <div id="section4-4-2" className="section">
      <div className="container">
        <h2>4.2 SƠ CẤP CỨU KHI BỊ ĐỘT QUỴ</h2>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div className="card" style={{ width: "100%", display: "flex" }}>
            <div
              style={{
                display: "grid",
                height: "100%",
                placeContent: "center",
                width: "70%",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Gọi cấp cứu</span>
            </div>
            <img
              src={GoiCapCuu}
              width={150}
              style={{ borderRadius: 10 }}
              alt=""
            ></img>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <div className="card" style={{ width: "100%", display: "flex" }}>
            <div
              style={{
                display: "grid",
                height: "100%",
                placeContent: "center",
                width: "70%",
              }}
            >
              <span style={{ fontWeight: "bold" }}>
                Để bệnh nhân nằm yên, đầu nâng cao 30 độ
              </span>
            </div>
            <img
              src={DatNamYen}
              width={150}
              style={{ borderRadius: 10 }}
              alt=""
            ></img>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <div className="card" style={{ width: "100%", display: "flex" }}>
            <div
              style={{
                display: "grid",
                height: "100%",
                placeContent: "center",
                width: "70%",
              }}
            >
              <span style={{ fontWeight: "bold" }}>
                Nếu ói mửa, để đầu nghiên sang một bên
              </span>
            </div>
            <img
              src={DatNamNghien}
              width={150}
              style={{ borderRadius: 10 }}
              alt=""
            ></img>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <div className="card" style={{ width: "100%", display: "flex" }}>
            <div
              style={{
                display: "grid",
                height: "100%",
                placeContent: "center",
                width: "70%",
              }}
            >
              <span style={{ fontWeight: "bold" }}>
                Dùng khăn vải đặt giữa hàm răng để phòng cắn vào lưỡi
              </span>
            </div>
            <img
              src={GiuHamRang}
              width={150}
              style={{ borderRadius: 10 }}
              alt=""
            ></img>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <div className="card" style={{ width: "100%", display: "flex" }}>
            <div
              style={{
                display: "grid",
                height: "100%",
                placeContent: "center",
                width: "70%",
              }}
            >
              <span style={{ fontWeight: "bold" }}>
                Nếu BN hôn mê, ngừng thở thì hô hấp nhân tạo
              </span>
            </div>
            <img
              src={HoHap}
              width={150}
              style={{ borderRadius: 10 }}
              alt=""
            ></img>
          </div>
        </div>
        <div style={{ display: "grid", justifyContent: "center" }}>
          <img
            src={LuuY}
            width={100}
            style={{ borderRadius: 10, marginTop: 10, marginBottom: 10 }}
            alt=""
          ></img>
          <span style={{ color: "red", fontWeight: "bold" }}>Chú Ý</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{ display: "grid", justifyContent: "center", width: "45%" }}
          >
            <div style={{ display: "grid", justifyContent: "center" }}>
              <img
                src={CaoGio}
                width={100}
                style={{ borderRadius: 10, marginTop: 10, marginBottom: 10 }}
                alt=""
              ></img>
            </div>
            <span>Cạo Gió</span>
          </div>
          <div
            style={{ display: "grid", justifyContent: "center", width: "45%" }}
          >
            <div style={{ display: "grid", justifyContent: "center" }}>
              <img
                src={XoaBop}
                width={100}
                style={{ borderRadius: 10, marginTop: 10, marginBottom: 10 }}
                alt=""
              ></img>
            </div>
            <span>Xoa bóp</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default D4_2_SoCuuDQ;
