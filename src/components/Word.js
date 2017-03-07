import m from 'mithril'

export default {
  view : ({attrs: {attempts, word}}) =>
    m('.Word',
      [...word].map(letter =>
        m('span', {
          style: {
            width: '1em'
          }
        },
          ! attempts.has(letter)
          ? '_'
          : letter
        )
      )
    )
}
