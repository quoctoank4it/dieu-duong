import "./App.css";
import React, { useState } from "react";
import SideBar from "./Components/SideBar";
import Menu from "./Components/Menu";
import A1_0_DauHieuSinhTon from "./Components/ChuyenDe1/A1_0_DauHieuSinhTon";
import A1_1_Mach from "./Components/ChuyenDe1/A1_1_Mach";
import A1_2_NhietDo from "./Components/ChuyenDe1/A1_2_NhietDo";
import A1_3_HuyetAp from "./Components/ChuyenDe1/A1_3_HuyetAp";
import A1_4_NhipTho from "./Components/ChuyenDe1/A1_4_NhipTho";
import A2_1_Phu from "./Components/ChuyenDe1/A2_1_Phu";
import A2_2_Da from "./Components/ChuyenDe1/A2_2_Da";

const App = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const openSideBar = (value) => {
    console.log(value);

    setIsOpenSideBar(value);
  };

  return (
    <div>
      <div
        className="App"
        style={{ width: window.innerWidth > 500 ? 800 : "100%" }}
      >
        {window.innerWidth <= 500 && (
          <Menu
            openSideBar={openSideBar}
            isOpenSideBar={isOpenSideBar}
            setIsOpenSideBar={setIsOpenSideBar}
          />
        )}
        <div className="header">
          <span
            style={{
              color: "#d54101",
              fontSize: "x-large",
              fontWeight: "bold",
            }}
          >
            KIẾN THỨC ĐIỀU DƯỠNG
          </span>
        </div>
        <div style={{ display: window.innerWidth > 500 ? "flex" : "" }}>
          {(window.innerWidth > 500 || isOpenSideBar) && (
            <SideBar openSideBar={openSideBar}></SideBar>
          )}
          <div
            className={window.innerWidth > 500 ? "content" : ""}
            style={{ marginTop: 71 }}
          >
            {/* Define each section with an id to scroll to */}
            <A1_0_DauHieuSinhTon />
            <A1_1_Mach />
            <A1_2_NhietDo />
            <A1_3_HuyetAp />
            <A1_4_NhipTho />
            <A2_1_Phu />
            <A2_2_Da />
            <div id="section1-3" className="section">
              Nhận định và phân loại vết loét
            </div>
            <div id="section1-3-1" className="section">
              Nhận định phân độ vết loét
            </div>
            <div id="section1-3-2" className="section">
              Thang điểm
            </div>

            <div id="section2" className="section">
              Một số khái niệm và quy định của ĐD-HS-KTV
            </div>
            <div id="section2-1" className="section">
              Khái niệm phân cấp chăm sóc
            </div>
            <div id="section2-2" className="section">
              12 Nhiệm vụ chuyên môn
            </div>

            <div id="section3" className="section">
              Kiến thức về thực hành Điều dưỡng
            </div>
            <div id="section3-1" className="section">
              Tiêm an toàn
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
