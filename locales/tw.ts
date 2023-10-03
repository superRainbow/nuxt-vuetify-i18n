export default {
  $vuetify: {
    open: '開啟',
    close: '關閉',
    loading: '載入中...',
  },
  html: {
    title: '經濟部投資審議司',
  },
  layout: {
    header: {
      logo: {
        text: '投資審議系統',
      },
      locales: {
        text: '選擇語系',
        list: {
          en: '英文',
          tw: '中文',
        },
      },
      menu: {
        text: '選單',
        children: {
          apply: '申請',
          news: '最新消息',
        },
      },
    },
    footer: {
      email: `信箱:icserve{'@'}moeaic.gov.tw`,
      address: '地址:100215 台北市中正區羅斯福路1段7號8樓',
      tel: '電話:02-3343-5700',
      copyright: '2016 © 版權所有 經濟部投資審議司',
      tip: '建議使用 Microsoft Edge/Firefox 30/Chrome 27，最佳瀏覽解析度為1024x768 以上',
    },
  },
  page: {
    index: {
      title: '首頁',
    },
    news: {
      title: '最新消息',
    },
    error: {
      title: '錯誤',
    },
    apply: {
      title: '申請',
    },
  },
};
