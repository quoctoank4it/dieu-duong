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
            { title: "3.1 Nhận định và phân độ vết loét", id: "section1-3" },
            {
              title: "3.2 Thang điểm BRADEN dự đoán nguye cơ loét",
              id: "section1-3-2",
            },
            {
              title: "3.3 Dự phòng loét",
              id: "section1-3-3",
            },
            {
              title: "3.4 Các vị trí dễ bị loét",
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
      title: "II. Một số khái niệm và quy định của ĐD-HS-KTV",
      id: "section2-1",
      children: [
        { title: "1. Khái niệm phân cấp chăm sóc", id: "section2-1" },
        { title: "2. 12 Nhiệm vụ chuyên môn chăm sóc BN", id: "section2-2" },
        { title: "3. Các bước lập kế hoạch chăm sóc", id: "section2-3" },
      ],
    },
    {
      title: "III. Kiến thức về thực hành Điều dưỡng",
      id: "section3",
      children: [{ title: "1. Tiêm an toàn", id: "section3-1" }],
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
    </div>
  );
};

export default SideBar;
