import React from "react";
import Classes from './MainHeader.module.css';
import Navigation from './Navigation';
const MainHeader = props =>{
    return(
        <header className={Classes['main-header']}>
            <h1>A Typical Page</h1>
            <Navigation />
        </header>
    );

};
export default MainHeader