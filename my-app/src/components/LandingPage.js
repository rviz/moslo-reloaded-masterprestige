import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '../components/ui/card.tsx'
import { Button } from '../components/ui/button.tsx'

const CONTENT = {
  titleEN: 'Talos: Mostla Virtual Guide',
  titleES: 'Talos: Guía Virtual de Mostla',
  infoES: 'Conoce cómo hemos implementado el uso de la AI en la Educación y Proyectos de Investigación.',
  infoEN: 'Learn how we have implemented the use of AI in Education and Research Projects.',
  buttonTextEN: 'Start (EN)',
  buttonTextES: 'Comenzar (ES)',
  nextRouteES: 'https://ddna-mostla-tec-org1812--explorer.soului.dh.soulmachines.cloud/?sig=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzgwMjM4NjUsImlzcyI6InNpZ25lZF91cmwtNGQ2ODgzNTgtNmNjZC00ODkxLWI1YWQtNGE1MWI2YWVjYWNiIiwiZXhwIjoxODI0MzM3NDY1LCJlbWFpbCI6Im1vc3RsYS10ZWMtb3JnMTgxMi0tZXhwbG9yZXJAZGRuYS5zdHVkaW8iLCJzb3VsSWQiOiJkZG5hLW1vc3RsYS10ZWMtb3JnMTgxMi0tZXhwbG9yZXIifQ.NvRgDu4q3lgtPNaYZt5n9Ay34hSVvlyz3NRaYYIw_vc',
  nextRouteEN: 'https://ddna-mostla-tec-org1812--talos-ia-eng.soului.dh.soulmachines.cloud/?sig=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzgwNDk2MTcsImlzcyI6InNpZ25lZF91cmwtMjZhZTQyZWMtMmVjOC00M2E4LTk3MDgtOTBhZDA2YjMxOWJiIiwiZXhwIjoxODI0MzYzMjE3LCJlbWFpbCI6Im1vc3RsYS10ZWMtb3JnMTgxMi0tdGFsb3MtaWEtZW5nQGRkbmEuc3R1ZGlvIiwic291bElkIjoiZGRuYS1tb3N0bGEtdGVjLW9yZzE4MTItLXRhbG9zLWlhLWVuZyJ9.JhCGmICzLRwq2UQxKbMzge68zEJCMArxY2taVTdQJAU'
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
    className='rounded-lg shadow-lg h-4/6 object-cover w-fit'
  />
)

export default function LandingPage () {
  const [isEnglish, setIsEnglish] = useState(false)
  const [timeLeft, setTimeLeft] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEnglish(prev => !prev)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleRedirect = (lang) => {
    // Iniciar el timer
    setTimeLeft(300) // 5 minutos en segundos

    // Abre nueva pestaña con la URL correspondiente
    const url = lang === 'en' ? CONTENT.nextRouteEN : CONTENT.nextRouteES
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
        console.log(`Time remaining: ${Math.floor(newTime / 60)}:${(newTime % 60).toString().padStart(2, '0')}`)
        return newTime
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeLeft])

  return (
    <div className='min-h-screen flex justify-center bg-gradient-to-b from-primary from-30% to-primary-foreground mt-'>
      <main className='flex flex-col w-full max-w-4xl mt-8 px-4'>
      <div className='flex flex-col'>
        <HeroSection title={isEnglish ? CONTENT.titleEN : CONTENT.titleES} >
          <p className='text-3xl text-secondary text-center'>
            {isEnglish ? CONTENT.infoEN : CONTENT.infoES}
          </p>
          <div className='flex space-x-8'>
            <Button
              onClick={() => handleRedirect('es')}
              className='bg-secondary text-primary-foreground hover:bg-secondary/90 transform transition-transform duration-200 hover:scale-105 p-5 shadow-2xl text-3xl rounded-2xl'
            >
              {CONTENT.buttonTextES}
            </Button>
            <div className='border-2'></div>
            <Button
              onClick={() => handleRedirect('en')}
              className='bg-secondary text-primary-foreground hover:bg-secondary/90 transform transition-transform duration-200 hover:scale-105 p-5 shadow-2xl text-3xl rounded-2xl'
            >
              {CONTENT.buttonTextEN}
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
