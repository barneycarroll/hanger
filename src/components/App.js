import m        from 'mithril'
import throttle from '../utils/throttle-async'

import Style    from './Style'
import Announce from './Announce'
import Loading  from './Loading'
import Reset    from './Reset'
import Gallows  from './Gallows'
import Word     from './Word'
import Trials   from './Trials'

const jsonp = throttle(m.jsonp, 1000)

export default {
  async oninit({state}){
    Object.assign(state, {
      ready    : false,
      started  : false,
      attempts : new Set(),
      reset    : () => {
        if(state.ready)
          document.removeEventListener('keypress', attempt)

        state.oninit.apply(this, arguments)
      }
    })

    state.word  = (
      await jsonp('http://randomword.setgetgo.com/get.php')
    ).Word

    state.ready = true

    document.addEventListener('keypress', attempt)

    function attempt({key}){
      state.started = true

      if(/^\w$/i.test(key))
        state.attempts.add(key)

      m.redraw()
    }
  },

  view: ({state: {
    ready,
    started,
    reset,
    attempts,
    word,
  }}) => [
    m(Style),

    m('.Board', {
      style: {
        display        : 'flex',
        flexDirection  : 'column',
        justifyContent : 'center',

        position       : 'absolute',
        top            : 0,
        left           : 0,
        minHeight      : '100vh',
        minWidth       : '100vw',
      },
    },
        !ready
      ? m(Announce, m(Loading))
      : !started
      ? m(Announce, 'Start typing!')
      : [
          m(Gallows, {attempts, word}),

          m('br'),

          m(Word,    {attempts, word}),

          m('br'),

          m(Trials,  {attempts}),

          m(Reset,   {onclick: reset}),
        ]
    )
  ]
}
