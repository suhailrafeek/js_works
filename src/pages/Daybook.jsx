export default function Daybook(){

return(

<div>

<h2>Daybook</h2>

<div className="cards">

<div className="card green">
Today's Transactions
<h2>₹1,72,300</h2>
</div>

<div className="card red">
Total Credit
<h2>₹1,18,500</h2>
</div>

<div className="card blue">
Closing Balance
<h2>₹9,70,400</h2>
</div>

</div>

<table className="table">

<thead>

<tr>

<th>Date</th>
<th>Type</th>
<th>Account</th>
<th>Description</th>
<th>Debit</th>
<th>Credit</th>

</tr>

</thead>

<tbody>

<tr>
<td>24-Apr</td>
<td>Sale</td>
<td>Rajesh Sharma</td>
<td>Invoice INV-00480</td>
<td>1,52,200</td>
<td>1,52,200</td>
</tr>

<tr>
<td>24-Apr</td>
<td>Expense</td>
<td>Rent</td>
<td>Office Rent</td>
<td>25,000</td>
<td>25,000</td>
</tr>

</tbody>

</table>

</div>

)

}