import "./style.css";

const F6_TietKhuan = ({}) => {
  return (
    <div id="section6-6" className="section">
      <div className="container">
        <h2>6. TIỆT KHUẨN- KHỬ KHUẨN</h2>
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
              <li style={{ listStyle: "none" }}>• Tiệt khuẩn:</li>
              <li style={{ listStyle: "none", paddingLeft: 10 }}>
                Là quá trình tiêu diệt hoặc loại bỏ tất cả các dạng của vi sinh
                vật sống bao gồm cả bào tử vi khuẩn
              </li>
              <li style={{ listStyle: "none" }}>• Khử khuẩn:</li>
              <li style={{ listStyle: "none", paddingLeft: 10 }}>
                Là quá trình loại bỏ hầu hết hoặc tất cả vi sinh vật gây bệnh
                trên dụng cụ nhưng không diệt được bào tử vi khuẩn
              </li>
              <li style={{ listStyle: "none" }}>
                <span style={{ color: "#d54101" }}>Chú ý:</span> KHỬ KHUẨN không
                diệt được bào tử của vi sinh vật
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default F6_TietKhuan;
