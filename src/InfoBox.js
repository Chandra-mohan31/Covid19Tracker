import React from 'react';
import "./InfoBox.css";
import {Card,CardContent,Typography} from "@material-ui/core";



function InfoBox({title,cases,active,isRed,isGreen,total,...props}) {
    return (
        <div>
        <Card
           onClick={props.onClick}
           className={ `infoBox ${active && "infoBox--selected"} ${isRed && "infoBox--red"} ${isGreen && active && "infoBox--green"} `} 
           >
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>
                <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>{cases}</h2>
                <Typography  className="infoBox__total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
            
        </div>
    )
}

export default InfoBox
