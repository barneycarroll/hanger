import m from 'mithril'

export default {
  view : ({attrs: {attempts}}) =>
    attempts.size > 0 &&
      m('.Trials',
        m('p', 'Tried:'),

        m('p',
          [ ...attempts ].map(character =>
            m('span', {
              oncreate({dom}){
                dom.animate({
                  color: ['red', 'black']
                },{
                  duration: 1e3,
                  easing: 'ease-in-out'
                })
              }
            },
              character
            )
          )
        )
      )
}
