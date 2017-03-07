import m from 'mithril'

export default {
  view : ({attrs: {onclick}}) =>
    m('[title=Restart][tabindex=0]', {
      onclick,

      style: {
        cursor   : 'pointer',
        position : 'fixed',
        top      : '1rem',
        right    : '1rem',

        cursor   : 'pointer',
        fontSize : '2rem',
      },
    },
      '⏪'
    )
}
