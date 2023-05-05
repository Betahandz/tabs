import { AiFillBug } from "react-icons/ai"

const Content = ({data, loading}) => {
    let {experience, job, start, to, list} = data;
    let styling = {
        transform: "translate(1000px)"
    }
    let normal = {
        transform: "translate(0px)"
    }
    return(
        <section className="content">
            <h2 className="job" style={loading ? styling : normal}>{job}</h2>
            <span className="xp" style={loading ? styling : normal}>{experience}</span>
            <div className="duration" style={loading ? styling : normal}>
                <p className="start-date" >{start}</p>
                <p>-</p>
                <p className="end-date">{to}</p>
            </div>
            <section className="operation" style={loading ? styling : normal}>
                {
                    list.map(item => <p key={item.id}><AiFillBug /> {item.text}</p>)
                }
            </section>
            <button style={loading ? styling : normal}>More Info</button>
        </section>
    )
}

export default Content;