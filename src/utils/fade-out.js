export default ({dom}) =>
  new Promise(done => {
    dom.animate({opacity: [1, 0]}, {duration: 1e3, easing: 'ease-in-out'})
      .onfinish = done
  })
