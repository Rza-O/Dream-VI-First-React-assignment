import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Toggle from './Components/Toggle/Toggle';
import AllPlayers from './Components/AllPlayers/AllPlayers';
import Selected from './Components/SelectedPlayers/Selected';

function App() {
  // All players data
  const [players, setPlayers] = useState([]);

  const addNewPlayerHandler = () => {
      setToggleActive(true)
      setPlayers(players);
  }

  useEffect(() => {
    fetch('./fakeData.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, []);

  // Using State to change the credit 
  const [claimCredit, setClaimCredit] = useState(0);

  // Making handler for credit btn in banner
  const handleSetCredit = () => {
    let newCredit = claimCredit + 10000000;
    setClaimCredit(newCredit);
  }

  // Selected Players data
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // Add Player Button handler
  const addPlayerBtnHandler = (player) => {
    if (selectedPlayers.length < 6){
      balanceUpdate(player.price);
      const newPlayer = [...selectedPlayers, player];
      setSelectedPlayers(newPlayer)
    }
    else{
      alert('Nuff bro')
    }
  }

  const balanceUpdate = (amount) => {
    if (amount < claimCredit){
      const updatedBalance = claimCredit - amount
      setClaimCredit(updatedBalance);
    }
    else{
      alert('you poor')
    }
  }

  // Toggle button feature
  const [toggleActive, setToggleActive] = useState(true);
  const handleToggle = (status) => {
    if (status == 'available'){
      setToggleActive(true);
    }
    else{
      setToggleActive(false);
      // setSelectedPlayers(selectedPlayers)
    }
  }
  

  return (
    <>
      <Header claimCredit={claimCredit}></Header>
      <Banner handleSetCredit={handleSetCredit}></Banner>
      <Toggle addNewPlayerHandler={addNewPlayerHandler} addPlayerBtnHandler={addPlayerBtnHandler} players={players} selectedPlayers={selectedPlayers} handleToggle={handleToggle} toggleActive={toggleActive}></Toggle>
      {/* <AllPlayers></AllPlayers>
      <Selected></Selected> */}
    </>
  )
}

export default App
