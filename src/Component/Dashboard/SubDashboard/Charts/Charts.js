import React,{Component} from 'react';
import { Responsive } from 'semantic-ui-react'
import './Charts.css';

import Card from '../../../Common/Card/Card';

// const Charts = props => {
const cards = [
        {
            size: 'small',
            cardName: 'NPS',
            aux: 'img',
            img: 'nps',
            type: 'keyMatrix',
            status: 'enable',
            chartType:'',
        },
        {
            size: 'small',
            cardName: 'Repeat Visit (%)',
            aux: 'img',
            img: 'repeat_visit',
            type: 'keyMatrix',
            status: 'enable',
            chartType:'',
        },
        {
            size: 'small',
            cardName: 'Compliance (%)',
            aux: 'img',
            img: 'compliance',
            type: 'keyMatrix',
            status: 'enable',
            chartType:'',
        },
        {
            size: 'small',
            cardName: 'Visitation',
            aux: 'img',
            img: 'visitation',
            type: 'keyMatrix',
            status: 'disable',
            chartType:'',
        },
        {
            size: 'small',
            cardName: 'Spend (SAR)',
            aux: 'img',
            img: 'spend',
            type: 'keyMatrix',
            status: 'disable',
            chartType:'',
        },
        {
            size: 'large',
            cardName: 'Satisfaction & Compliance Landerboard (%)',
            aux: 'select',
            type: 'chart',
            status: 'disable',
            chartType:'',
        },
        {
            size: 'medium',
            cardName: 'CSAT by Driver (%)',
            aux: '',
            type: 'chart',
            status: 'disable',
            chartType:'',
        },
        {
            size: 'superlarge',
            cardName: 'CSAT by Offering (%)',
            aux: '',
            type: 'chart',
            status: 'disable',
            chartType:'',
        },
        {
            size: 'superlarge',
            cardName: 'Key Initiatives',
            aux: '',
            type: 'chart',
            status: 'disable',
            chartType:'',
        },
];
const Charts = props => {  
    let chartClasses = 'chartDiv' ;
    if(props.chartHandler){  
        chartClasses = 'chartDiv widthChange' ;
    }
    return  (
        <>
            <Responsive {...Responsive.onlyComputer } className={chartClasses}>
                <div className="grid-container">
                    {cards.map(card => (
                        <Card key={card.cardName} data={card}/> 
                    ))}
                </div>
            </Responsive>
            <Responsive {...Responsive.onlyTablet} className={chartClasses}>
                <div className="grid-container">
                    {cards.map(card => (
                        <Card key={card.cardName} size={card.size} cardName={card.cardName}/> 
                    ))}
                </div>
            </Responsive>
            <Responsive {...Responsive.onlyMobile } className="chartDivMob">
                <div className="grid-container">
                    {cards.map(card => (
                        <Card key={card.cardName} size='large' cardName={card.cardName}/> 
                    ))}
                </div>
            </Responsive>
        </>
    );
}

export default Charts