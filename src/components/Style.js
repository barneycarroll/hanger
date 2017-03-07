import m from 'mithril'

export default {
  view: () =>
    m('style', `
      html {
        font: 2rem/1.5 sans-serif;
      }

      * {
        box-sizing : border-box;
        font-size  : 1rem;
        margin     : 0;
        text-align : center;
      }
    `)
}
