import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';

import "../scss/panel.scss"
import { useState } from 'react';
import { useResolvedPath } from 'react-router-dom';
function PanelItem({ children, text, close = false, classes = "" }) {
    return (
        <div className={`panel-item ${classes}`}>
            <span className='icon'>
                {children}
            </span>
            <span className={`text ${close ? "close" : "open"}`}>
                {text}
            </span>
        </div>
    )
}
export default function Panel() {
    const [closed, setClosed] = useState(false)
    const res = useResolvedPath();
    console.log(res.pathname);
    return (
        <div className="panel">
            <PanelItem close={closed} text={""}>
                <MenuIcon fontSize='large' onClick={(_) => { setClosed(!closed) }} className='menu' />
            </PanelItem>
            <PanelItem text={"Home"} close={closed} classes='nav'>
                <HomeIcon />
            </PanelItem>
            <PanelItem text="Users" close={closed} classes='nav'>
                <PersonIcon />
            </PanelItem>
            <PanelItem text={"Roles"} close={closed} classes='nav'>
                <GroupAddIcon />
            </PanelItem>
            <PanelItem text={"Tickets"} close={closed} classes='nav'>
                <ConfirmationNumberIcon />
            </PanelItem>
            <PanelItem text={""} close={closed} classes='profile'>
                <AccountCircleIcon fontSize='large' className={"icon-item"}/>
            </PanelItem>
            <PanelItem text={""} close={closed}>
                <SettingsIcon fontSize='large' className={"icon-item"}/>
            </PanelItem>
        </div>


    )
}