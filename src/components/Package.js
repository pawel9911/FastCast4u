const Package = ({name, height, forWho, price}) =>{
    const desciription = forWho;
    return(
        <div className='package' style={{height: height}}>
            <h3>{name}</h3>
            <div className='packagePrice'>{price}</div>
            {desciription.map((e, i)=> <p key={i}>{e}</p>)}
            <span>5</span>
            <button>GET NOW</button>
        </div>
    )
}

export default Package;