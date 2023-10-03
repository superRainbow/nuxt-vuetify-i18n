export default {
  $vuetify: {
    open: 'open',
    close: 'close',
    loading: 'loading...',
  },
  html: {
    title: 'Department of Investment Review, MOEA',
    language: 'English',
  },
  layout: {
    header: {
      logo: {
        text: 'Moeaic',
      },
      locales: {
        text: 'selectLanguage',
        list: {
          en: 'English',
          tw: 'Chinese',
        },
      },
      menu: {
        text: 'menu',
        children: {
          apply: 'apply',
          news: 'news',
        },
      },
    },
    footer: {
      email: `email: icserve{'@'}moeaic.gov.tw`,
      address:
        'address:8F., No.7, Sec. 1, Roosevelt Rd., Jhongjheng District, Taipei City 100215, Taiwan (R.O.C.)',
      tel: 'tel:02-3343-5700',
      copyright:
        'Copyright © 2016 Department of Investment Review, Ministry of Economic Affairs, R.O.C.',
      tip: 'Best viewed with Microsoft Edge/Firefox 30/Chrome 27 or higher with 1024 x 768 resolution',
    },
  },
  page: {
    index: {
      title: 'Index',
    },
    news: {
      title: 'News',
    },
    error: {
      title: 'Error',
    },
    apply: {
      title: 'Apply',
    },
  },
};
