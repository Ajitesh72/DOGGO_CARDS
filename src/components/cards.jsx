import React from "react"

export default function header(props){
    console.log(props.item)

    return(
        
            <img src={props.item} alt="" className={props.darkmode?"dark_DOGEE":"DOGEE"} />
        
        
    )
}