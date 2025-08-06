import { useState, useEffect } from 'react'

export default function AnimatedHeadline() {
  const [currentText, setCurrentText] = useState(0)
  const texts = ['Design', 'Strategy', 'Experience', 'Branding']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <h1 className="hero-title">
      Let's Tell Your Brand <br />
      Story Through{' '}
      <span className="animated-text">
        <span className="rotating-text">{texts[currentText]}</span>
      </span>
      .
    </h1>
  )
} 