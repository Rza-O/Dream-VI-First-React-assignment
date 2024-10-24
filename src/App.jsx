import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Toggle from './Components/Toggle/Toggle';
import AllPlayers from './Components/AllPlayers/AllPlayers';

function App() {
  // Using State to change the credit 
  const [claimCredit, setClaimCredit] = useState(0);

  // Making handler for credit btn in banner
  const handleSetCredit = () => {
    let newCredit = claimCredit + 10000000;
    setClaimCredit(newCredit);
  }

  // Toggle button feature
  const [toggleActive, setToggleActive] = useState(true);
  const handleToggle = (status) => {
    if (status == 'available'){
      setToggleActive(true);
    }
    else{
      setToggleActive(false);
    }
  }
  

  return (
    <>
      <Header claimCredit={claimCredit}></Header>
      <Banner handleSetCredit={handleSetCredit}></Banner>
      <Toggle handleToggle={handleToggle} toggleActive={toggleActive}></Toggle>
      <AllPlayers></AllPlayers>
    </>
  )
}

export default App
