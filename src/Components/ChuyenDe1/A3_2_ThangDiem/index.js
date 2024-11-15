import "./style.css";

const A3_2_ThangDiem = ({}) => {
  return (
    <div id="section1-3-2" className="section">
      <div className="container">
        <h2>3.2. THANG ĐIỂM BRADEN DỰ ĐOÁN NGUY CƠ LOÉT DO TÌ ĐÈ</h2>
        <table class="assessment-table">
          <tr>
            <th>Thông số</th>
            <th>Đánh giá</th>
            <th>Điểm</th>
          </tr>
          <tr>
            <td rowspan="4" class="category">
              Nhận biết cảm giác
            </td>
            <td>Không suy giảm</td>
            <td>4</td>
          </tr>
          <tr>
            <td>
              Giới hạn nhẹ (đáp ứng bằng lời nói, giảm khả năng nhận biết đau ở
              1 trong 2 chi)
            </td>
            <td>3</td>
          </tr>
          <tr>
            <td>Rất giới hạn (chỉ đáp ứng với kích thích đau)</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Giới hạn hoàn toàn (Không đáp ứng với kích thích đau)</td>
            <td>1</td>
          </tr>
          <tr>
            <td rowspan="4" class="category">
              Tình trạng da
            </td>
            <td>Hiếm khi ẩm ướt</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Thỉnh thoảng ẩm ướt</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Thường xuyên ẩm ướt</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Luôn luôn ẩm ướt</td>
            <td>1</td>
          </tr>
          <tr>
            <td rowspan="4" class="category">
              Hoạt động
            </td>
            <td>Đi lại thường xuyên</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Đi lại ít</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Đi bằng xe lăn</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Nằm liệt giường</td>
            <td>1</td>
          </tr>
          <tr>
            <td rowspan="4" class="category">
              Vận động
            </td>
            <td>
              Không giới hạn (Thường xuyên thay đổi tư thế mà không cần giúp đỡ)
            </td>
            <td>4</td>
          </tr>
          <tr>
            <td>
              Giới hạn nhẹ (Thường xuyên thay đổi nhờ tư thế hay vị trí chi)
            </td>
            <td>3</td>
          </tr>
          <tr>
            <td>
              Rất giới hạn (Thỉnh thoảng thay đổi nhờ tư thế hay vị trí chi)
            </td>
            <td>2</td>
          </tr>
          <tr>
            <td>
              Hoàn toàn bất động (Không thể thay đổi tư thế dù nhỏ khi không
              được giúp đỡ)
            </td>
            <td>1</td>
          </tr>
          <tr>
            <td rowspan="4" class="category">
              Dinh dưỡng
            </td>
            <td>
              Tốt (Ăn gần hết thức ăn, không bao giờ bỏ bữa, có thể ăn thêm bữa
              ngoài)
            </td>
            <td>4</td>
          </tr>
          <tr>
            <td>
              Khá (Ăn hết hơn ½ thức ăn, thỉnh thoảng bỏ 1 bữa nhưng có thể ăn
              thêm bữa ngoài)
            </td>
            <td>3</td>
          </tr>
          <tr>
            <td>
              Trung bình (Hiếm khi ăn được 1 bữa đầy đủ, ăn ít hơn ½ thức ăn,
              thỉnh thoảng cần thêm bữa phụ hoặc ăn bằng ống)
            </td>
            <td>2</td>
          </tr>
          <tr>
            <td>
              Kém (Không ăn được 1 bữa đầy đủ, ăn ít hơn 1/3 thức ăn, cần bổ
              sung thêm dịch, ăn đường ống, truyền dịch/truyền tĩnh mạch khoảng
              5 ngày/lần)
            </td>
            <td>1</td>
          </tr>
          <tr>
            <td rowspan="3" class="category">
              Ma sát và dịch chuyển
            </td>
            <td>
              Không có vấn đề gì (Di chuyển không cần giúp đỡ, luôn luôn duy trì
              tư thế tốt nhất trên giường hay ghế)
            </td>
            <td>3</td>
          </tr>
          <tr>
            <td>
              Vấn đề tiềm tàng (Di chuyển yếu hay cần giúp đỡ, duy trì tư thế
              tốt một cách tương đối nhưng đôi khi trượt xuống)
            </td>
            <td>2</td>
          </tr>
          <tr>
            <td>
              Có vấn đề (Cần giúp đỡ tối đa khi di chuyển, thường xuyên bị trượt
              xuống, tình trạng liệt hay co cứng)
            </td>
            <td>1</td>
          </tr>
        </table>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <div className="card" style={{ width: "100%" }}>
            <h2>ĐÁNH GIÁ NGUY CƠ LOÉT THEO THANG BRADEN</h2>
            <ul>
              <li>Không nguy cơ: 19-23</li>
              <li>Nguy cơ ít: 15-18</li>
              <li>Nguy cơ trung bình: 13-14</li>
              <li>Nguy cơ cao: 10-12</li>
              <li>Nguy cơ rất cao</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default A3_2_ThangDiem;
