import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
function ForgotPswrd(props) {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  function navigateToOtp() {
    if (props.email) {
      const OTP = Math.floor(Math.random() * 9000 + 1000);
      console.log(OTP);
      props.setOtp(OTP);

      axios.post("http://localhost:3001/send_recovery_email", {
          OTP,
          recipient_email: props.email,
        })
        .then(() => props.setPage("otp"))
        .catch(console.log);
      return;
    }else{
      return alert("Please enter your email");
    }
  }
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6 flex flex-col ">
        <div>
          <h2 className="text-center mb-5">Enter the email to send code to your email</h2>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6"
          >
            Email address
          </label>
          <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="Off"
            value={props.email || ''} // Ensure a default value of an empty string
            onChange={(e) => props.setEmail(e.target.value)}
            required
            className="block w-full rounded-md outline-none p-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
          />

          </div>
        </div>
        <Link onClick={navigateToOtp} to={'/otp'}><button className="w-full bg-indigo-700 text-white p-2 rounded-md">Send OTP</button></Link>
      </form>
    </div>
  );
}

export default ForgotPswrd;
