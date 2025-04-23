import React from "react";
import More from "../assets/more.svg"
import { Link } from "react-router-dom";


function ControlFood({data}) {

    return (
        <Link to={data.food_id+"/edit"} className="flex gap-2 rounded-t-lg border-b-2 border-[#93e2ae] p-2 justify-between hover:cursor-pointer hover:bg-[#93e2ae] hover:border-[#355e3b] transition-all">
            <div className="flex gap-4">
                <span>id: {data.food_id}</span>
                <span>{data.name}</span>
            </div>
            <div>
                <img src={More} />
            </div>
        </Link>
    );
}

export default ControlFood;
