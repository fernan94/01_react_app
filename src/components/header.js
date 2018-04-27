import React from 'react';
import '../css/styles.css'



class Header extends React.Component {

   
        state = {
            
            keywords:''

        }
    
   
  
   
   
    //Gets the value of the event 
    inputChangeHandler = (event) =>{
        //console.log(event.target.value)
        this.setState({
            keywords:event.target.value
        })
    }
   
   
    render(){
   
        
        return (
        <header>
        <div 
        className="logo"
       
        
        >Logo</div>
        <input type="text"
         onChange={ this.inputChangeHandler}/>
        
        </header> 

     )
    }

} 

 


export default Header;