import React from "react";
import Delete from "../assets/delete.svg"
import { UrlContext } from "../App";
import { useContext } from "react";
function ControlUser({ setRefresh,data }) {

    const turl = useContext(UrlContext)
    const url = turl.url

    async function deleteUser() {
        if(!confirm(`Do you really want to delete user with id: ${data.user_id} (${data.email})?`)) return
        const resp = await fetch(url + "/user/" + data.user_id,{
            method: "DELETE"
        })
        const json = await resp.json()
        setRefresh(Math.random())
    }

    return (
        <div className="flex gap-2 rounded-t-lg border-b-2 border-[#93e2ae] p-2 justify-between hover:border-[#355e3b] transition-all">
            <div className="flex gap-4">
                <span>id: {data.user_id}</span>
                <span>{data.first_name} {data.last_name}</span>
                <span>({data.role})</span>
                <span>Email: {data.email}</span>

            </div>
            <div>
                {data.role == "admin" ? "" :
                    <img onClick={() => deleteUser()} className="rounded-full p-1 hover:cursor-pointer hover:bg-[#93e2ae] transition-all" src={Delete} />
                }
            </div>
        </div>
    );
}

export default ControlUser;
