import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './components/Home/Home'
import PatientProfile from './components/PatientProfile/PatientProfile'
import HospitalsPage from './components/Hospitals/HospitalsPage'
import NgoFunding from './components/NgoFunding/NgoFunding'
import AiModel from './components/AiModel/AiModel'
import DiseasePage from './components/Diseases/DiseasePage'
import Login from './components/Login/Login'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='patientProfile/:username' element={<PatientProfile/>}/>
      <Route path='hospitals' element={<HospitalsPage/>}/>
      <Route path='ngoFunding' element={<NgoFunding/>}/>
      <Route path='diseases' element={<DiseasePage/>}/>
      <Route path='aiModel' element={<AiModel/>}/>
      <Route path='login' element={<Login/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)