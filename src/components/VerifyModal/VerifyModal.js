import React, { useEffect, useState, forwardRef } from "react";
import { useImmer } from "use-immer";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import OtpInput from 'react-otp-input';
import "bootstrap/dist/css/bootstrap.min.css";
import { BiArrowBack } from "react-icons/bi";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useUserStore } from "../../stores"
import "./styles.css"
import TickAnimation from "./TickAnimation";
const OTP_TIME = 10;
const handlRequestOTP = async (setForm) => {
    setForm(draft => void (draft.loading = true));
    const r = await fetch("/api/business/verify-otp");
    if (r.status === 200) {
        // const res = await r.json();
        setForm((data) => {
            data.timer = OTP_TIME;
            data.loading = false;
        });
    }
    else {
        const res = await r.json();
        setForm(data => {
            data.message = res.message;
        })
    }
}
const RenderTime = ({ remainingTime, setForm, timer }) => {
    if (remainingTime === 0 && timer === 0) {
        return (<div style={{display:"flex",flexDirection:"column"}}>
            <div className="timer">Time up</div>
            <Button variant="info" onClick={() => handlRequestOTP(setForm)}>
                Resend
            </Button>
        </div>);
    }
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60

    const time = `${minutes}:${seconds}`;
    return (
        <div className="timer">
            <div className="text">Remaining</div>
            <div className="value">{time}</div>
            <div className="text">seconds</div>
        </div>
    );
};
const RenderFirstTime = ({ form, setForm }) => {
    return (
        <Modal.Body>
            <p style={{ fontFamily: 'Urbanist', fontWeight: "600", fontSize: "1.2rem", textAlign: "center" }}>{form.message}</p>
            <h3>Verify your {form.verifyMode} by sending OTP</h3>
            <Button variant="info" onClick={() => handlRequestOTP(setForm)}>
                Send
            </Button>
        </Modal.Body>
    )
}

const RenderWhileOTPSent = ({ form, setForm }) => {
    return (
        <Modal.Body style={{padding:"0"}}>
            <p style={{ fontFamily: 'Urbanist', fontWeight: "600", fontSize: "1.2rem", textAlign: "center" }}>{form.message}</p>
            <div className="d-flex justify-content-center">
                <CountdownCircleTimer
                    isPlaying
                    duration={form.timer}
                    onComplete={() => {
                        setForm(draft => void (draft.timer = 0))
                    }}
                    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                    colorsTime={[10, 6, 3, 0]}
                >
                    {({ remainingTime }) => <RenderTime remainingTime={remainingTime} timer={form.timer} setForm={setForm} />}
                </CountdownCircleTimer>
            </div>
            <div className="d-flex justify-content-center" style={{ background: "#efe4e4", padding: "2rem 0", borderRadius: "1.75rem" }}>
                <OtpInput
                    inputStyle="otpInputStyle"
                    disabledStyle={{ background: '#d0e5e4bf' }}
                    value={form.otp}
                    isDisabled={form.timer === 0}
                    onChange={(otp) => setForm(draft => void (draft.otp = otp))}
                    numInputs={6}
                    separator={<span>-</span>}
                />
            </div>
        </Modal.Body>
    )
}

const VerifyModal = () => {
    const [form, setForm] = useImmer({ loading: false, message: "", timer: -1, expiry: 0, otp: "", verifyMode: "" });
    const [open, setOpen] = useState(false);
    const { isEmailVerified, isNumberVerified } = useUserStore(state => state.data);
    const setVerified = useUserStore(state => state.setVerified);
    useEffect(() => {
        if (!isEmailVerified || !isNumberVerified) {
            setForm(draft => {
                if (!isEmailVerified) {
                    draft.verifyMode = "email";
                }
                else {
                    draft.verifyMode = "phone";
                }
            })
            setOpen(true);
        }
        else if (isEmailVerified && isNumberVerified) {
            setOpen(false);
        }
    }, [isEmailVerified, isNumberVerified])
    const handleOTPConfirmation = async () => {
        if (!form.otp) {
            alert("Nope");
            return;
        }
        const r = await fetch("/api/business/verify-otp", {
            method: "post",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                otp: form.otp
            })
        })
        if (r.status === 200) {
            window.$("#verify-modal-tick").fadeIn();
            setForm(draft => {
                if (!isEmailVerified && !isNumberVerified) {
                    setForm(draft => {
                        draft.verifyMode = 'phone';
                        draft.timer = -1;
                    });
                    setVerified({ email: true });
                }
                else if (isEmailVerified && !isNumberVerified) {
                    setVerified({ phone: true });
                    setOpen(false);
                }
                else if (!isEmailVerified && isNumberVerified) {
                    setVerified({ email: true });
                    setOpen(false);
                }
                else {
                    setOpen(false);
                }
            });
        }
        else {
            const res = await r.json();
            alert(res.message);
        }
    }
    return (
        <>
            <Modal
                show={open}
                onHide={() => setOpen(false)}
                size="lg" centered
                backdrop="static"
            >
                <Modal.Header className="modalheader transBlack" closeVariant="white">
                    <Modal.Title className="modaltitle">
                        {form.verifyMode === "email" ? "Email" : "Phone"} Verification
                    </Modal.Title>
                </Modal.Header>
                <TickAnimation/>
                {form.loading ? <img className="w-50 ms-auto me-auto" alt="loading" src="/images/timer.gif" /> :
                    <>
                        {
                            form.timer === -1 ? <RenderFirstTime form={form} setForm={setForm} /> : <RenderWhileOTPSent form={form} setForm={setForm} />}
                    </>
                }
                <Modal.Footer className="d-flex justify-content-center">
                    {form.loading ? <></> : <>
                        <Button variant="success" disabled={(form.timer === -1 || form.timer === 0)} onClick={handleOTPConfirmation}>
                            Confirm
                        </Button>
                    </>}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default VerifyModal