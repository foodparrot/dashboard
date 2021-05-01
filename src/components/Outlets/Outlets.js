import React, { Component } from 'react'
import './Outlets.css';
export class Outlets extends Component {
    render() {
        return (
            <div>
                <div class="container">
<div class="row1 container">
<div class="pr"><p>Outlet</p></div>
<div class="search-container">
<input type="text" placeholder="Search outlet by name.." name="search" class="search1"/>
<button >Add new outlet</button>

</div>
</div>
</div>

 
<div class="container">
<div class="row">
<div class="col-sm-4 col-4">Outlet name</div>
<div class="col-sm-2 col-2">Status</div>
<div class="col-sm-2 col-2">Delivery</div>
<div class="col-sm-2 col-2">Pickup</div>
<div class="col-sm-2 col-2">Dine-in</div>

</div>

<div class="an">
<div class="row">
<div class="col-sm-2 col-2">img</div>
<div class="col-sm-2 col-2">Bismillah Outlet</div>
<div class="col-sm-2 col-2">Active</div>
<div class="col-sm-2 col-2">Enable</div>
<div class="col-sm-2 col-2">Enable</div>
<div class="col-sm-2 col-2">Disable</div>


</div>
</div>
<div class="row1 container">
<div class="pn"><p>showing 1 out of 1 record</p></div>
<div class="bn">
<a href="#" class="previous">&laquo; </a>
<a href="#" class="middle">1</a>
<a href="#" class="previous"> &raquo;</a>
</div>
</div>
</div>
</div>
            

        )
    }
}

export default Outlets
