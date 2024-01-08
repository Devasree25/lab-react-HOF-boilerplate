import React from "react"

function higherOrderComponent(){

}

class HigherOrderComponent extends React.Component{
    constructor(){
        super();
        this.state ={
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
            
        }

    }

    
   //progression 2
    renderItems() {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
                {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
    return mapRows;
        
 }
  renderbyUserType =() =>{
    const data =  this.state.userData;
    const filteredByType = data.filter((item)=>{
        return item.user_type === "Designer"
    })
    
    const mapRows = filteredByType.map((item) => (
    <React.Fragment key={item.id}>
        <li className="list-elements">
            {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
       </li>
    </React.Fragment>
));
return mapRows;
}


// progression 4
  renderDatawithLetterJ = ()=>{
    const data =  this.state.userData;
    const filteredByLetter = data.filter((item)=>{
        return item.name[0] === "J"
    })
    
    const mapRows = filteredByLetter.map((item) => (
    <React.Fragment key={item.id}>
        <li className="list-elements">
            {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
       </li>
    </React.Fragment>
  ));
return mapRows;
}
//progression 5
  renderDataByAge = ()=>{
    const data = this.state.userData;
    const filterbyage = data.filter((item)=>{
      return item.age > 28 && item.age<=50
   })
   const mapRows = filterbyage.map((item)=>(
    <React.Fragment key={item.id}>
        <li className="list-elements">
            {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
       </li>
    </React.Fragment>
  ));
return mapRows;
}

render(){
    return(
        <div className="parent">
             <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
        <ul>{this.renderItems()} </ul>
        </div>
      </React.Fragment>
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
        <ul>{this.renderbyUserType()} </ul>
        </div>
      </React.Fragment>
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
        <ul>{this.renderDatawithLetterJ()} </ul>
        </div>
      </React.Fragment>
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
        <ul>{this.renderDataByAge()} </ul>
        </div>
      </React.Fragment>
        </div>
    
    )
}

   

}



  
 

export default HigherOrderComponent;