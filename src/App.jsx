import React from 'react';
import Cards from './components/cards'
import Header from './components/header'
import {nanoid} from "nanoid"

export default function App(){

  const[darkmode,setdarkMode]=React.useState(false)

  function toggleDarkMode(){
    setdarkMode(prevmode=>!prevmode)
    
    }

    const[card,setCard]=React.useState([])

    React.useEffect(function(){
      fetch("http://shibe.online/api/shibes?count=50")
      .then(res=>res.json())
      .then(data=>setCard(data))
      
  },[])
   
   const cards=card
   
  const FinalCard=cards.map((item,index)=>{
    return(
      <Cards 
            //  key={item.correct_answer}
            key={index}
            item={item}
            darkmode={darkmode}
            togglerdarkmode={toggleDarkMode}
            
      />
    )},[]);

    function response(){
      return(
        console.log(item)
      )
    }
   
  
  return(
    
    <div className={darkmode?"dark":"container"}>
      <Header 
      darkmode={darkmode}
      togglerdarkmode={toggleDarkMode}
      />
      
      <div className="Show_Cards">
      {FinalCard}

      </div>
      
    </div>
    
    
  )
}