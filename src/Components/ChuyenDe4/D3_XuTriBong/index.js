import "./style.css";
import XuTriBong from "../Images/xutribong.jpg";
import LuuY from "../Images/luuy.png";
import KDa from "../Images/kda.png";
import TranhLamVo from "../Images/tranhlamvo.png";
import kboikem from "../Images/kboikem.png";
import kdui from "../Images/kdui.png";

const D3_XuTriBong = ({}) => {
  return (
    <div id="section4-3" className="section">
      <div className="container">
        <h2>2. XỬ TRÍ KHI BỊ BỎNG</h2>
        <img
          src={XuTriBong}
          width={"100%"}
          style={{ borderRadius: 10, marginTop: 10, marginBottom: 10 }}
          alt=""
        ></img>
        <div style={{ display: "grid", justifyContent: "center" }}>
          <img
            src={LuuY}
            width={100}
            style={{ borderRadius: 10, marginTop: 10, marginBottom: 10 }}
            alt=""
          ></img>
          <span>Lưu ý</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{ display: "grid", justifyContent: "center", width: "45%" }}
          >
            <div style={{ display: "grid", justifyContent: "center" }}>
              <img
                src={KDa}
                width={100}
                style={{ borderRadius: 10, marginTop: 10, marginBottom: 10 }}
                alt=""
              ></img>
            </div>
            <span>Không dùng đá hoặc nước quá lạnh để chườm</span>
          </div>
          <div
            style={{ display: "grid", justifyContent: "center", width: "45%" }}
          >
            <div style={{ display: "grid", justifyContent: "center" }}>
              <img
                src={TranhLamVo}
                width={100}
                style={{ borderRadius: 10, marginTop: 10, marginBottom: 10 }}
                alt=""
              ></img>
            </div>
            <span>Tránh làm vỡ nốt phỏng</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{ display: "grid", justifyContent: "center", width: "45%" }}
          >
            <div style={{ display: "grid", justifyContent: "center" }}>
              <img
                src={kboikem}
                width={100}
                style={{ borderRadius: 10, marginTop: 10, marginBottom: 10 }}
                alt=""
              ></img>
            </div>
            <span>Không bôi kem hoặc bất kỳ chất gì lên vết thường</span>
          </div>
          <div
            style={{ display: "grid", justifyContent: "center", width: "45%" }}
          >
            <div style={{ display: "grid", justifyContent: "center" }}>
              <img
                src={kdui}
                width={100}
                style={{ borderRadius: 10, marginTop: 10, marginBottom: 10 }}
                alt=""
              ></img>
            </div>
            <span>Không dụi, cố gắng lấy dị vật ra</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default D3_XuTriBong;
