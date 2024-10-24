import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'

function App() {
  // Using State to change the credit 
  const [claimCredit, setClaimCredit] = useState(0);

  // Making handler for credit btn in banner
  

  

  return (
    <>
  



      <Header></Header>
      <Banner></Banner>
    </>
  )
}

export default App
