import React, {Component} from 'react'; 
import './Filter.css';
import { Grid, Button, Icon, Checkbox, Responsive, Form, Radio } from 'semantic-ui-react'
import AddFilter from './AddFilter/AddFilter';
import EventBus from '../,../../../Common/EventBus/EventBus';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterData: {},
        };    
        this.getFilterData = this.handleFilterData.bind(this);
    }

    state1 = {}
    handleChange = (e, { value }) => this.setState({ value });

    handleFilterData = (data) => {
        this.setState({filterData: data});
    }

    // sendFilterData = () => {
    //     props.sendData(this.state.filterData);
    // }

    clearAllFilter = () => {
        this.setState({filterData: {} });
    }
    clearFilter = (e) => {
        let filter = this.state.filterData;
        delete filter[e.target.parentElement.parentElement.firstChild.getAttribute('value')];
        this.setState({filterData: filter });
    }

    render(){
        const filterList = this.state.filterData.length != 0 ? this.state.filterData : {};
        let clearAll;
        if(Object.keys(filterList).length != 0){
            clearAll = <a className="clearbtn" onClick={this.clearAllFilter}>Clear All</a>
        }else clearAll ='';
        return (
            <>
                <Responsive {...Responsive.onlyComputer }>
                    <Grid className="filterDiv">
                    <Grid.Row>
                            <Grid.Column width={14} className="filter">
                                <p className="filterHead">Filter By :</p>
                                
                                <AddFilter getFilterData={this.handleFilterData} {...this.state.filterData}/>
                                <ul className="filterList">
                                    {Object.keys(filterList).map((key, i) => (
                                        <li key={i}>
                                            <span value={key}>{key} : </span> {filterList[key]}
                                            <a><Icon name='close' onClick={this.clearFilter}/></a>
                                        </li>
                                    ))}
                                </ul>
                                {clearAll}
                            </Grid.Column>
                            <Grid.Column width={2} className="toggleStyle">
                                <Form>
                                    <Form.Field>
                                        <Radio label='Int.' name='radioGroup' value='Int' checked={this.state1.value === 'Int'} onChange={this.handleChange}/>
                                    </Form.Field>
                                    <Form.Field className="dom">
                                        <Radio style={{padding:'0 5px'}} label='Dom.' name='radioGroup' value='Dom' checked={this.state1.value === 'Dom'} onChange={this.handleChange}/>
                                    </Form.Field>
                                    <Form.Field>
                                        <Radio defaultValue label='All' name='radioGroup' value='All' checked={this.state1.value === 'All'} onChange={this.handleChange}/>
                                    </Form.Field>
                                </Form>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyTablet }>
                    <Grid className="filterDiv">
                        <Grid.Row>
                            <Grid.Column width={14} className="filter">
                                <p className="filterHead">Filter By :</p>
                                
                                <AddFilter getFilterData={this.handleFilterData} {...this.state.filterData}/>
                                <ul className="filterList">
                                    {Object.keys(filterList).map((key, i) => (
                                        <li key={i}>
                                            <span value={key}>{key} : </span> {filterList[key]}
                                            <a><Icon name='close' onClick={this.clearFilter}/></a>
                                        </li>
                                    ))}
                                </ul>
                                {clearAll}
                            </Grid.Column>
                            <Grid.Column width={2} className="toggleStyle">
                                <Form>
                                    <Form.Field>
                                        <Radio label='Int.' name='radioGroup' value='Int' checked={this.state1.value === 'Int'} onChange={this.handleChange}/>
                                    </Form.Field>
                                    <Form.Field className="dom">
                                        <Radio style={{padding:'0 5px'}} label='Dom.' name='radioGroup' value='Dom' checked={this.state1.value === 'Dom'} onChange={this.handleChange}/>
                                    </Form.Field>
                                    <Form.Field>
                                        <Radio defaultValue label='All' name='radioGroup' value='All' checked={this.state1.value === 'All'} onChange={this.handleChange}/>
                                    </Form.Field>
                                </Form>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyMobile }>
                    <Grid className="filterDiv">
                        <Grid.Row>
                            <Grid.Column className="toggleStyle">
                                <Form>
                                    <Form.Field>
                                        <Radio label='Int.' name='radioGroup' value='Int' checked={this.state1.value === 'Int'} onChange={this.handleChange}/>
                                    </Form.Field>
                                    <Form.Field className="dom">
                                        <Radio style={{padding:'0 5px'}} label='Dom.' name='radioGroup' value='Dom' checked={this.state1.value === 'Dom'} onChange={this.handleChange}/>
                                    </Form.Field>
                                    <Form.Field>
                                        <Radio defaultValue label='All' name='radioGroup' value='All' checked={this.state1.value === 'All'} onChange={this.handleChange}/>
                                    </Form.Field>
                                </Form>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column className="filter mob">
                                <p className="filterHead">Filter By :</p>
                                
                                <AddFilter getFilterData={this.handleFilterData} {...this.state.filterData}/>
                                <ul className="filterList">
                                    {Object.keys(filterList).map((key, i) => (
                                        <li key={i}>
                                            <span value={key}>{key} : </span> {filterList[key]}
                                            <a><Icon name='close' onClick={this.clearFilter}/></a>
                                        </li>
                                    ))}
                                </ul>
                                {clearAll}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Responsive>
            </>
        );
    }
}
export default Filter
// {filterList.map(filter => (
//     <li key={filter.name}>
//         <span>{filter.name } : </span> {filter.value}
//         <a><Icon name='close' /></a>
//     </li>
// ))}