/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // ✅ 非常重要，不能少
  ],
  theme: {
    extend: {
      // 🎨 顏色
      colors: {
        primary: '#5A67D8',         // 主色
        secondary: '#F6AD55',       // 次要色
        'brand-dark': '#1a202c',    // 品牌深色
        'brand-light': '#EDF2F7',   // 品牌淺色
        danger: '#F44336',          // 警告色
        success: '#48BB78', 

        green: '#3eb6a8',        // 成功色
        green_light: '#b1d4d0',  // 成功淺色
        pink: '#ffbdbd',
      },

      // 🔠 字體
      fontFamily: {
        sans: ['"Noto Sans TC"', 'system-ui', 'sans-serif'],
        fancy: ['"Abril Fatface"', 'cursive'],
      },

      // 📏 間距（padding / margin）
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
        '144': '36rem',
      },

      // 📱 RWD 斷點
      screens: {
        xs: '360px',
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        'max-sm': { max: '479px' }, // ⬅️ 這才是「小於 sm」
        'max-md': { max: '767px' }, // ⬅️ 這才是「小於 sm」
      },

      // 🟠 圓角
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },

      // 🌫 陰影
      boxShadow: {
        soft: '0 4px 12px rgba(0, 0, 0, 0.05)',
        strong: '0 6px 20px rgba(0, 0, 0, 0.2)',
      },

      // 🧾 最大寬度（例如 container 限制）
      maxWidth: {
        'screen-xl': '1280px',
        'screen-2xl': '1536px',
        content: '1100px',
      },
    },
  },
  plugins: [],
};
