// src/components/Layout/Layout.jsx
import { Outlet } from 'react-router-dom'; // 引入 Outlet
import styles from './Layout.module.scss';
import { HeaderWrap } from '../Header';

export default function Layout() {
  return (
    <div className={`min-h-screen flex flex-col ${styles.layout}`}>
      {/* header 包含banner nav */}
      <HeaderWrap />

      <main className="flex-1 container mx-auto p-4">
        <Outlet /> {/* 這裡顯示子路由的內容 */}
      </main>

      <footer className="bg-[#3eb6a8] text-[#ffffff] text-center text-[.8rem] py-[10px]">
        © {new Date().getFullYear()} Shiny Island Beauty. All rights reserved.
      </footer>
    </div>
  );
}
