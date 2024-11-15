import "./style.css";
import Loet1 from "../Images/loet1.png";
import Loet2 from "../Images/loet2.png";
import Loet3 from "../Images/loet3.png";
import Loet4 from "../Images/loet4.png";

const A3_0_Loet = ({}) => {
  return (
    <div id="section1-3" className="section">
      <div className="container">
        <h2>3. LOÉT</h2>
        <h1>3.1 Nhận định và phân độ vết loét</h1>
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
              }}
            >
              <span style={{ fontWeight: "bold", color: "#d54101" }}>
                Cấp Độ 1
              </span>
              <span>Vùng da bị tì đè nổi lên vết rộp màu hồng</span>
            </div>
            <img
              src={Loet1}
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
              }}
            >
              <span style={{ fontWeight: "bold", color: "#d54101" }}>
                Cấp Độ 2
              </span>
              <span>
                Tổn thương không hoàn toàn chiều dày của lớp da, bao gồm bì và
                lớp đáy (loét nông, nhìn như vết trầy da hay phồng rộp lớp
                thượng)
              </span>
            </div>
            <img
              src={Loet2}
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
              }}
            >
              <span style={{ fontWeight: "bold", color: "#d54101" }}>
                Cấp Độ 3
              </span>
              <span>
                Tổn thương hoàn toàn bề dày của lớp da, tổ chức dưới da đã bị
                tổn thương mới chỉ khu trú ngoài lớp gân
              </span>
            </div>
            <img
              src={Loet3}
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
              }}
            >
              <span style={{ fontWeight: "bold", color: "#d54101" }}>
                Cấp Độ 4
              </span>
              <span>
                Hoại tử hoàn toàn lớp da, còn lan rộng tới vùng cơ, xương,
                khớp... đôi khi tạo nên nhiều ngóc ngách
              </span>
            </div>
            <img
              src={Loet4}
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
export default A3_0_Loet;
