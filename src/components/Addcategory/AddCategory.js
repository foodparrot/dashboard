import React from 'react';
import { FiCamera } from 'react-icons/fi';
import './AddCategory.css';

function Addcategory() {
    return (
        <div className="container-fluid ">
            <div className='row header'>
                <p>Bismillah Outlet</p>
            </div>
            <div className="container catalouge">
                <p className="heading"><b>Add new category</b></p>
            </div>

            {/*images*/}
            <div className="container prod-images">

                <div className="row row-5">
                    <div>Category image</div>
                </div>


                <div className="row row-6 imgs">
                    <div className="col-5 col-md-3 col-lg-2  imge ">
                        <FiCamera className="iconimg" style={{fontsize: '5em'}}/>
                    </div>
                    <div className="col-5  col-md-3 col-lg-2 imge">
                        <img src="/images/2.jpg" alt="img1" className="img-1" />
                    </div>

                </div>
            </div>
            {/*category information*/}
            {/*cat-name*/}
            <div className="container prod-info categ">

                <div className="prod-tit"><b>Category information</b></div>

                < div class="form-group">
                    <label for="Category Name">Category name</label>
                    <input type="text" class="form-control" name="Category name" id="Category name" placeholder="Enter Category name" />
                </div>
                {/*last button-Categories*/}
                <div className="prod-last-btns" style={{padding:"7% 0"}}>
                    <div className="row">
                        <div className=" offset-md-3 col-5  col-md-4 cancel-prod">
                          <button className="btn  btn-cancel" type="submit">Cancel</button>
                        </div>

                        <div className="last-prod col-5 col-md-4 ">
                          <button className="btn btn-last-prod" type="submit">Save</button>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Addcategory;