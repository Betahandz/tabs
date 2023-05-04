const Sidebar = ({data, handleClick}) => {
    let paint = {
        backgroundColor: "var(--dark)",
        color: "var(--pink)",
        // fontFamily: "lite",
    }
    let noPaint = {
        backgroundColor: "transparent",
        color: "white",
        border: "solid 2px var(--pink)",
        borderRadius: "30px"
    }
    const xp = data.map(item => {
        return(
            <button 
                onClick={()=> {handleClick(item.id)}} 
                key={item.id} 
                style={item.show ? paint : noPaint} 
                type="button" 
                className="btn">
               {item.experience}
            </button>

        )   
        })
    return (
        <section className="sidebar">
            {xp}
        </section>
    )
}

export default Sidebar;