"use client"

export function AnimatedGradientBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-3xl animate-slow-spin" 
        style={{ top: '-50%', left: '-20%' }} 
      />
      <div className="absolute w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-blue-500/30 to-green-500/30 blur-3xl animate-slow-spin-reverse" 
        style={{ bottom: '-50%', right: '-20%' }} 
      />
    </div>
  )
}

