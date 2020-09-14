import React from "react";
import "./TestStats.css";

export default class TestStats extends React.Component{
    state ={
        loading: true,
        testData: null,
        
    };
    async componentDidMount(){
         const url="https://api.rootnet.in/covid19-in/stats/testing/history";
         const response = await fetch(url);
         const data=await response.json();
         this.setState({testData:data.data,loading:false})
         console.log(data);
    }
    render(){
        return(
            <div className="testingData">
               {this.state.loading || !this.state.testData ? (
                   <h1>loading</h1>
               ):(
                   <div className="testingData__stats">
                   <table className="stats__tests">
                   <tr>
                        <td><h3>Day</h3></td>
                        <td><h3>TotalSamplesTested</h3></td>
                        <td><h3>TotalIndividualsTested</h3></td>
                        <td><h3>TotalPositiveCases</h3></td>
                        <td><h3>Source</h3></td>
                       
                   </tr>
                        {this.state.testData.map(({day,totalSamplesTested,totalIndividualsTested,totalPositiveCases,source})=>(
                        
                        <tr className="testStats__table">
                            
                        <td>{day}</td>
                        <td>{totalSamplesTested}</td>
                        <td>{totalIndividualsTested}</td>
                        <td>{totalPositiveCases}</td>
                        <td>{source}</td>
                        
             
              
              </tr> 
               
          ))}
          </table>
                          
          
                        
                        

                   </div>
               )}
                
            </div>
        )
    }
}