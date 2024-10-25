import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Toggle from './Components/Toggle/Toggle';

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
    const newPlayer = selectedPlayers;
    const isExist = newPlayer.find((np) => np.playerId == player.playerId)
    if ( player.price > claimCredit) {
      alert('You poor')
    }
    else {
      if ( isExist ) {
        alert('already exist')
      }
      else {
        if (newPlayer.length < 6) {
          const updatePlayer = [...selectedPlayers, player];
          setSelectedPlayers(updatePlayer)
          balanceUpdate(player.price);
        }
        else {
          alert('nuff bro')
        }
        
      }
    }
  }
  // const addPlayerBtnHandler = (player) => {
  //   const newPlayer = selectedPlayers;
  //   const isExist = newPlayer.find((np) => np.playerId == player.playerId)
  //   if (isExist) {
  //     alert('already exist')
  //   }
  //   else {
  //     if (newPlayer.length < 6) {
  //       if (player.price < claimCredit) {
  //         const updatePlayer = [...selectedPlayers, player];
  //         setSelectedPlayers(updatePlayer)
  //         balanceUpdate(player.price);
  //       }
  //       else {
  //         alert('You poor')
  //       }
  //     }
  //     else {
  //       alert('nuff bro')
  //     }
  //   }
  // }

  const balanceUpdate = (amount) => {
    if (amount > claimCredit) {
      alert('you poor')
    }
    else {
      const updatedBalance = claimCredit - amount
      setClaimCredit(updatedBalance);
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
  
  // Remove button Functionality
  const deleteBtnHandler = (delPlayer) => {
    const updateSelection = selectedPlayers.filter((delP)=> delPlayer !== delP);
    setSelectedPlayers(updateSelection)
  }

  return (
    <>
      <Header claimCredit={claimCredit}></Header>
      <Banner handleSetCredit={handleSetCredit}></Banner>
      <Toggle deleteBtnHandler={deleteBtnHandler} addNewPlayerHandler={addNewPlayerHandler} addPlayerBtnHandler={addPlayerBtnHandler} players={players} selectedPlayers={selectedPlayers} handleToggle={handleToggle} toggleActive={toggleActive}></Toggle>
    </>
  )
}

export default App
