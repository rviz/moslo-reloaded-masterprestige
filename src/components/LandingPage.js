import React, { useState, useEffect } from 'react'
import { Card, CardContent } from './ui/card.tsx'
import { Button } from './ui/button.tsx'

const CONTENT = {
  title: 'Talos: Guía Virtual de Mostla',
  info: 'Comienza para simular una entrevista con el asistente virtual de Mostla',
  buttonText: 'Comenzar',
  nextRoute: 'https://ddna-mostla-tec-org1812--entrevista-hiperreal.soului.dh.soulmachines.cloud/?sig=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDE4MTgwMjksImlzcyI6InNpZ25lZF91cmwtMDM0MzQ1ZWItZjMxZC00NDgzLTlkODgtNGQ1MmJkNDA3OWE5IiwiZXhwIjoxODI4MTMxNjI5LCJlbWFpbCI6Im1vc3RsYS10ZWMtb3JnMTgxMi0tZW50cmV2aXN0YS1oaXBlcnJlYWxAZGRuYS5zdHVkaW8iLCJzb3VsSWQiOiJkZG5hLW1vc3RsYS10ZWMtb3JnMTgxMi0tZW50cmV2aXN0YS1oaXBlcnJlYWwifQ.Syd0c5tgY71ep-gwGlgMp7i8MzTpETXn1NWPelcjK-8'
}

const HeroSection = ({ title, children }) => (
  <Card className='mt-9 pt-11 bg-transparent border-none shadow-none flex m-8'>
    <CardContent className='flex flex-col items-center space-y-8'>
      <h1 className='text-4xl md:text-5xl font-bold text-white'>{title}</h1>
      {children}
    </CardContent>
  </Card>
)

const HeroImage = ({
  alt
}) => (
  <img
    src={require('../assets/download.gif')}
    alt={alt}
    className='rounded-lg shadow-lg h-4/6 object-cover w-fit mx-auto'
  />
)

export default function LandingPage () {
  const [timeLeft, setTimeLeft] = useState(null)

  const handleRedirect = () => {
    // Iniciar el timer
    setTimeLeft(300) // 5 minutos en segundos

    // Abre nueva pestaña con la URL correspondiente
    const url = CONTENT.nextRoute
    const newTab = window.open(url, '_blank')

    // Timer para cerrar la pestaña y recargar después de 5 minutos
    setTimeout(() => {
      if (newTab && !newTab.closed) {
        newTab.close()
        window.location.reload()
      }
    }, 300000) // 5 minutos
  }

  // Timer countdown
  useEffect(() => {
    if (timeLeft === null) return

    if (timeLeft === 0) return

    const intervalId = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = prev - 1
        console.log(`Tiempo restante: ${Math.floor(newTime / 60)}:${(newTime % 60).toString().padStart(2, '0')}`)
        return newTime
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeLeft])

  return (
    <div className='min-h-screen flex justify-center bg-gradient-to-b from-primary from-30% to-primary-foreground mt-'>
      <main className='flex flex-col w-full max-w-4xl mt-8 px-4'>
      <div className='flex flex-col'>
        <HeroSection title={CONTENT.title} >
          <p className='text-3xl text-secondary text-center'>
            {CONTENT.info}
          </p>
          <div className='flex space-x-8'>
            <Button
              onClick={handleRedirect}
              className='bg-secondary text-primary-foreground hover:bg-secondary/90 transform transition-transform duration-200 hover:scale-105 p-5 shadow-2xl text-3xl rounded-2xl border-2 border-red-600'
            >
              {CONTENT.buttonText}
            </Button>
          </div>
        </HeroSection>

        </div>
        <HeroImage alt='Mostla Logo' />
        <div className='flex flex-row mt-8 justify-center'>
          <div className='bg-white w-1/3 hidden'> </div>
          <img
            src='TEDU.png'
            alt='Mostla Logo'
            className='w-96'
          />
        </div>
      </main>
    </div>
  )
}
