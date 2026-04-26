import React, { useState, useEffect } from 'react'

export default function HeroSlider({ slides }) {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % length)
    }, 5000)
    return () => clearInterval(interval)
  }, [length])

  if (!Array.isArray(slides) || slides.length === 0) return null

  return (
    <div className="relative w-full h-75 sm:h-100 md:h-125 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative max-w-5xl mx-auto px-6 py-10 text-white h-full flex flex-col justify-center">
            {slide.breadcrumb && (
              <p className="text-xs text-gray-200 mb-2">{slide.breadcrumb}</p>
            )}
            {slide.title && (
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{slide.title}</h1>
            )}
            {slide.subtitle && (
              <p className="text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">{slide.subtitle}</p>
            )}
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === current ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}