const Sidebar = ({data, changeTab}) => {
    let paint = {
        backgroundColor: "var(--dark)",
        color: "var(--pink)",
    }

    let noPaint = {
        backgroundColor: "transparent",
        color: "white",
        border: "solid 2px var(--pink)",
        borderRadius: "30px"
    }

    const buttons = data.map(item => {
        return(
            <button 
                onClick={()=> {changeTab(item.id)}} 
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
            {buttons}
        </section>
    )
}

export default Sidebar;