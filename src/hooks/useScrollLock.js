import { useEffect } from 'react'

function useScrollLock() {
  useEffect(() => {
    document.querySelector('html').classList.add('scroll-lock')

    return () => document.querySelector('html').classList.remove('scroll-lock')
  }, [])
}

export default useScrollLock
