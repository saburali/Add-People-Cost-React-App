import React from 'react';
import './downHeader.css';
import bgImg from '../../assets/images/banner.jpg';

const DownHeader = () => {
    return (
        <div className="down-header">
            <div className="imgBG" style={{backgroundImage: "url(" + bgImg + ")"}}></div>
            <div className="app-container" style={{display: 'flex'}}>
                <div className="down-content">
                    <h2 className="title"><span style={{fontWeight: '300'}}> Welcome to </span> Tech in
                        Asia <br/> Conference 2021 </h2>
                    <div className="content">
                        <div style={{textAlign: 'left'}}>
                            <h3> Project Budget $259M </h3>
                            <p> 12-14 OCTOBER 2021 </p>
                            <p> Learn how to harness Southeast Asia's booming tech and startup ecosystem at Tech in Asia
                                Conference 2021. </p>
                            <p style={{marginBottom: '0'}}> This application was created for project purposes only.
                                Please don't take it seriously. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownHeader;