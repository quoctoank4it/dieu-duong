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
import B10_0_NhuCauNB from "./Components/ChuyenDe2/B10_0_NhuCauNB";
import B11_0_AnToanNB from "./Components/ChuyenDe2/B11_0_AnToanNB";
import B12_0_6MucTieu from "./Components/ChuyenDe2/B12_0_6MucTieu";
import B13_0_NguyCo from "./Components/ChuyenDe2/B13_0_NguyCo";
import B14_0_SuCo from "./Components/ChuyenDe2/B14_0_SuCo";
import B15_0_10MucTieuATPT from "./Components/ChuyenDe2/B15_0_10MucTieuATPT";
import C1_0_TiemAnToan from "./Components/ChuyenDe3/C1_0_TiemAnToan";
import C2_0_ViTriTiem from "./Components/ChuyenDe3/C2_0_ViTriTiem";
import C3_0_TaiBien from "./Components/ChuyenDe3/C3_0_TaiBien";
import C4_0_PhongNguaTB from "./Components/ChuyenDe3/C4_0_PhongNguaTB";
import C5_0_XeTiem from "./Components/ChuyenDe3/C5_0_XeTiem";
import C6_1_TruyenDich from "./Components/ChuyenDe3/C6_1_TruyenDich";
import C6_2_BangTinhTGTruyenDich from "./Components/ChuyenDe3/C6_2_BangTinhTGTruyenDich";
import C6_3_TaiBien from "./Components/ChuyenDe3/C6_3_TaiBien";
import C6_4_PhongNgua from "./Components/ChuyenDe3/C6_4_PhongNgua";
import C7_0_PhongNguaKhiTho from "./Components/ChuyenDe3/C7_0_PhongNguaKhiTho";
import C8_0_PhongNguaDatOngThongDD from "./Components/ChuyenDe3/C8_0_PhongNguaDatOngThongDD";
import C9_0_XuTriKhiDatOngThongDD from "./Components/ChuyenDe3/C9_0_XuTriKhiDatOngThongDD";
import D0_SoCuu from "./Components/ChuyenDe4/D0_SoCuu";
import D1_DauHieu from "./Components/ChuyenDe4/D1_DauHieu";
import D2_SoCuuNghen from "./Components/ChuyenDe4/D2_SoCuuNghen";
import D3_XuTriBong from "./Components/ChuyenDe4/D3_XuTriBong";
import D4_DotQuy from "./Components/ChuyenDe4/D4_0_DotQuy";
import D4_1_DauHieu from "./Components/ChuyenDe4/D4_1_DauHieu";
import D4_2_SoCuuDQ from "./Components/ChuyenDe4/D4_2_SoCuuDQ";
import D5_CapCuuNTH from "./Components/ChuyenDe4/D5_CapCuuNTH";
import D6_0_GayXuong from "./Components/ChuyenDe4/D6_0_GayXuong";
import D6_1_MucDich from "./Components/ChuyenDe4/D6_1_MucDich";
import D6_2_BienChung from "./Components/ChuyenDe4/D6_2_BienChung";
import D6_3_SoCuuGX from "./Components/ChuyenDe4/D6_3_SoCuuGX";
import D7_0_XuLyChayMau from "./Components/ChuyenDe4/D7_0_XuLyChayMau";

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
            <B10_0_NhuCauNB />
            <B11_0_AnToanNB />
            <B12_0_6MucTieu />
            <B13_0_NguyCo />
            <B14_0_SuCo />
            <B15_0_10MucTieuATPT />
            <C1_0_TiemAnToan />
            <C2_0_ViTriTiem />
            <C3_0_TaiBien />
            <C4_0_PhongNguaTB />
            <C5_0_XeTiem />
            <C6_1_TruyenDich />
            <C6_2_BangTinhTGTruyenDich />
            <C6_3_TaiBien />
            <C6_4_PhongNgua />
            <C7_0_PhongNguaKhiTho />
            <C8_0_PhongNguaDatOngThongDD />
            <C9_0_XuTriKhiDatOngThongDD />
            <D0_SoCuu />
            <D1_DauHieu />
            <D2_SoCuuNghen />
            <D3_XuTriBong />
            <D4_DotQuy />
            <D4_1_DauHieu />
            <D4_2_SoCuuDQ />
            <D5_CapCuuNTH />
            <D6_0_GayXuong />
            <D6_1_MucDich />
            <D6_2_BienChung />
            <D6_3_SoCuuGX />
            <D7_0_XuLyChayMau />
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
