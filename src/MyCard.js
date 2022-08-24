export const MyCard = (props) => {
    // console.log(props)
    return(
        <div className="mycard shadow col-3">
            <img src={`https://robohash.org/${props.id}?size=200x200`} alt='robot_person'/>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    )
}
