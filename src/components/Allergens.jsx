import React from 'react'
import Egg from "../assets/egg.png"
import Fish from "../assets/fish.png"
import Gluten from "../assets/gluten.png"
import Lactose from "../assets/lactose.png"
import Mollusk from "../assets/mollusk.png"
import Nuts from "../assets/nuts.png"
import Soy from "../assets/soy.png"

const Allergens = ({ data }) => {

    let allers = []

    if (data.egg) allers.push(Egg);
    if (data.fish) allers.push(Fish);
    if (data.gluten) allers.push(Gluten);
    if (data.lactose) allers.push(Lactose);
    if (data.mollusk) allers.push(Mollusk);
    if (data.nuts) allers.push(Nuts);
    if (data.soy) allers.push(Soy)


    return (
        <div className=' flex gap-1 align-middle'>
            <p>Allergens:</p>
            {allers.map((pic,i) => <img key={"c"+i} src={pic} />)}
        </div>
    )
}

export default Allergens
