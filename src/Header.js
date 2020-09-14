import React from 'react';
import "./Header.css";
import HomeIcon from '@material-ui/icons/Home';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import AssessmentIcon from '@material-ui/icons/Assessment';
import {Link} from "react-router-dom";
import PublicSharpIcon from '@material-ui/icons/PublicSharp';
import NotificationsActiveSharpIcon from '@material-ui/icons/NotificationsActiveSharp';
import LocalHospitalSharpIcon from '@material-ui/icons/LocalHospitalSharp';


function Header() {
    return (
        <nav className="Headr">
        
        <Link to="/">
        <div className="Headr__options">
            <HomeIcon />
            <h3>Covid 19 Updates</h3>
          </div>
        </Link>
        <Link to="/helpline">
        <div className="Headr__options">
            <ContactSupportOutlinedIcon />
            <h3>HelpLine/Contact</h3>
          </div>
        </Link>
        <Link to="/notifications_and_advisory">
        <div className="Headr__options">
            <NotificationsActiveSharpIcon />
            <h3>Notifications/Advisory</h3>
          </div>
        </Link>
        <Link to="/hospital_dashboard">
        <div className="Headr__options">
            <LocalHospitalSharpIcon />
            <h3>Hospital Dashboard</h3>
          </div>
        </Link>
        <Link to="/stats">
        <div className="Headr__options">
        <PublicSharpIcon />
          <h3>Statistics</h3>
        </div>
 
        </Link>
         


        </nav>
    )
}

export default Header
