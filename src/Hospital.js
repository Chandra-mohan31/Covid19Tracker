import React from "react";
import "./Hospital.css";
export default class Hospital extends React.Component{
    state ={
        loading: true,
        hospData: null
        
    };
    async componentDidMount(){
         const url="https://api.rootnet.in/covid19-in/hospitals/beds";
         const response = await fetch(url);
         const data=await response.json();
         this.setState({hospData:data.data,loading:false})
         console.log(data);
    }
    render(){
        return(
            <div className="hospital">
               {this.state.loading || !this.state.hospData ? (
                   <h1>loading.....</h1>
               ):(
                   <div className="hospData">
                   <h1>HOSPITALS DATA</h1>
                   <table className="hospData__table">
                   <tr >
                      <td><h3>STATE</h3></td>
                      <td><h3>RURAL HOSPITALS</h3></td>
                      <td><h3>RURAL BEDS</h3></td>
                      <td><h3>URBAN HOSPITAL</h3></td>
                      <td><h3>URBAN BEDS</h3></td>
                      <td><h3>TOTAL HOSPITALS</h3></td>
                      <td><h3>TOTAL BEDS</h3></td>

                   </tr>
                   {this.state.hospData.regional.map(({state,ruralHospitals,ruralBeds,urbanHospitals,urbanBeds,totalHospitals,totalBeds,asOn})=>(
                  <tr className="hosp__table">  
                  <td>{state}</td>
                  <td>
                     {ruralHospitals}  
                  </td>
                  <td>
                     {ruralBeds}  
                  </td>
                  <td>
                     {urbanHospitals}  
                  </td>
                  <td>
                     {urbanBeds}  
                  </td>
                  <td>
                     {totalHospitals}  
                  </td>
                  <td>
                     {totalBeds}  
                  </td>

              </tr>
              
          ))}</table>
                          
          
                        
                  
                   </div>
               )}
                
            </div>
        )
    }
}
