import React from 'react';
import './downHeader.css';
import bgImg from '../../assets/images/banner.jpg';

const DownHeader = () => {
    return (
        <div className="down-header">
            <div className="imgBG" style={{backgroundImage: "url(" + bgImg + ")"}}></div>
            <div className="app-container">
                <div className="down-content">
                    <h2 className="title"><span style={{fontWeight: '300'}}> Welcome to </span> Tech in
                        Asia <br/> Conference 2021 </h2>
                    <div className="content">
                        <div style={{textAlign: 'center'}}>
                            <h3> Project Budget $259M </h3>
                            <p style={{paddingBottom: '0'}}> 12-14 OCTOBER 2021 </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownHeader;