import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../../presentation/pages/home'
import { Payment } from '../../presentation/pages/payment'
import { Card } from '../../presentation/pages/card'
import { Invoice } from '../../presentation/pages/invoice'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/card' element={<Card />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/invoice' element={<Invoice />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router