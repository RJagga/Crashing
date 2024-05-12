import React, { useState } from 'react';
import { myFunction } from './script';
import { LineGraph } from './Graph';
import styled from 'styled-components';
import { json } from 'react-router-dom';


const AlgorithmComponent = () => {
  const [numActivities, setNumActivities] = useState(0);
  const [activities, setActivities] = useState([]);
  const [indirectCost, setIndirectCost] = useState(0);
  const [showOutput, setShowOutput] = useState(false);
  const [output, setOutput] = useState([]);

  const handleNumActivitiesChange = (event) => {
    const value = parseInt(event.target.value);
    setNumActivities(value);
    setActivities(Array.from({ length: value }, () => ({}))); // Initialize activities array with empty objects
  };

  const handleActivityInputChange = (event, index, field) => {
    const newActivities = [...activities];
    newActivities[index][field] = event.target.value;
    setActivities(newActivities);
  };

  const handleIndirectCostChange = (event) => {
    setIndirectCost(parseFloat(event.target.value));
  };

  const runAlgorithm = () => {
    // Initialize maps and adjacency list
    let mdur = new Map();
    let crash = new Map();
    let cs = new Map();
    let adj = Array(numActivities + 2).fill(null).map(() => []);
    let currCost = 0;
    let target = 0;
    let rltn = new Map();
    let rltninv = new Map();
    let matr=[];
    for (let i = 0; i < parseInt(numActivities)+2; i++) {
      matr.push(new Array(parseInt(numActivities)+2).fill(0));
    }
    // Extract input from activities
    activities.forEach((activity, index) => {
      const activityName = String.fromCharCode(65 + index); // Convert index to character (A, B, ...)
      mdur[activityName] = parseInt(activity.normalDuration);
      crash[activityName] = mdur[activityName] - parseInt(activity.crashDuration);
      cs[activityName] = (parseInt(activity.crashCost) - parseInt(activity.normalCost)) /
                        (parseInt(activity.normalDuration) - parseInt(activity.crashDuration));
      rltn[activityName] = [parseInt(activity.previousNode), parseInt(activity.nextNode)];
      let key1 = [parseInt(activity.previousNode), parseInt(activity.nextNode)];
      rltninv.set(key1,activityName);
      target = Math.max(parseInt(activity.nextNode), target);
      matr[parseInt(activity.previousNode)][parseInt(activity.nextNode)]=activityName;
      currCost += parseInt(activity.normalCost);
      if (!adj[parseInt(activity.previousNode)]) {
                adj[parseInt(activity.previousNode)] = [];
            }
            adj[parseInt(activity.previousNode)].push(parseInt(activity.nextNode));
    });
    
    // Call your algorithm function with input values
    const result = myFunction(numActivities, mdur, crash, cs, adj, indirectCost,currCost, target, rltn, rltninv,matr);
    console.log(result);
    // Set the output state and show output
    setOutput(result);
    setShowOutput(true);
};


  return (
    <Dabba>
      <br/>
      <label htmlFor="numActivities">Enter number of Activities: </label>
      <input type="number" id="numActivities" value={numActivities} onChange={handleNumActivitiesChange} />
      <br /><br />
        {numActivities > 0 && (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Activity</th>
                  <th>Previous node</th>
                  <th>Next node</th>
                  <th>Normal Duration</th>
                  <th>Crash Duration</th>
                  <th>Normal Cost</th>
                  <th>Crash Cost</th>
                </tr>
              </thead>
              <tbody>
              {activities.map((activity, index) => (
                <tr key={index}>
                  <td>{String.fromCharCode(65 + index)}</td>
                  <td>
                    <input type="number" value={activity.previousNode || ''} onChange={(e) => handleActivityInputChange(e, index, 'previousNode')} />
                  </td>
                  <td>
                    <input type="number" value={activity.nextNode || ''} onChange={(e) => handleActivityInputChange(e, index, 'nextNode')} />
                  </td>
                  <td>
                    <input type="number" value={activity.normalDuration || ''} onChange={(e) => handleActivityInputChange(e, index, 'normalDuration')} />
                  </td>
                  <td>
                    <input type="number" value={activity.crashDuration || ''} onChange={(e) => handleActivityInputChange(e, index, 'crashDuration')} />
                  </td>
                  <td>
                    <input type="number" value={activity.normalCost || ''} onChange={(e) => handleActivityInputChange(e, index, 'normalCost')} />
                  </td>
                  <td>
                    <input type="number" value={activity.crashCost || ''} onChange={(e) => handleActivityInputChange(e, index, 'crashCost')} />
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
              <br />
          <label htmlFor="indirectCost">Enter Indirect Cost:</label>
          <input type="number" id="indirectCost" value={indirectCost} onChange={handleIndirectCostChange} />
          <br /><br />
          <div><button onClick={runAlgorithm}>Run algorithm</button></div>
        </div>
      
      )}
      

      {showOutput && (
        <div>
          <h2>Output:</h2>
          <p>Optimum Duration: <strong>{JSON.stringify(output.at(-1).maxDuration)}</strong><br/>
          Optimum Total Cost: <strong>{JSON.stringify(output.at(-1).optimumCost)}</strong></p>
          <LineGraph {...output}/>
        </div>
      )}
    </Dabba>
  );
};

const Dabba= styled.div`
  min-height:90vh;
  text-align:center;
`;
export default AlgorithmComponent;
