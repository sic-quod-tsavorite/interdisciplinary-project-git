var app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
      theme: {
        themes: {
          light: {
            primary: '#01579B',
            secondary: '#3366ff',
            tertiary: '#C2185B',
            accent: '#8c9eff',
            error: '#b71c1c',
            tbc: '#cccccc',
          },
        },
      },
    }
    ),
    data () {
      return {
        items: [
          {
            src: 'https://dslv9ilpbe7p1.cloudfront.net/Uyj7Yyeq_KuVx1FsHjnMnw_store_header_image',
          },
          {
            src: 'http://www.daystarmarketing.com/media/932f3258-f52f-45ac-a6e4-335ad1302730/YUQ5hg/shirt-stack-2.jpg',
          },
          {
            src: 'https://userdefenders.com/wp-content/uploads/2017/10/User-Defenders-podcast-Logo-Tee-Model-Charcoal.png',
          },
          {
            src: 'https://www.psdmockups.com/wp-content/uploads/2017/02/Male-Model-T-Shirt-Bundle-PSD-Mockup.jpg',
          },
        ],
        icons: [
          'fa fa-facebook',
          'fa fa-twitter',
          'fa fa-linkedin',
          'fa fa-instagram',
        ],
        /*
        items1: [
          { title: 'Men' },
          { title: 'Women' },
        ],
        */
        show: false,
        messages: 0,
      }
    },
  })