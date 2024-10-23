import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { Card, CardContent } from '../components/ui/card.tsx'
import { Button } from '../components/ui/button.tsx'

// Constants
const CONTENT = {
  title: 'Bienvenido a Mostla',
  buttonText: '¿Quieres saber más? ¡Haz clic aquí!',
  imagePath: '../assets/moslo.gif',
  nextRoute: 'https://ddna-tec-de-monterrey52cb--prueba-mostla.soului.dh.soulmachines.cloud/?sig=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3Mjk3MDczODYsImlzcyI6InNpZ25lZF91cmwtY2Y4Njk4NjQtNmYxNS00NDIzLTk4Y2EtMmM5MzhlYWIyODUzIiwiZXhwIjoxODE2MDIwOTg2LCJlbWFpbCI6InRlYy1kZS1tb250ZXJyZXk1MmNiLS1wcnVlYmEtbW9zdGxhQGRkbmEuc3R1ZGlvIiwic291bElkIjoiZGRuYS10ZWMtZGUtbW9udGVycmV5NTJjYi0tcHJ1ZWJhLW1vc3RsYSJ9.wfwTzixVKE5XjL3sOvJOnJ0L8ZfaxdbZycwEr7oZyGk'
}

// Hero Section Component
const HeroSection = ({
  title,
  children
}) => (
  <Card className='bg-transparent border-none shadow-none'>
    <CardContent className='flex flex-col items-center space-y-8'>
      <h1 className='text-4xl md:text-6xl font-bold text-white'>{title}</h1>
      {children}
    </CardContent>
  </Card>
)

// Hero Image Component
const HeroImage = ({
  alt
}) => (
  <img
    src={require('../assets/moslo.gif')}
    alt={alt}
    className='rounded-lg shadow-lg w-full object-cover h-[480px]'
  />
)

// Main Landing Page Component
export default function LandingPage () {
  const handleRedirect = () => {
    window.location.href = CONTENT.nextRoute
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-primary from-30% to-primary-foreground'>
      <main className='w-full max-w-4xl mx-auto px-4'>
        <HeroSection title={CONTENT.title}>
          <HeroImage
            src={CONTENT.imagePath}
            alt='Animated Content'
          />
          <Button
            onClick={handleRedirect}
            size='4xl'
            className='bg-secondary text-secondary-foreground hover:bg-secondary/90 transform transition-transform duration-200 hover:scale-105 p-5 rounded-full shadow-2xl'
          >
            {CONTENT.buttonText}
          </Button>
        </HeroSection>
      </main>
    </div>
  )
}
