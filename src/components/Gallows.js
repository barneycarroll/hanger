import m from 'mithril'

export default {
  view : ({attrs: {attempts, word}}) => {
    const strikes = [...attempts]
      .filter(letter =>
        !word.includes(letter)
      )

    return (
        !strikes.length
        ? []
        : [
          m('p', 'Strikes:'),

          m('p',
            strikes.map(() =>
              m('span.Strike', {
                style: {color: 'red'},

                oncreate({dom}){
                  dom.animate({
                    color: ['white', 'red']
                  },{
                    duration : 1e3,
                    easing   : 'ease-out'
                  })
                },
              },
                '|'
              )
            )
          )
        ]
      )
  }
}
