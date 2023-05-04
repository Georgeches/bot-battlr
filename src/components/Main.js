import Bots from "./Bots"
import SelectedBots from "./SelectedBots";
import { useState, useEffect } from "react";

function Main(){
    const screenHeight = window.screen.height
    const screenWidth = window.screen.width

    const selectionDiv={
        height: (screenHeight*0.73).toString() + 'px',
        width: (screenWidth*0.6).toString()+'px'
    }

    const listDiv={
        height: (screenHeight*0.73).toString() + 'px',
        width: (screenWidth*0.3).toString()+'px'
    }

    const [selectedBots, selectBots] = useState([])
    const [bots, updateBots] = useState([]) 
    useEffect(()=>{
        fetch('http://localhost:4000/bots')
        .then(res=>res.json())
        .then(data=>updateBots(data))
    },[])
    console.log(bots)

    function handleDelete(bot){
        fetch(`http://localhost:4000/bots/${bot.id}`,{
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(deletedBot=>console.log(deletedBot))
        let newArmy = bots.filter(thisbot=>thisbot.id!==bot.id)
        let newSelectedArmy = selectedBots.filter(selectedBot=>selectedBot.name!==bot.name)
        updateBots(newArmy)
        selectBots(newSelectedArmy)
    }

    return(
        <main>
            <div className="all-bots" style={selectionDiv}>
                <div className="div-header">
                    <h2>Choose your team</h2>
                </div>
                <ul className="all-list">
                    {bots.map(bot=><div class="list-body"><button onClick={()=>handleDelete(bot)}>X</button>
                                    <Bots select={selectBots} selected={selectedBots} bots={bots} bot={bot} updateBots={updateBots}/>
                                   </div>
                            )}
                </ul>
            </div>

            <div className="selected-bots" style={listDiv}>
                <div className="div-header">
                    <h2>Your team</h2>
                </div>
                <ul className="selection-list">
                    {selectedBots.map(bot=><SelectedBots selected={selectedBots} updateSelection={selectBots} bot={bot}/>)}
                </ul>
            </div>
        </main>
    )
}

export default Main;