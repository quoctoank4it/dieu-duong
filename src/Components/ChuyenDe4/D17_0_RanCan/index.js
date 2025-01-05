import "./style.css";
import RanCan from "../Images/RanCan.webp";

const D17_0_RanCan = ({}) => {
  return (
    <div id="section4-17" className="section">
      <div className="container">
        <h2>17. RẮN CẮN</h2>
        <img
          src={RanCan}
          width={"100%"}
          style={{ borderRadius: 10, marginTop: 10, marginBottom: 10 }}
          alt=""
        ></img>
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
              <li style={{ listStyle: "none" }}>
                1. Nếu người đó bị rắn độc cắn ngay lập tức gọi xe cứu thương
              </li>
              <li style={{ listStyle: "none" }}>2. Kiểm tra vị trí vết cắn</li>
              <li style={{ listStyle: "none" }}>3. Chườm lạnh vào vết cắn</li>
              <li style={{ listStyle: "none" }}>
                4. Đảm bảo chi bị cắn thấp hơn vị trí tim
              </li>
              <li style={{ listStyle: "none" }}>5. Không để nạn nhân đi bộ</li>
              <li style={{ listStyle: "none", fontStyle: "italic" }}>
                <span style={{ color: "#d54101", fontStyle: "italic" }}>
                  Lưu ý:
                </span>
                &nbsp;Không bao giờ cố gắng rạch nơi vết cắn để rạch lọc độc ra
              </li>
              <li style={{ listStyle: "none" }}>
                Triệu chứng rắn cắn: Sau khi bị cắn buồn nôn, nôn, ngứa, sốc,
                hôn mê, liệt, nhiễm độc nặng
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default D17_0_RanCan;
