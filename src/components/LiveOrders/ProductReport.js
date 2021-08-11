import React from 'react'
function ProductReport() {
    return (
        <>
            <div className="row badge-row">
                <div className="col-4 col-md-4  ">
                    <img className="img-cls" src="https://s3.amazonaws.com/company-photo.theladders.com/2262/4dadaf63-837d-414e-ae95-edd81a72a486.png"></img>
                </div>
                <div className="col-6  col-md-8">
                    <div className="d-flex" style={{ flexWrap: 'wrap', flexDirection: "column", justifyContent: "space-between" }}>
                        <div>item 1</div>

                        <div className="row m-0" style={{ alignItems: "center", justifyContent: "space-between" }}>
                            <span className="col-3 p-0" style={{ minWidth: "max-content" }}><span class="badge badge-light">1</span>&ensp; X25000000</span>
                            <span className="col-3 p-0" style={{ fontWeight: "700" }}>2500000/-</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductReport