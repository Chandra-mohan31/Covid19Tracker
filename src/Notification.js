import React from "react";
import "./Notification.css";
export default class Notifications extends React.Component{
    state ={
        loading: true,
        notesData: null,
        
    };
    async componentDidMount(){
         const url="https://api.rootnet.in/covid19-in/notifications";
         const response = await fetch(url);
         const data=await response.json();
         this.setState({notesData:data.data,loading:false})
         console.log(data);
         
    }
    render(){
        return(
            <div className="notescases">
               {this.state.loading || !this.state.notesData ? (
                   <h1>loading.....</h1>
               ):(
                   <div className="notesData">
                   <h1>NOTIFICATIONS AND ADVISORY</h1>
                   
                    
                   <tr className="notesData__title">
                       <td>TITLE</td>
                       <td>LINK</td>
                   </tr>
                   {this.state.notesData.notifications.map(({title,link})=>(
                  <tr className="notification__table">  
                  <td>{title}</td>
                  <td>
                     <a href={link} target="blank"><button className="btn__link">LINK</button></a>  
                  </td>
              </tr>
          ))}
                          
          
                        
                  
                   </div>
               )}
                
            </div>
        )
    }
}