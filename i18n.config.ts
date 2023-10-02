import messages from './locales';

export default defineI18nConfig(() => ({
  locale: 'tw',
  fallbackLocale: 'tw',
  detectBrowserLanguage: {
    // 是否要使用 cookie
    useCookie: true,
    // 防止用戶每次訪問都會跑重定向，第一次定向後會設置 cookie
    cookieKey: 'i18n_redirected',
    // 建議為 root (預設)
    // 設置後，僅當用戶訪問/站點的根路徑 ( ) 時才嘗試進行語言檢測
    redirectOn: 'root',
  },
  messages,
}));
