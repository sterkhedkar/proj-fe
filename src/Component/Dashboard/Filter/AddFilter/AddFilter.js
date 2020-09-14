import React from 'react'
import { Button, Modal, Grid, Dropdown } from 'semantic-ui-react';
import Add from '../../../../assets/imgs/add.svg';

function exampleReducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true, size: action.size, dimmer: action.dimmer }
    case 'CLOSE_MODAL':
      return { open: false }
    default:
      throw new Error()
  }
}


const friendOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano'
  },
  {
    key: 'Christian',
    text: 'Christian',
    value: 'Christian',
  },
  {
    key: 'Matt',
    text: 'Matt',
    value: 'Matt',
  },
  {
    key: 'Justen Kitsune',
    text: 'Justen Kitsune',
    value: 'Justen Kitsune',
  },
]

// function AddFilter() {
const AddFilter = props => {
  const initialFormData = {
    destination: "",
    sourceMarket: "",
    offering: "",
    travelGroup: "",
    segment: "",
    incomeLevel: "",
    timeRange: "",
    age: ""
  };

  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
    dimmer: undefined,
  });
  const { open, size, dimmer } = state;

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    if(e.target.parentElement.getAttribute('name')){
      formData[e.target.parentElement.getAttribute('name')] = "";
    }else{
      formData[e.target.parentElement.parentElement.getAttribute('name')] =  e.target.firstChild ? e.target.firstChild.innerHTML : '';
    }
  };

  const handleSubmit = () => {
    let senddata = {};
    Object.keys(formData).map((key) => {
      if(formData[key] ? formData[key].length != 0 : false)
        senddata[key] = formData[key];
    });
    props.getFilterData(senddata); 
    dispatch({ type: 'CLOSE_MODAL' });
  };
  
  if(Object.keys(props).length > 1){
    Object.keys(formData).map((key) => {
      if(typeof props[key] === 'string'){
        formData[key] = props[key];
      } else { 
        formData[key] = '';
      }
    });
  }

  return (
    <>
        <a 
            circular 
            onClick={() => dispatch({ type: 'OPEN_MODAL', size: 'small', dimmer: 'blurring' })}>
            <img src={Add} alt="add filter" width="23"/>
        </a>

      <Modal
        dimmer={dimmer}
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
      >
        <Modal.Header>Filter By</Modal.Header>
                <Modal.Content>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Dropdown clearable fluid placeholder='Destination City' selection options={friendOptions} name="destination" onChange={handleChange} defaultValue={formData.destination}/>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Dropdown clearable fluid placeholder='Source Market' selection options={friendOptions} name="sourceMarket" onChange={handleChange} defaultValue={formData.sourceMarket}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Dropdown clearable fluid placeholder='Offering' selection options={friendOptions} name="offering" onChange={handleChange} defaultValue={formData.offering}/>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Dropdown clearable fluid placeholder='Travel Group' selection options={friendOptions} name="travelGroup" onChange={handleChange} defaultValue={formData.travelGroup}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Dropdown clearable fluid placeholder='Segment' selection options={friendOptions} name="segment" onChange={handleChange} defaultValue={formData.segment}/>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Dropdown clearable fluid placeholder='Income Level' selection options={friendOptions} name="incomeLevel" onChange={handleChange} defaultValue={formData.incomeLevel}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Dropdown clearable fluid placeholder='Time Range' selection options={friendOptions} name="timeRange" onChange={handleChange} defaultValue={formData.timeRange}/>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Dropdown clearable fluid placeholder='Age' selection options={friendOptions} name="age" onChange={handleChange} defaultValue={formData.age}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
                <Modal.Actions>
                    <Button  basic color='blue' onClick={() => dispatch({ type: 'CLOSE_MODAL' })} >Cancel</Button>
                    <Button primary onClick={handleSubmit}> Apply </Button>
                </Modal.Actions>
        </Modal>
    </>
  )
}

export default AddFilter
// onClick={() => dispatch({ type: 'CLOSE_MODAL' })}