export default (fn, delay) =>
  function throttle(){
    const now       = Date.now()
    const ellapsed  = now - (localStorage.lastRequest || 0)
    const remaining = delay - ellapsed

    if(remaining <= 0){
      localStorage.lastRequest = now

      return fn.apply(this, arguments)
    }
    else {
      await (new Promise(go => {
        setTimeout(go, remaining)
      }))

      return fn.apply(this, arguments)
    }
  }
