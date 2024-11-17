import "./style.css";
import ToaThuocPhucTap from "../Images/toathuocphuctap.webp";
import ChiDinh from "../Images/chidinhdieutrikhongrorang.webp";
import QuaTai from "../Images/quataichochidinh.webp";
import QuaTaiBN from "../Images/quataibn.webp";
import BNKhoTinh from "../Images/bnkhotinh.webp";
import ThayDoiNV from "../Images/thaydoinv.webp";
import ApLucCongViec from "../Images/aplucongviec.webp";
import CapCuuKhanCap from "../Images/capcuukhancap.webp";
import PhauThuat from "../Images/phauthuat.webp";
import LayNhiemCheo from "../Images/laynhiemcheo.webp";
import TeNga from "../Images/tenga.webp";
import ImLang from "../Images/imlang.webp";
import DunDay from "../Images/dundayviec.webp";

const B13_0_NguyCo = ({}) => {
  return (
    <div id="section2-13" className="section">
      <div className="container">
        <h2>13. MỘT SỐ NGUY CƠ GÂY MẤT AN TOÀN TRONG BỆNH VIỆN</h2>
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
              <span style={{ fontWeight: "bold" }}>Toa thuốc quá phức tạp</span>
            </div>
            <img
              src={ToaThuocPhucTap}
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
                Chỉ định điều trị không rỏ ràng
              </span>
            </div>
            <img
              src={ChiDinh}
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
                Quá tải cho chỉ định điều trị
              </span>
            </div>
            <img
              src={QuaTai}
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
              <span style={{ fontWeight: "bold" }}>Quá tải người bệnh</span>
            </div>
            <img
              src={QuaTaiBN}
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
                Bệnh nhân nhạy cảm khó tính
              </span>
            </div>
            <img
              src={BNKhoTinh}
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
                Thay đổi nhân viên liên tục
              </span>
            </div>
            <img
              src={ThayDoiNV}
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
                Áp lực, quá tải công việc
              </span>
            </div>
            <img
              src={ApLucCongViec}
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
              <span style={{ fontWeight: "bold" }}>Cấp cứu khẩn cấp</span>
            </div>
            <img
              src={CapCuuKhanCap}
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
                Nguy cơ trong phẩu, thủ thuật
              </span>
            </div>
            <img
              src={PhauThuat}
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
              <span style={{ fontWeight: "bold" }}>Lây nhiễm chéo</span>
            </div>
            <img
              src={LayNhiemCheo}
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
              <span style={{ fontWeight: "bold" }}>Té ngã</span>
            </div>
            <img
              src={TeNga}
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
                Im lặng tập thể che giấu sự việc
              </span>
            </div>
            <img
              src={ImLang}
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
              <span style={{ fontWeight: "bold" }}>Đùn đẩy trách nhiệm</span>
            </div>
            <img
              src={DunDay}
              width={150}
              style={{ borderRadius: 10 }}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default B13_0_NguyCo;
