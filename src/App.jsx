import { useState } from 'react'
import './App.css'
import HeadlineTag from './head/nav'
import WebsiteNavBar from './head'
import Fraction from './contentboard'
import AllUsers from './portion'
// import FooterPart from './FooterPage/FooterPart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <WebsiteNavBar />

        <Fraction />

        <AllUsers />
      </div>
    </>
  )
}

export default App