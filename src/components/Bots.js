function Bots({bots,bot,updateBots,select,selected}){
    function addToTeam(){
        let numberIdentical = []
        for(let selectedBot of selected){
            if(selectedBot.id===bot.id){
                numberIdentical.unshift('identical')
            }
        }
        if(numberIdentical.length===0){
            select([...selected, bot])
        }
        else{
            alert('already added')
        }
    }

    return(
        <>

        <div onClick={addToTeam}>
            <li className="bot" >
                <img src={bot.avatar_url} alt="bot" height="250"/>
                <div className={bot.name}>
                    <div className="bot-hover-info ">
                        <i class="las la-shield-alt"></i><i>{bot.armor}</i>
                        <i class="las la-heartbeat"></i><i>{bot.health}</i>
                        <i class="las la-heart-broken"></i><i>{bot.damage}</i>
                    </div>
                </div>
                
                <div className="bot-info">
                    <div class="short-info">
                        <p>{bot.name}</p>
                        <p>~{bot.bot_class}</p>
                    </div>
                    
                    <p>{bot.catchphrase}</p>
                </div>
            </li> 
        </div>
        </>
    )
}

export default Bots;