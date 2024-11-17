import "./style.css";

const C6_1_TruyenDich = ({}) => {
  return (
    <div id="section3-6" className="section">
      <div className="container" style={{ textAlign: "left" }}>
        <h2>6. TRUYỀN DỊCH</h2>
        <h1>6.1. Công thức tính thời gian dịch truyền</h1>
        <div class="formula">
          <span>T = </span>
          <span style={{ borderBottom: "1px solid black" }}>V * 20</span>
          <br />
          <span style={{ paddingLeft: 28 }}>a</span>
        </div>

        <div class="details">
          <p>
            <strong>T:</strong> Thời gian tính bằng phút
          </p>
          <p>
            <strong>V:</strong> Thể tích dịch truyền (ml)
          </p>
          <p>
            <strong>a:</strong> Tốc độ dịch truyền (giọt/phút)
          </p>
          <p>Tốc độ truyền ghi bằng chữ số La Mã</p>
        </div>
      </div>
    </div>
  );
};
export default C6_1_TruyenDich;
