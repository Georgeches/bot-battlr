function SelectedBots(props){
    function removeFromTeam(){
        let newTeam = props.selected.filter(bot=>bot.id!==props.bot.id)
        props.updateSelection(newTeam)
    }

    return(
        <>
        <li class="bot" onClick={removeFromTeam}>
            <img src={props.bot.avatar_url} alt="bot" height="250"/>
            <div className={props.bot.name}>
                <div className="bot-hover-info ">
                    <i class="las la-shield-alt"></i><i>{props.bot.armor}</i>
                    <i class="las la-heartbeat"></i><i>{props.bot.health}</i>
                    <i class="las la-heart-broken"></i><i>{props.bot.damage}</i>
                </div>
            </div>
            
            <div className="bot-info">
                <div class="short-info">
                    <p>{props.bot.name}</p>
                    <p>~{props.bot.bot_class}</p>
                </div>
                
                <p>{props.bot.catchphrase}</p>
            </div>
        </li>
        </>
        
    )
}

export default SelectedBots;