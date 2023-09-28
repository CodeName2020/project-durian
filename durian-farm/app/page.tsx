'use client'
import React from 'react'
import { AuthContextProvider } from './context/AuthContext'
import { Route, Routes } from 'react-router-dom'
import PublicRoute from './routes/publicRoute'
import Signup from './signup/page'
import PrivateRoute from './routes/privateRoute'
import Farm from './farms/page'
import Detail from './detail/page'

function App() {

  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={
            <PrivateRoute>
              <Farm />
            </PrivateRoute>
          }
          />

          <Route
            path='/signup'
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />

          <Route path='/detail'
            element={
              <PrivateRoute>
                <Detail />
              </PrivateRoute>
            }
          />

        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App
