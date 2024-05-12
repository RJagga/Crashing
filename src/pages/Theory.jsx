import React from 'react'
import styled from 'styled-components';

const Theory = () => {
  return (
    <div>
      <h3>Project Cost Analysis</h3>
      <Dabba>
      <div>
      <p>
      CPM assumes that , the time to perform any project activity is variable  depending on the amount of effort or resources applied, 
      and that the completion time for a project can be shortened  by applying additional resources (labor, equipment,  capital) 
      to particular key activities. <p/> Normal time, cost: Emphasis is on cost with time being  associated with minimum cost <p/>
      Crash time, cost for an activity: the crash time limit imposes  a condition that the duration can not be further reduced. 
      It  involves the minimum time required for the job and cost  necessary to achieve it. Emphasis is onTime.
      </p>
      <p>
        <strong>Direct Cost</strong><p/>
        Costs that can be correlated to a specific activity or a work  item which is being done or produced.<p/>
        <strong>Indirect Cost or Overheads</strong><p/>
        All other costs incurred to accomplish the activity or work  item but cannot be correlated directly.  
        It includes Outage  loss and Overheads
      </p>
      </div>
      <img src="src\assets\theory_graph.png" alt="image" />
      </Dabba>
      <h3>Total Cost = Direct Cost + Indirect Cost</h3>
      <ol>
        <li>
          <strong>Normal Cost:</strong> Normal cost refers to the cost associated with completing an activity within its 
          normal duration or time frame. It represents the standard or baseline cost of performing the activity without any 
          acceleration or expedited effort. Normal cost typically reflects the use of regular resources and labor at standard rates.
        </li>
        <li>
          <strong>Crash Cost:</strong> Crash cost, on the other hand, refers to the additional cost incurred when an activity is 
          accelerated or "crashed" to be completed in less time than its normal duration. It represents the extra expenses 
          associated with deploying additional resources, overtime work, or expedited procurement to speed up the activity. 
          Crash cost is usually higher than normal cost due to the premium paid for expediting the work.
        </li>
        <li>
          <strong>Normal Time:</strong>Normal time is the duration required to complete an activity under normal 
          working conditions, without any acceleration or additional effort. It represents the standard or baseline time 
          frame established during project planning based on historical data, expert judgment, or industry standards. 
          Normal time is used to calculate normal cost.
        </li>
        <li>
          <strong>Crash Time:</strong> Crash time, also known as crash duration, is the shortest 
          possible duration in which an activity can be completed by applying additional resources or effort. 
          It represents the minimum time required to perform the activity without violating any constraints or limitations. 
          Crash time is shorter than normal time but typically results in higher costs due to the need for acceleration.
        </li>
      </ol>
      <Dabba>
        <div><img src="src\assets\theory_graph_1.png" alt="image" /></div>
        <div><img src="src\assets\theory_graph_2.png" alt="image" /></div>
        <div><img src="src\assets\theory_graph_3.png" alt="image" /></div>
        <div><img src="src\assets\theory_graph_4.png" alt="image" /></div>
      </Dabba>
      
    </div>
  )
}

const Dabba = styled.div`
  display:flex;
  justify-content: space-around;
  align-items:center;
  margin:20px 100px;
`;
export default Theory;