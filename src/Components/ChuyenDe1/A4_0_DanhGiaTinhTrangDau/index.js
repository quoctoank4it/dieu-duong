import "./style.css";
import DanhGiaTinhTrangDau from "../Images/danhgiatinhtrangdau.png";
import CongCuDanhGiaMucDoDau from "../Images/congcudanhgiamucdodau.png";

const A4_0_DanhGiaTinhTrangDau = ({}) => {
  return (
    <div id="section1-4" className="section">
      <div className="container">
        <h2>4. CÁC VỊ TRÍ DỄ BỊ LOÉT</h2>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <img
            src={DanhGiaTinhTrangDau}
            width={"100%"}
            style={{ borderRadius: 10, border: "1px solid red" }}
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
          <img
            src={CongCuDanhGiaMucDoDau}
            width={"100%"}
            style={{ borderRadius: 10, border: "1px solid red" }}
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
              <li>Sử dụng thang điểm VAS</li>
              <li>
                NB nằm nghỉ nơi yên tĩnh, được giải thích cách đánh giá đau bằng
                thang điểm VAS
              </li>
              <li>
                NVYT yêu cầu NB tập trung và họ tự kéo thước để tự đánh giá mức
                độ đau của mình
              </li>
              <li>NVYT đọc mức độ đau của BN</li>
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
            <ul>
              <li>Chú ý trẻ nhỏ</li>
              <li>Nằm nơi yên tĩnh</li>
              <li>
                Bố mẹ bệnh nhi được giải thích theo thang điểm Wong-Braker
              </li>
              <li>NVYT quan sát khuôn mặt bệnh nhi</li>
              <li>NVYT đọc mức độ đau của bệnh nhi</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default A4_0_DanhGiaTinhTrangDau;
