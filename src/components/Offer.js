import { useEffect, useState } from "react";
import Package from "./Package"

const Offer = () =>{
    const android = ['Android Smartphones','Android Tablets'];
    const androidIOS = ['Android Smartphones & Tablets', 'Apple iPhone & iPad'];
    const iOS = ['Apple iPhone', 'Apple iPad'];
    const [priceAndriod, setPriceAndriod] = useState (false);
    const [priceIos, setPricieIos] = useState(false);
    const [priceBundle, setPricieBundle] = useState(false);
    useEffect(()=>{
        fetch(`https://fastcast4u.com/api/getpricing/getPricing.php?pid=496`)
        .then(response => response.json())
        .then(data => setPriceAndriod(data.regular))
        fetch(`https://fastcast4u.com/api/getpricing/getPricing.php?pid=497`)
        .then(response => response.json())
        .then(data => setPricieIos(data.regular))
        fetch(`https://fastcast4u.com/api/getpricing/getPricing.php?pid=498`)
        .then(response => response.json())
        .then(data => setPricieBundle(data.regular))
    },[])
    return(
        <div>
            <div className='packages'>
                <Package name='Android App' forWho={android} price={priceAndriod}/>
                <Package name='Android & iOS App' height='450px' forWho={androidIOS} price={priceBundle}/>
                <Package name='iOS App'forWho={iOS} price={priceIos}/>
            </div>
        </div>
    )
}

export default Offer