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

// And all that could have been:

const hanger = [...`
   __________
   |/      |
   |      (_)
   |      \|/
   |       |
   |      / \
   |
___|___
`]

const strokeCharacters = [
  // ...
  [4,5,6,7,8,9,10,11,12,23,24],
  [27],
  [40,41,42],
  // Etc
]

const strokes = strokeCharacters.map(indices => {
  const chunks = [[]]

  for(let i = 0; i < hanger.length; i++){
    if(indices.includes(i) && chunks.length % 2)
        chunks.push([])

    chunks[chunks.length - 1].push(hanger[i])
  }

  return chunks
})

const Chunk = {
  view : ({children}) =>
    m('span.Chunk', {
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
      children
    )
}

const TooEllaborate = {
  view : ({attrs: {attempts, word}}) =>
    m('pre', {
      style: {
        color    : 'transparent',
        position : 'relative',
      },
    },
      hanger,

      [ ...attempts ]
        .filter(letter =>
          word.includes(letter)
        )
        .map(({}, strokeIndex) =>
          m('.Stroke', {
            style: {
              position : 'absolute',
              top      : 0,
              left     : 0,
              width    : '100%',
              height   : '100%',
            },
          },

            strokes[strokeIndex].map((chunk, chunkIndex) =>
                chunkIndex % 2
              ? chunk
              : m(Chunk)
            )
          )
        )
    )
}
