import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip
} from "recharts"

const data=[
{week:"Week1",sales:15000,expenses:24000},
{week:"Week2",sales:34000,expenses:19000},
{week:"Week3",sales:20000,expenses:15000},
{week:"Week4",sales:32000,expenses:23000}
]

export default function Dashboard(){

return(

<div>

<div className="cards">

<div className="card green">
Today's Income
<h2>₹8,500</h2>
</div>

<div className="card red">
Today's Expense
<h2>₹3,200</h2>
</div>

<div className="card blue">
Cash in Hand
<h2>₹15,400</h2>
</div>

<div className="card purple">
Monthly Profit
<h2>₹24,600</h2>
</div>

</div>

<div className="chart">

<h3>Sales & Expense Overview</h3>

<LineChart width={900} height={300} data={data}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="week"/>

<YAxis/>

<Tooltip/>

<Line type="monotone" dataKey="sales" stroke="#2ecc71"/>

<Line type="monotone" dataKey="expenses" stroke="#e74c3c"/>

</LineChart>

</div>

</div>

)

}