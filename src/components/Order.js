
const Order = ({img, whatIs, options, direction, spaceing}) =>{
    const arr =options;
    const newArr = arr.map((e, i)=> <p key={i}>{e[0]} <span>{e[1]}</span> {e[2]} {e[3]?<span>{e[3]}</span>: null}</p>)   
    
    return(
        <div className='order' style={{flexDirection: direction, justifyContent: spaceing}}>
          <img src={img} alt={whatIs} ></img>
          <div className='options'>
              <h3>{whatIs}</h3>
              {newArr}
              <button className='orderNow'>ORDER NOW</button>
          </div>
      </div>
    )
}

export default Order;