import React from 'react'

//function CFooter(){
 //   let date = new Date();
 //   return (
 //   <h5>PPFrond-end, przykładowy serwis React. Dzisiaj mamy: {date.toDateString()}</h5>
 //   )
//}


export const CFooter = () => {
    
    let date = new Date();
    return (
        <div>
    <h5>
    PPFrond-end, przykładowy serwis React. Dzisiaj mamy:{" "} {date.toDateString()}{" "}
    </h5>
        </div>
    );
}
    

//export default CFooter

