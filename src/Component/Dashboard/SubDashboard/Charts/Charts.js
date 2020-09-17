import React,{Component} from 'react';
import { Responsive } from 'semantic-ui-react'
import './Charts.css';

import Card from '../../../Common/Card/Card';

const Charts = props => {  
    
    let chartClasses = 'chartDiv' ;
    if(props.chartHandler){  
        chartClasses = 'chartDiv widthChange' ;
    }
    return  (
        <>
            <Responsive {...Responsive.onlyComputer } className={chartClasses}>
                <div className="grid-container">
                    {props.cards.map(card => (
                        <Card key={card.cardName} size={card.size} data={card}/> 
                    ))}
                </div>
            </Responsive>
            <Responsive {...Responsive.onlyTablet} className={chartClasses}>
                <div className="grid-container">
                    {props.cards.map(card => (
                        <Card key={card.cardName} size={card.size} data={card}/> 
                    ))}
                </div>
            </Responsive>
            <Responsive {...Responsive.onlyMobile } className="chartDivMob">
                <div className="grid-container">
                    {props.cards.map(card => (
                        <Card key={card.cardName} size='superlarge' data={card}/> 
                    ))}
                </div>
            </Responsive>
        </>
    );
}

export default Charts