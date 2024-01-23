import React, { useState } from 'react'
import axios  from "axios"
import { Link } from 'react-router-dom';
function OTPInput(props) {
    const [timerCount, setTimer] = React.useState(60);
    const [OTPinput, setOTPinput] = useState([0, 0, 0, 0]);
    const [disable, setDisable] = useState(true);
  
    function resendOTP() {
      if (disable) return;
      axios.post("http://localhost:3001/send_recovery_email", {
          OTP: props.otp,
          recipient_email: props.email,
        })
        .then(() => setDisable(true))
        .then(() => alert("A new OTP has succesfully been sent to your email."))
        .then(() => setTimer(60))
        .catch(console.log);
    }
  
    function verfiyOTP() {
      if (parseInt(OTPinput.join("")) === props.otp) {
        props.setPage("reset");
        return;
      }
      alert(
        "The code you have entered is not correct, try again or re-send the link"
      );
      return;
    }
  
    React.useEffect(() => {
      let interval = setInterval(() => {
        setTimer((lastTimerCount) => {
          lastTimerCount <= 1 && clearInterval(interval);
          if (lastTimerCount <= 1) setDisable(false);
          if (lastTimerCount <= 0) return lastTimerCount;
          return lastTimerCount - 1;
        });
      }, 1000); //each count lasts for a second
      //cleanup the interval on complete
      return () => clearInterval(interval);
    }, [disable]);
  return (
    <div className={`flex justify-center items-center w-screen rounded-md bg-${props.theme === "dark" ? "dark" : "gray-100"} `}>
    <div className={`bg-${props.theme === "dark" ? "gray-600" : "white"} px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl`}>
      <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
        <div className="flex flex-col items-center justify-center text-center space-y-2">
          <div className="font-semibold text-3xl">
            <p>Email Verification</p>
          </div>
          <div className="flex flex-row text-sm font-medium text-gray-400">
            <p>We have sent a code to your email {props.email}</p>
          </div>
        </div>

        <div>
          <form>
            <div className="flex flex-col space-y-16">
              <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                <div className="w-16 h-16 ">
                  <input
                    maxLength="1"
                    className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg text-black bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="text"
                    name=""
                    id=""
                    onChange={(e) =>
                      setOTPinput([
                        e.target.value,
                        OTPinput[1],
                        OTPinput[2],
                        OTPinput[3],
                      ])
                    }
                  ></input>
                </div>
                <div className="w-16 h-16 ">
                  <input
                    maxLength="1"
                    className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg text-black bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="text"
                    name=""
                    id=""
                    onChange={(e) =>
                      setOTPinput([
                        OTPinput[0],
                        e.target.value,
                        OTPinput[2],
                        OTPinput[3],
                      ])
                    }
                  ></input>
                </div>
                <div className="w-16 h-16 ">
                  <input
                    maxLength="1"
                    className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg text-black bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="text"
                    name=""
                    id=""
                    onChange={(e) =>
                      setOTPinput([
                        OTPinput[0],
                        OTPinput[1],
                        e.target.value,
                        OTPinput[3],
                      ])
                    }
                  ></input>
                </div>
                <div className="w-16 h-16 ">
                  <input
                    maxLength="1"
                    className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg text-black bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="text"
                    name=""
                    id=""
                    onChange={(e) =>
                      setOTPinput([
                        OTPinput[0],
                        OTPinput[1],
                        OTPinput[2],
                        e.target.value,
                      ])
                    }
                  ></input>
                </div>
              </div>

              <div className="flex flex-col space-y-5">
                <div>
                  <Link
                    onClick={() => verfiyOTP()}
                    className="flex flex-row cursor-pointer items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                  >
                    Verify Account
                  </Link>
                </div>

                <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                  <p>Didn't recieve code?</p>{" "}
                  <Link
                    className="flex flex-row items-center"
                    style={{
                      color: disable ? "gray" : "blue",
                      cursor: disable ? "none" : "pointer",
                      textDecorationLine: disable ? "none" : "underline",
                    }}
                    onClick={() => resendOTP()}
                  >
                    {disable ? `Resend OTP in ${timerCount}s` : "Resend OTP"}
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OTPInput
