import "./style.css";
import DaXuatHuyet from "../Images/daxuathuyet.jpg";
import DaNoiMeDay from "../Images/danoimeday.jpg";
import DaXanh from "../Images/daxanh.jpg";
import DaVang from "../Images/davang.webp";

const A2_2_Da = ({}) => {
  return (
    <div id="section1-2-2" className="section">
      <div className="container">
        <h2>2.2. DA</h2>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div className="card" style={{ width: "100%" }}>
            <img
              src={DaXuatHuyet}
              width={250}
              style={{ borderRadius: 10 }}
              alt=""
            ></img>
            <ul>
              <li style={{ listStyle: "none" }}>
                Da có các nốt xuất huyết: các bệnh về máu do rối loạn đông máu
                hoặc tiểu cầu
              </li>
            </ul>
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
          <div className="card" style={{ width: "100%" }}>
            <img
              src={DaNoiMeDay}
              width={250}
              style={{ borderRadius: 10 }}
              alt=""
            ></img>
            <ul>
              <li style={{ listStyle: "none" }}>
                Da nổi mề đay và ngứa: Tình trạng dị ứng thuốc, hóa chất, thức
                ăn...
              </li>
            </ul>
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
          <div className="card" style={{ width: "100%" }}>
            <img
              src={DaXanh}
              width={250}
              style={{ borderRadius: 10 }}
              alt=""
            ></img>
            <ul>
              <li style={{ listStyle: "none" }}>
                Da xanh: thường do thiếu máu
              </li>
            </ul>
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
          <div className="card" style={{ width: "100%" }}>
            <img
              src={DaVang}
              width={250}
              style={{ borderRadius: 10 }}
              alt=""
            ></img>
            <ul>
              <li style={{ listStyle: "none" }}>
                Da, niêm mạc mắt vàng: gặp trong 1 số bệnh về gan, mật, thiếu
                máu nặng, ung thư
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default A2_2_Da;
