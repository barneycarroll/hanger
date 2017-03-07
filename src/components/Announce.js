import m from 'mithril'

export default {
  onbeforeremove : ({dom}) =>
    new Promise(done => {
      dom.animate({opacity: [1, 0]}, {duration: 1e3, easing: 'ease-in-out'})
        .onfinish = done
    }),

  view : ({children}) =>
    m('.Announcement', {
      style: {
        background : 'white',
        position   : 'fixed',

        top        : 0,
        left       : 0,
        width      : '100vw',
        height     : '100vh',
        lineHeight : '100vh',
      },
    },
      children
    )
}
