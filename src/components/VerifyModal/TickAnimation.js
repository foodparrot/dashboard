import React, { useEffect, forwardRef, useState, useCallback } from 'react'
import "./tickAnimation.css"

const TickAnimation = (props, ref) => {
    const [open, setOpen] = useState(false);
    const [callBack, setCallBack] = useState({ delay: 0, run: () => { } });
    const tickRef = {
        ref: null,
        open: function (cb) {
            this.ref.style.display = "flex";
            if (cb instanceof Function) {
                setCallBack({ ...callBack, run: cb, delay: 25 });
                setOpen(true);
            }
            else {
                setOpen(true);
            }

        }
    };
    ref.current = tickRef;
    useEffect(() => {
        if (open) {
            window.$("#verify-modal-tick").delay(1500).fadeOut(400, function () {
                setTimeout(() => {
                    callBack.run();
                    setCallBack({ ...callBack, run: () => { }, delay: 0 });
                    setOpen(false);
                }, callBack.delay)
            });
        }
        else {
            window.$("#verify-modal-tick").hide();
        }
    }, [open])
    return (
        <div id="verify-modal-tick" ref={ele => tickRef.ref = ele}>
            <div className="icon-animated icon-animated-tick" tabindex="-1" aria-hidden="true">
                <svg class="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50" />
                </svg>

                <div class="tick">
                    <svg class="tick-leg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 52">
                        <polygon class="" points="1,41 0,48 25,52 25,45" />
                    </svg>
                    <svg class="tick-leg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 52">
                        <polygon class="" points="18,45 25,47 25,0 18,0" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(TickAnimation)