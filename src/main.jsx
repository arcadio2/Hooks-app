import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './01-useState/CounterApp'
import { CounterCustomHook } from './01-useState/CounterCustomHook'
import { FormCustomHook } from './02-useEffect/FormCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { HooksApp } from './HooksApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <FormCustomHook></FormCustomHook>
    {/* <SimpleForm></SimpleForm> */}
    {/* <CounterCustomHook></CounterCustomHook> */}
   {/*  <CounterApp /> */}
   </>
)
