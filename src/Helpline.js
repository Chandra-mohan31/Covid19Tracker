import React from "react";
import "./Helpline.css";
export default class Helpline extends React.Component{
    state ={
        loading: true,
        helpData: null
        
    };
    async componentDidMount(){
         const url="https://api.rootnet.in/covid19-in/contacts";
         const response = await fetch(url);
         const data=await response.json();
         this.setState({helpData:data.data,loading:false})
         console.log(data);
    }
    render(){
        return(
            <div className="helpline">
               {this.state.loading || !this.state.helpData ? (
                   <h1>loading.....</h1>
               ):(
                   <div className="helpData">
                   <h1>HELPLINE DATA</h1>
                   <tr>
                       <td><h1>STATE</h1></td>
                       <td><h1>CONTACT NUM</h1></td>
                   </tr>
                   {this.state.helpData.contacts.regional.map(({loc,number})=>(
                  
                  <tr className="help__table">
                    
                  <td>{loc}</td>
                  <td>
                     {number}  
                  </td>
             
              
              </tr>  
          ))}
                          
          
                        
                  
                   </div>
               )}
                
            </div>
        )
    }
}
