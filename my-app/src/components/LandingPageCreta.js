import React, { useState, useEffect } from 'react'
import { Card, CardContent } from './ui/card.tsx'
import { Button } from './ui/button.tsx'

const CONTENT = {
  titleEN: 'Creta is IFE Conference',
  infoEN: 'Ask anything you want to know about our event. ',
  buttonTextEN: 'Start',
  nextRouteEN: 'https://ddna-mostla-tec-org1812--creta-ia.soului.dh.soulmachines.cloud/?sig=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzgwNTI0MjUsImlzcyI6InNpZ25lZF91cmwtMDk0NzE0MWUtZmUwMy00NDFlLWI2MGQtZDM2YTJhMWI5NzdlIiwiZXhwIjoxODI0MzY2MDI1LCJlbWFpbCI6Im1vc3RsYS10ZWMtb3JnMTgxMi0tY3JldGEtaWFAZGRuYS5zdHVkaW8iLCJzb3VsSWQiOiJkZG5hLW1vc3RsYS10ZWMtb3JnMTgxMi0tY3JldGEtaWEifQ.upfjHwswTD2eJ3HlU1Rw5Ogm1RQRFI5O7f5ngd6jYsg'
}

const HeroSection = ({ title, children }) => (
  <Card className='mt-9 pt-11 bg-transparent border-none shadow-none flex m-8'>
    <CardContent className='flex flex-col items-center space-y-8'>
      <h1 className='text-4xl md:text-5xl text-primary-foreground font-black'>{title}</h1>
      {children}
    </CardContent>
  </Card>
)

const HeroImage = ({
  alt
}) => (
  <img
    src={require('../assets/moslo.gif')} // TO DO: Agregar el gif de creta, se necesita grabar en el totem.
    alt={alt}
    className='rounded-lg shadow-lg h-4/6 object-cover w-fit'
  />
)

export default function LandingPageCreta () {
  const [timeLeft, setTimeLeft] = useState(null)

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
    <div className='min-h-screen flex justify-center bg-gradient-to-b from-secondary from-10% to-primary'>
      <main className='flex flex-col w-full max-w-4xl mt-8 px-4'>
      <div className='flex flex-col'>
        <HeroSection title={CONTENT.titleEN} >
          <p className='text-3xl text-primary-foreground text-center'>
            {CONTENT.infoEN}<span className='font-extrabold'>She is here <span className='underline italic'>to help.</span></span>
          </p>
          <div className='flex space-x-8'>
            <Button
              onClick={() => handleRedirect('es')}
              className='bg-secondary text-primary-foreground hover:bg-secondary/90 transform transition-transform duration-200 hover:scale-105 p-5 shadow-2xl text-3xl rounded-2xl'
            >
              {CONTENT.buttonTextEN}
            </Button>
            {/* <div className='border-2'></div>
            <Button
              onClick={() => handleRedirect('en')}
              className='bg-secondary text-primary-foreground hover:bg-secondary/90 transform transition-transform duration-200 hover:scale-105 p-5 shadow-2xl text-3xl rounded-2xl'
            >
              {CONTENT.buttonTextEN}
            </Button> */}
          </div>
        </HeroSection>

        </div>
        <HeroImage alt='Mostla Logo' />
        <div className='flex flex-row mt-8 justify-between'>
          <img
            src='IFE_CONFERENCE.png'
            alt='Mostla Logo'
            className='w-80'
          />
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
