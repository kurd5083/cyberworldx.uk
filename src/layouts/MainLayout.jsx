import styles from "./MainLayout.module.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import CookiePopup from "../components/CookiePopup/CookiePopup";
import PopupEntrance from "../components/PopupEntrance/PopupEntrance";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return (
    <>
      <Header />
      <main className={styles.main_content}>
        <Outlet />
        <CookiePopup />
      </main>
      <PopupEntrance />
      <Footer />
    </>
  )
}

export default MainLayout



