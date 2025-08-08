'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Heart, Sparkles, Volume2, VolumeX, Settings } from 'lucide-react'
import { AdminPanel } from '@/components/admin-panel'
import { RomanticConfig, defaultConfig } from '@/lib/config'

export default function ConfigurableRomanticExperience() {
  const [config, setConfig] = useState<RomanticConfig>(defaultConfig)
  const [currentPhase, setCurrentPhase] = useState(0)
  const [showHearts, setShowHearts] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const [clickCount, setClickCount] = useState(0)
  const [showAdmin, setShowAdmin] = useState(false)
  const [currentGif, setCurrentGif] = useState('')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hasStarted, setHasStarted] = useState(false)

const startExperience = () => {
  setHasStarted(true)
  audioRef.current?.play()
}



    // fetch('http://localhost:4000/get-config')
    //   .then(response => response.json())
    //   .then(data => {
    //     if (data) {
    //       setConfig(data);
    //     }
    //   })
    //   .catch(error => {
    //     console.error('Error fetching config from server:', error);
    //   });
  const audioRef = useRef<HTMLAudioElement>(null)

  // useEffect(() => {
  //   fetch('http://localhost:4000/get-config')
  //     .then(response => response.json())
  //     .then(data => {
  //   setCurrentGif(config.gifs[0] || '')

  // })}, [])

  useEffect(() => {
    fetch('/api/data/read')
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          console.log('Fetched config:', json.data[0])
          setConfig(json.data[0]) // assuming single object row
        }
      })
  }, [])

  // Update current GIF when config changes
  useEffect(() => {
    if (config.gifs.length > 0) {
      setCurrentGif(config.gifs[0])
    }
  }, [config.gifs])

  // Initialize heart animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const particles: any[] = []
    const particleCount = config.settings.particleCount

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 60 + 300}, 70%, 60%)`,
        life: Math.random() * 100 + 50
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life--

        if (particle.life <= 0 || particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
          particles[index] = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
            color: `hsl(${Math.random() * 60 + 300}, 70%, 60%)`,
            life: Math.random() * 100 + 50
          }
        }

        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      if (showHearts) {
        requestAnimationFrame(animate)
      }
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [showHearts, config.settings.particleCount])

  // Phase progression
  useEffect(() => {
    if (currentPhase < config.phases.length - 1) {
      const timer = setTimeout(() => {
        setCurrentPhase(prev => prev + 1)
        if (currentPhase === 0) {
          setShowHearts(false)
        }
      }, config.phases[currentPhase].duration)

      return () => clearTimeout(timer)
    }
  }, [currentPhase, config.phases])

  const handleHeartClick = () => {
    setClickCount(prev => prev + 1)
    createFloatingHeart()
    
    // Change GIF randomly
    if (config.gifs.length > 0) {
      const randomGif = config.gifs[Math.floor(Math.random() * config.gifs.length)]
      setCurrentGif(randomGif)
    }
  }

  const createFloatingHeart = () => {
    const heart = document.createElement('div')
    heart.innerHTML = '💖'
    heart.style.position = 'fixed'
    heart.style.left = Math.random() * window.innerWidth + 'px'
    heart.style.top = window.innerHeight + 'px'
    heart.style.fontSize = '2rem'
    heart.style.pointerEvents = 'none'
    heart.style.zIndex = '1000'
    heart.style.transition = 'all 3s ease-out'
    
    document.body.appendChild(heart)
    
    setTimeout(() => {
      heart.style.top = '-100px'
      heart.style.opacity = '0'
    }, 100)
    
    setTimeout(() => {
      document.body.removeChild(heart)
    }, 3000)
  }

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const skipToEnd = () => {
    setCurrentPhase(config.phases.length - 1)
    setShowHearts(false)
  }

  const handleConfigChange = (newConfig: RomanticConfig) => {
    setConfig(newConfig)
    // Reset to beginning with new config
    setCurrentPhase(0)

     // Send the updated config to the server
     
    //  fetch('http://localhost:4000/update-config', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ config: newConfig })
    // })
    // .then(response => response.json())
    // .then(data => console.log(data.message))
    // .catch(error => console.error('Error updating config:', error));
    setShowHearts(true)
  }

  // Secret admin access (press Ctrl+Shift+A)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setShowAdmin(true)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])
  if (!hasStarted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Button onClick={startExperience} className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          Start Romantic Experience 💖
        </Button>
      </div>
    )
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${config.settings.backgroundColor} relative overflow-hidden`}>
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className={`fixed top-0 left-0 w-full h-full pointer-events-none transition-opacity duration-1000 ${
          showHearts ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ background: 'rgba(0, 0, 0, 0.2)' }}
      />

      {/* Floating Emojis */}
      {config.settings.enableFloatingEmojis && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute text-2xl animate-bounce`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              {config.settings.floatingEmoji}
            </div>
          ))}
        </div>
      )}

      {/* Control Buttons */}
      <div className="fixed top-4 right-4 z-40 flex gap-2">
        {config.settings.enableMusic && (
          <Button
            onClick={toggleMusic}
            variant="outline"
            size="icon"
            className="bg-white/80 hover:bg-white/90"
          >
            {isPlaying ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </Button>
        )}
        <Button
          onClick={skipToEnd}
          variant="outline"
          className="bg-white/80 hover:bg-white/90"
        >
          Skip to Kiss 💋
        </Button>
      </div>

      {/* Click Counter */}
      <div className="fixed top-4 left-4 z-40">
        <Card className="p-2 bg-white/80">
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-red-500" />
            <span className="text-sm font-medium">Clicks: {clickCount}</span>
          </div>
        </Card>
      </div>

      {/* Admin Access Hint */}
      <div className="fixed bottom-4 left-4 z-40">
        <Card className="p-2 bg-white/80">
          <p className="text-xs text-gray-600">Press Ctrl+Shift+A for admin</p>
        </Card>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {/* Title Phase */}
        {currentPhase === 0 && (
          <div className="text-center animate-pulse">
            <h1 className={`text-2xl md:text-4xl font-bold ${config.settings.textColor} mb-8 animate-bounce`}>
              {config.phases[0]?.title}
            </h1>
          </div>
        )}

        {/* Message Phases */}
        {currentPhase > 0 && currentPhase < config.phases.length - 1 && (
          <div className="text-center max-w-4xl">
            <h2 className={`text-lg md:text-2xl font-semibold ${config.settings.textColor} leading-relaxed animate-fadeIn`}>
              {config.phases[currentPhase].message}
            </h2>
          </div>
        )}

        {/* Final Kiss Phase */}
        {currentPhase === config.phases.length - 1 && (
          <div className="text-center space-y-8 animate-fadeIn">
            <h2 className={`text-lg md:text-xl font-semibold ${config.settings.textColor} max-w-4xl leading-relaxed`}>
              {config.phases[currentPhase].message}
            </h2>
            
            <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-2xl border-pink-200 hover:shadow-3xl transition-all duration-300">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <Button
                    onClick={handleHeartClick}
                    className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Click for Love 💕
                  </Button>
                </div>
                
                <div className="relative group cursor-pointer" onClick={handleHeartClick}>
                  <img
                    src={currentGif || "/placeholder.svg"}
                    alt="Romantic Kiss"
                    className="w-64 h-64 object-cover rounded-2xl shadow-lg mx-auto group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Sparkles className="absolute top-2 right-2 h-6 w-6 text-yellow-400 animate-pulse" />
                </div>
                
                <div className="text-center">
                  <p className="text-pink-600 font-medium">Click the image for surprises! ✨</p>
                  <p className="text-sm text-gray-600 mt-2">You've clicked {clickCount} times 💖</p>
                  <p className="text-sm text-purple-600 mt-2 font-medium">{config.customization.personalMessage}</p>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Admin Panel */}
      <AdminPanel
        config={config}
        onConfigChange={handleConfigChange}
        isVisible={showAdmin}
        onToggleVisibility={() => setShowAdmin(!showAdmin)}
      />

      {/* Hidden Audio Element */}
      {config.settings.enableMusic && (
        <audio
          ref={audioRef}
          autoPlay={isPlaying}
          loop
        >
          <source src="/song.mp3?query=romantic love song" type="audio/mpeg" />
        </audio>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }

          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  )
}
