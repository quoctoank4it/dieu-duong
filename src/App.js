import "./App.css";
import React, { useState } from "react";
import SideBar from "./Components/SideBar";
import Menu from "./Components/Menu";
import icon from "./topicon.png";
import A1_0_DauHieuSinhTon from "./Components/ChuyenDe1/A1_0_DauHieuSinhTon";
import A1_1_Mach from "./Components/ChuyenDe1/A1_1_Mach";
import A1_2_NhietDo from "./Components/ChuyenDe1/A1_2_NhietDo";
import A1_3_HuyetAp from "./Components/ChuyenDe1/A1_3_HuyetAp";
import A1_4_NhipTho from "./Components/ChuyenDe1/A1_4_NhipTho";
import A2_1_Phu from "./Components/ChuyenDe1/A2_1_Phu";
import A2_2_Da from "./Components/ChuyenDe1/A2_2_Da";
import A3_0_Loet from "./Components/ChuyenDe1/A3_0_Loet";
import A3_2_ThangDiem from "./Components/ChuyenDe1/A3_2_ThangDiem";
import A3_3_DuPhongLoet from "./Components/ChuyenDe1/A3_3_DuPhongLoet";
import A1_3_4_ViTriLoet from "./Components/ChuyenDe1/A3_4_TuTheLoet";
import A4_0_DanhGiaTinhTrangDau from "./Components/ChuyenDe1/A4_0_DanhGiaTinhTrangDau";
import A5_0_ThangDiemGlasgrow from "./Components/ChuyenDe1/A5_0_ThangDiemGlasgrow";
import B1_0_PhanCapChamSoc from "./Components/ChuyenDe2/B1_0_PhanCapChamSoc";
import B2_0_12NhiemVu from "./Components/ChuyenDe2/B2_0_12NhiemVu";
import B3_0_CacBuoc from "./Components/ChuyenDe2/B3_0_CacBuoc";
import B4_0_8ChuanDaoDuc from "./Components/ChuyenDe2/B4_0_8ChuanDaoDuc";
import B5_0_QuyDinhYLenhMieng from "./Components/ChuyenDe2/B5_0_QuyDinhYLenhMieng";
import B6_0_QuyDinhDanHSBA from "./Components/ChuyenDe2/B6_0_QuyDinhDanHSBA";
import B7_0_QuyChe from "./Components/ChuyenDe2/B7_0_QuyChe";
import B8_0_QuyenNB from "./Components/ChuyenDe2/B8_0_QuyenNB";
import B9_0_NghiaVuNB from "./Components/ChuyenDe2/B9_0_NghiaVuNB";

const App = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const openSideBar = (value) => {
    setIsOpenSideBar(value);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={window.innerWidth > 500 ? "All-center" : ""}
      style={{ background: "#faebd7" }}
    >
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
            SỔ TAY ĐIỀU DƯỠNG
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
            <A1_0_DauHieuSinhTon />
            <A1_1_Mach />
            <A1_2_NhietDo />
            <A1_3_HuyetAp />
            <A1_4_NhipTho />
            <A2_1_Phu />
            <A2_2_Da />
            <A3_0_Loet />
            <A3_2_ThangDiem />
            <A3_3_DuPhongLoet />
            <A1_3_4_ViTriLoet />
            <A4_0_DanhGiaTinhTrangDau />
            <A5_0_ThangDiemGlasgrow />
            <B1_0_PhanCapChamSoc />
            <B2_0_12NhiemVu />
            <B3_0_CacBuoc />
            <B4_0_8ChuanDaoDuc />
            <B5_0_QuyDinhYLenhMieng />
            <B6_0_QuyDinhDanHSBA />
            <B7_0_QuyChe />
            <B8_0_QuyenNB />
            <B9_0_NghiaVuNB />
          </div>
        </div>
      </div>
      {!isOpenSideBar && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          style={{
            left: window.innerWidth > 500 ? window.innerWidth / 2 - 30 : 20,
          }}
        >
          <img src={icon} style={{ width: 20, height: 20 }}></img>
        </button>
      )}
    </div>
  );
};

export default App;
