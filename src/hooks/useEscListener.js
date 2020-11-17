import { useEffect } from 'react'

function useEscListener(callback) {
  useEffect(() => {
    function keyListener(e) {
      if (e.keyCode === 27) {
        callback()
      }
    }

    document.addEventListener('keydown', keyListener)

    return () => document.removeEventListener('keydown', keyListener)
  }, [callback])
}

export default useEscListener
