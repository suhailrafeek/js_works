import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChartPie, FaBook, FaUsers } from "react-icons/fa";

export default function Sidebar() {

const [collapsed,setCollapsed] = useState(false)

return (

<div className={collapsed ? "sidebar collapsed":"sidebar"}>

<div className="logo">
ERP Dashboard
</div>

<button
className="collapseBtn"
onClick={()=>setCollapsed(!collapsed)}
>
☰
</button>

<ul>

<li>
<Link to="/">
<FaChartPie/> {!collapsed && "Dashboard"}
</Link>
</li>

<li>
<Link to="/daybook">
<FaBook/> {!collapsed && "Daybook"}
</Link>
</li>

<li>
<Link to="#">
<FaUsers/> {!collapsed && "Employees"}
</Link>
</li>

</ul>

</div>

)
}