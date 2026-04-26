import { useEffect } from 'react'

export const useSmoothScroll = () => {
  useEffect(() => {
    // Scroll to element with smooth behavior
    const scrollToElement = (elementId, offset = 0) => {
      const element = document.getElementById(elementId)
      if (element) {
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
    
    // Handle hash links
    const handleHashLink = (e) => {
      const target = e.target.closest('a')
      if (!target) return
      
      const hash = target.hash
      if (hash && hash.startsWith('#')) {
        e.preventDefault()
        const id = hash.substring(1)
        scrollToElement(id, 80) // 80px offset for fixed navbar
      }
    }
    
    document.addEventListener('click', handleHashLink)
    
    // Initial scroll if hash exists
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      setTimeout(() => {
        scrollToElement(id, 80)
      }, 100)
    }
    
    return () => {
      document.removeEventListener('click', handleHashLink)
    }
  }, [])
}

export default useSmoothScroll