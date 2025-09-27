import React from "react";

export default function Clickme({plus,minus}){
    return(
        <>
            <button onClick={plus}>Plus</button>
            <button onClick={minus}>Minus</button>
        </>
    )
}
