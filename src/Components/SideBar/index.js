import React, { useState } from "react";
import MenuItems from "../MenuItems";

const SideBar = ({ openSideBar }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const menuData = [
    {
      title: "Chuyên đề I: Nhận định và đánh giá người bệnh",
      id: "section1",
      children: [
        {
          title: "1. Dấu hiệu sinh tồn",
          id: "section1",
          children: [
            { title: "1.1. Mạch", id: "section1-1-1" },
            { title: "1.2. Nhiệt độ", id: "section1-1-2" },
            { title: "1.3. Huyết áp", id: "section1-1-3" },
            { title: "1.4. Nhịp thở", id: "section1-1-4" },
          ],
        },
        {
          title: "2. Nhận định tình trạng phù da, niêm mạc",
          id: "section1-2",
          children: [
            { title: "2.1. Phù", id: "section1-2" },
            { title: "2.2. Da", id: "section1-2-2" },
          ],
        },
        {
          title: "3. Loét",
          id: "section1-3",
          children: [
            { title: "3.1. Nhận định và phân độ vết loét", id: "section1-3" },
            {
              title: "3.2. Thang điểm BRADEN dự đoán nguy cơ loét",
              id: "section1-3-2",
            },
            {
              title: "3.3. Dự phòng loét",
              id: "section1-3-3",
            },
            {
              title: "3.4. Các vị trí dễ bị loét",
              id: "section1-3-4",
            },
          ],
        },
        {
          title: "4. Đánh giá tình trạng đau",
          id: "section1-4",
        },
        {
          title: "5. Thang điểm Glasgrow",
          id: "section1-5",
        },
      ],
    },
    {
      title: "Chuyên đề II: Một số khái niệm và quy định của ĐD-HS-KTV",
      id: "section2-1",
      children: [
        { title: "1. Khái niệm phân cấp chăm sóc", id: "section2-1" },
        { title: "2. 12 Nhiệm vụ chuyên môn chăm sóc BN", id: "section2-2" },
        { title: "3. Các bước lập kế hoạch chăm sóc", id: "section2-3" },
        { title: "4. 8 Chuẩn đạo đức điều dưỡng", id: "section2-4" },
        { title: "5. Quy định y lệnh miệng", id: "section2-5" },
        { title: "6. Quy định thứ tự dán hồ sơ bệnh án", id: "section2-6" },
        { title: "7. Quy chế lưu trữ hồ sơ bệnh án", id: "section2-7" },
        { title: "8. Quyền của người bệnh", id: "section2-8" },
        { title: "9. Nghĩa vụ của người bệnh", id: "section2-9" },
        { title: "10. Nhu cầu cơ bản của người bệnh", id: "section2-10" },
        { title: "11. Khái niệm về an toàn người bệnh", id: "section2-11" },
        { title: "12. 6 mục tiêu an toàn người bệnh", id: "section2-12" },
        {
          title: "13. Một số nguy cơ gấy mất an toàn trong bệnh viện",
          id: "section2-13",
        },
        {
          title: "14. Một số sự cố y khoa thường gặp",
          id: "section2-14",
        },
        {
          title: "15. Mười mục tiêu an toàn phẫu thuật theo khuyến cáo của WHO",
          id: "section2-15",
        },
      ],
    },
    {
      title: "Chuyên đề III: Kiến thức về thực hành quy trình ĐD",
      id: "section3-1",
      children: [
        { title: "1. Tiêm an toàn", id: "section3-1" },
        { title: "2. Cách xác định vị trí tiêm", id: "section3-2" },
        {
          title: "3. Tai biến, xử trí và cách đề phòng khi tiêm",
          id: "section3-3",
        },
        {
          title: "4. Phòng ngừa nguy cơ tai biến khi tiêm",
          id: "section3-4",
        },
        {
          title: "5. Quy định vệ sinh và sắp xếp xe tiêm",
          id: "section3-5",
        },
        {
          title: "6. Truyền dịch",
          id: "section3-6",
          children: [
            {
              title: "6.1. Công thức tính thời gian dịch truyền",
              id: "section3-6",
            },
            {
              title: "6.2. Bảng tính thời gian truyền dịch hay dùng",
              id: "section3-6-2",
            },
            {
              title: "6.3. Tai biến và xử trí khi truyền dịch",
              id: "section3-6-3",
            },
            {
              title: "6.4. Phòng ngừa nguy cơ tai biến do truyền dịch",
              id: "section3-6-4",
            },
          ],
        },
        {
          title: "7. Bảng nguy cơ tai biến và phòng ngừa khi thở oxy",
          id: "section3-7",
        },
        {
          title:
            "8. Bảng nguy cơ tai biến và phòng ngừa khi đặt ống thông dạ dày",
          id: "section3-8",
        },
        {
          title: "9. Tình huống xử trí khi đặt ống thông dạ dày",
          id: "section3-9",
        },
      ],
    },
    {
      title:
        "Chuyên đề IV: Sơ cấp cứu ban đầu một số tai nạn và thương tích thường gặp",
      id: "section4",
      children: [
        {
          title: "1. Một số dấu hiệu bất thường và cách xử trí",
          id: "section4-1",
        },
        { title: "2. Sơ cứu khi bị nghẹn hóc", id: "section4-2" },
        { title: "3. Xử trí khi bỏng", id: "section4-3" },
        {
          title: "4. Đột quỵ",
          id: "section4-4",
          children: [
            {
              title: "4.1. Dấu hiệu nhận biệt người bị đột quỵ",
              id: "section4-4-1",
            },
            {
              title: "4.2. Sơ cứu khi bị đột quỵ",
              id: "section4-4-2",
            },
          ],
        },
        { title: "5. Cấp cứu ngừng tuần hoàn", id: "section4-5" },
        {
          title: "6. Sơ cứu gãy xương",
          id: "section4-6-0",
          children: [
            {
              title: "6.1. Mục đích",
              id: "section4-6-1",
            },
            {
              title: "6.2. Biến chứng gãy xương",
              id: "section4-6-2",
            },
            {
              title: "6.3. Sơ cứu gãy xương",
              id: "section4-6-3",
            },
          ],
        },
        { title: "7. Xử lý vết thương chảy máu", id: "section4-7" },
        { title: "8. Xử lý vết thương dập nát, đứt lìa", id: "section4-8" },
        { title: "9. Bong gân", id: "section4-9" },
        { title: "10. Chấn thương đầu", id: "section4-10" },
        { title: "11. Cấp cứu chấn thương sọ não", id: "section4-11" },
        {
          title: "12. Chấn thương cột sống",
          id: "section4-12",
        },
        {
          title: "13. Ngất xỉu",
          id: "section4-13",
        },
        {
          title: "14. Đuối nước",
          id: "section4-14",
        },
        {
          title: "15. Co giật/động kinh",
          id: "section4-15",
        },
        {
          title: "16. Côn trùng cắn",
          id: "section4-16",
        },
        {
          title: "17. Rắn cắn",
          id: "section4-17",
        },
        {
          title: "18. Phản vệ",
          id: "section4-18",
        },
        {
          title: "19. Một số kỹ năng thoát hiểm trong đám cháy",
          id: "section4-19",
        },
      ],
    },
    {
      title: "Chuyên đề V: Chuyên đề xét nghiệm",
      id: "section5",
      children: [
        {
          title: "1. Thứ tự cho máu vào các ống",
          id: "section5-1",
        },
        {
          title: "2. Sơ đồ truyền khối hồng cầu",
          id: "section5-2",
        },
        {
          title: "3. Sơ đồ truyền huyết tương",
          id: "section5-3",
        },
        {
          title: "4. Quy trình truyền máu",
          id: "section5-4",
        },
        {
          title: "5. Một số lưu ý khi truyền máu",
          id: "section5-5",
        },
        {
          title: "6. Một só nguyên nhân thường gặp gây truyền nhầm máu",
          id: "section5-6",
        },
        {
          title: "7. Cách xác định nhóm máu hệ ABO",
          id: "section5-7",
        },
        {
          title: "8. Hướng dẫn lấy nước tiểu 24 giờ",
          id: "section5-8",
        },
        {
          title: "9. Ý nghĩa một số chỉ số xét nghiệm huyết học",
          id: "section5-9",
        },
        {
          title: "10. Ý nghĩa một số chỉ số xét nghiệm sinh hóa",
          id: "section5-10",
        },
        {
          title: "11. Một số chú ý khi lấy máu xét nghiệm",
          id: "section5-11",
        },
      ],
    },
    {
      title: "Chuyên đề VI: Kiểm soát nhiểm khuẩn",
      id: "section6",
      children: [
        {
          title: "1. Quy trình vệ sinh tay",
          id: "section6-1",
        },
        {
          title: "2. 5 thời điểm cần vệ sinh tay",
          id: "section6-2",
        },
        {
          title: "3. Phân loại chất thải Y tế",
          id: "section6-3",
        },
        {
          title: "4. Bảng phân loại chất thải Y tế",
          id: "section6-4",
        },
        {
          title: "5. Nhiễm khuẩn bệnh viện",
          id: "section6-5",
        },
        {
          title: "6. Tiệt khuẩn - khử khuẩn",
          id: "section6-6",
        },
        {
          title: "7. Phòng ngừa nguy cơ do máu, dịch tiết, vật sắc nhọn",
          id: "section6-7",
        },
        {
          title: "8. Quy trình xử trí sau khi bị phơi nhiễm",
          id: "section6-8",
        },
        {
          title: "9. Xử trí ban đầu khi bị phơi nhiễm",
          id: "section6-9",
        },
        {
          title: "10. Quy trình xử lý dụng cụ tại các khoa phòng",
          id: "section6-10",
        },
        {
          title: "11. Quy trình khử khuẩn dụng cụ kém chịu nhiệt",
          id: "section6-11",
        },
        {
          title: "12. Quy trình tiệt khuẩn dụng cụ chịu nhiệt",
          id: "section6-12",
        },
        {
          title: "13. Quy trình khử khuẩn bằng hóa chất",
          id: "section6-13",
        },
      ],
    },
    {
      title: "Chuyên đề VII: Sử dụng thuốc",
      id: "section7",
      children: [
        {
          title: "1. Quy định sử dụng thuốc của điều dưỡng",
          id: "section7",
        },
        {
          title: "2. Hướng dẫn sử dụng thuốc",
          id: "section7-2",
        },
        {
          title: "3. Hạn chế nhầm lẫn thuốc",
          id: "section7-3",
        },
        {
          title: "4. Cảnh báo 1 số nguy cơ sai sót trong sử dụng thuốc",
          id: "section7-4",
        },
        {
          title: "5. Quản lý thuốc có nguy cơ cao",
          id: "section7-5",
        },
        {
          title: "6. Danh mục thuốc LASA",
          id: "section7-6",
        },
      ],
    },
  ];
  // Filter function for search
  const filterMenu = (items) => {
    return items
      .map((item) => {
        // Handle string type children
        if (typeof item === "string") {
          return item.toLowerCase().includes(searchTerm.toLowerCase())
            ? { title: item }
            : null;
        }

        // Handle object type children
        if (item.children && item.children.length > 0) {
          const filteredChildren = filterMenu(item.children);

          // If the item title matches the search term or any children match, include this item
          if (
            (item.title &&
              item.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
            filteredChildren.length > 0
          ) {
            return { ...item, children: filteredChildren };
          }
        }

        // If the item itself matches the search term and has no children
        return item.title &&
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
          ? item
          : null;
      })
      .filter((item) => item !== null);
  };

  const filteredMenuData = filterMenu(menuData);

  return (
    <div className={window.innerWidth > 500 ? "sidebar" : "Top-lep00 sidebar"}>
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <MenuItems items={filteredMenuData} openSideBar={openSideBar} />
      <div
        style={{
          display: "grid",
          textAlign: "left",
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        <span>Copyright © 2025</span>
        <span>luxubudiep@gmail.com</span>
      </div>
    </div>
  );
};

export default SideBar;
