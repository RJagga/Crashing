import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, scales } from "chart.js";
import styled from "styled-components";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const LineGraph = (data)=>{
    const options = {
        
        scales:{
            x:{
                type:'linear',
                position: 'bottom',
            },
            y:{
                type:'linear',
                position: 'left'
            }
        }
    };
    const yValues = Object.values(data).map(obj => obj.optimumCost);
    const xValues = Object.values(data).map(obj => obj.maxDuration)
    const dataset = {
        labels: xValues,
        datasets:[
            {
                label:"TOTALCOST",
                data: yValues,
                borderColor: "rgb(75,192,192)",
            },
        ],
    };
    
    return(
        <Graph>  
            <Line options={options} data={dataset} />
        </Graph>
    )
};

const Graph = styled.div`
    max-width:75%;
    margin:auto;
`;