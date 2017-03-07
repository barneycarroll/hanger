import m    from 'mithril'

export default {
  oninit({state}){
    state.count = 1

    state.interval = setInterval(() => {
      state.count = (state.count + 1) % 4

      m.redraw()
    }, 250)
  },

  onremove({state: {interval}}){
    clearInterval(interval)
  },

  view : ({state: {count}}) => [
    m('p', 'Loading' ),

    m('br'),

    m('p',
        count
      ? Array(count).fill('.')
      : m.trust('&nbsp;')
    )
  ]
}
