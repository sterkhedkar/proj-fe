import React from 'react';
import '../Leaderboard.css';
import _ from 'lodash';
import { Table } from 'semantic-ui-react';
import ProgressLeaderboard from '../../../Common/ProgressLeaderboard/ProgressLeaderboard';
import DeltaPositive from '../../../../assets/imgs/card/deltaPositive.svg';
import DeltaNegative from '../../../../assets/imgs/card/deltaNegative.svg';

function dataReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_SORT':
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.reverse(),
          direction:
            state.direction === 'ascending' ? 'descending' : 'ascending',
        }
      }

      return {
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: 'ascending',
      }
    default:
      throw new Error()
  }
}

const DestinationLeaderboard = props => { 
    const [state, dispatch] = React.useReducer(dataReducer, {
        column: null,
        data: props.data.data,
        direction: null,
    })
    const { column, data, direction } = state;

    return  (
        <div className="tableLeaderboard">
            <Table sortable basic='very' fixed className="tableLeaderboard">
                <Table.Header>
                    <Table.Row>
                        {props.data.head.map((key) => (
                            <Table.HeaderCell
                                sorted={column === key ? direction : null}
                                onClick={() => dispatch({ type: 'CHANGE_SORT', column: key })}
                            >
                                {key}
                            </Table.HeaderCell>
                        ))}
                        
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {data.map(( {key, Visitation, Satisfaction, Compliance} ) => (
                    <Table.Row key={key}>
                        <Table.Cell>
                            <div className="tabcell">
                                <div style={{width: "94%"}}>
                                    <span>{key}</span><span className="dataval">{Visitation.value}</span>
                                    <ProgressLeaderboard progressValue={Visitation.value} color={props.data.color.Visitation}/>
                                </div>
                                <img src={Visitation.delta == 'positive'? DeltaPositive : DeltaNegative} className="deltaImg" alt="delta"/>
                                
                            </div>
                        </Table.Cell>
                        <Table.Cell>
                            <div className="tabcell">
                                <div style={{width: "94%"}}>
                                    <span style={{visibility: "hidden"}}>{key}</span><span className="dataval">{Satisfaction.value}</span>
                                    <ProgressLeaderboard progressValue={Satisfaction.value} color={props.data.color.Satisfaction}/>
                                </div>
                                <img src={Satisfaction.delta == 'positive'? DeltaPositive : DeltaNegative} className="deltaImg" alt="delta"/>
                                
                            </div>
                        </Table.Cell>
                        <Table.Cell>
                            <div className="tabcell">
                                <div style={{width: "94%"}}>
                                    <span style={{visibility: "hidden"}}>{key}</span><span className="dataval">{Compliance.value}</span>
                                    <ProgressLeaderboard progressValue={Compliance.value} color={props.data.color.Compliance}/>
                                </div>
                                <img src={Compliance.delta == 'positive'? DeltaPositive : DeltaNegative} className="deltaImg" alt="delta"/>
                                
                            </div>
                        </Table.Cell>
                    </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}

export default DestinationLeaderboard

