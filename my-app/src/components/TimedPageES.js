import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function TimedPageES () {
  const [timeLeft, setTimeLeft] = useState(300)
  const navigate = useNavigate()

  useEffect(() => {
    const initWidget = () => {
      if (window.SOULMACHINES_WIDGET) {
        window.SOULMACHINES_WIDGET.init()
      }
    }

    window.addEventListener('load', initWidget)

    return () => {
      window.removeEventListener('load', initWidget)
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)

    if (timeLeft === 0) {
      clearInterval(timer)
      navigate('/')
    }

    return () => clearInterval(timer)
  }, [timeLeft, navigate])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <>
      <Helmet>
        <script
          src="https://static.soulmachines.com/widget-snippet-1.12.0.min.js"
          data-sm-api-key="eyJzb3VsSWQiOiJkZG5hLW1vc3RsYS10ZWMtb3JnMTgxMi0tZXhwbG9yZXIiLCJhdXRoU2VydmVyIjoiaHR0cHM6Ly9kaC5zb3VsbWFjaGluZXMuY2xvdWQvYXBpL2p3dCIsImF1dGhUb2tlbiI6ImFwaWtleV92MV80ZTljMjJhYy1kNWM4LTRhZjctOTczOS05NDkyZTIyZGI0NTIifQ=="
          data-sm-greeting="Welcome to IFE Conference"
          data-sm-layout="fullFrame"
          data-sm-position="bottomRight"
          data-sm-profile-picture="moslo.gif"
          async
          onLoad={() => {
            if (window.SOULMACHINES_WIDGET) {
              window.SOULMACHINES_WIDGET.init()
            }
          }}
        />
      </Helmet>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4 text-blue-500">Timed Page</h1>
        <p className="text-xl mb-8 text-gray-700">
          Time remaining: {minutes}:{seconds < 10 ? '0' : ''}{seconds}
        </p>
      </div>
    </>
  )
}
