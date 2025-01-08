import "./style.css";

const G2_HuongDanDungThuoc = ({}) => {
  return (
    <div id="section7-2" className="section">
      <div className="container">
        <h2>2. HƯỚNG DẪN SỬ DỤNG THUỐC</h2>
        <span>
          (Theo TT 23/2011/TT-BYT ngày 10/6/2011 của bộ y tế về việc hướng dẫn
          sử dụng thuốc trong csyt có GB)
        </span>
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
              Trước khi NB dùng thuốc:
            </span>
            <ul>
              <li style={{ listStyle: "none" }}>+ CKT hàng ngày,</li>
              <li style={{ listStyle: "none" }}>
                + Giải thích cho NB tuân thủ ĐT,
              </li>
              <li style={{ listStyle: "none" }}>+ Kiểm tra thuốc,</li>
              <li style={{ listStyle: "none" }}>
                + Chuẩn bị phương tiện và thuốc
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
              Trong khi NB dùng thuốc:
            </span>
            <ul>
              <li style={{ listStyle: "none" }}>+ Đảm bảo VS,</li>
              <li style={{ listStyle: "none" }}>+ Đảm bảo 5 đúng,</li>
              <li style={{ listStyle: "none" }}>
                + Trực tiếp chứng kiến NB dùng thuốc và theo dõi phát hiện kịp
                thời các bất thường của NB trong khi dùng thuốc
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
              Sau khi NB dùng thuốc:
            </span>
            <ul>
              <li style={{ listStyle: "none" }}>
                + Theo dõi NB, ghi cụ thể số thuốc điều trị cho mỗi người bệnh,
              </li>
              <li style={{ listStyle: "none" }}>
                + mỗi khi thực hiện xong một thuốc phải đánh dấu thuốc đã thực
                hiện,
              </li>
              <li style={{ listStyle: "none" }}>
                + bảo quản thuốc còn lại, xử lý và bảo quản dụng cụ liên quan
                đến dùng thuốc
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default G2_HuongDanDungThuoc;
