import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'
import NewsList from './components/new_list'
import JSON from './db.json';



class App extends React.Component{

     state = {
         news:JSON
     }


   render(){
    return (
    <div>
        
        <Header/> 
        <NewsList news = {this.state.news} />
        </div>)
   }


} 
    


ReactDOM.render(<App/>, document.querySelector('#root'));