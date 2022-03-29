import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";
function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState(null);
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate({ loginEmail, loginPassword }));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, []);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.loginEmail) {
      errors.loginEmail = "Email is required !";
    } else if (!regex.test(values.loginEmail)) {
      errors.loginEmail = "This is not a valid email format !";
    }
    if (!values.loginPassword) {
      errors.loginPassword = "Password is required !";
    } else if (values.loginPassword.length < 8) {
      errors.loginPassword = "Password must be more than 8 characters";
    }
    return errors;
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      if (!user) {
        throw new error("invalid credentials");
      }
      if (user) {
        return navigate("/Home");
      }
    } catch (error) {
      console.log(error.message);
      setError("invalid credentials");
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <form onSubmit={handleSubmit}>
        <div className="  mt-20 container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-zinc-100  px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center text-purple-600">
              Log in
            </h1>

            <input
              type="text"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
              className="block border border-grey-light w-full p-3 rounded mb-4 "
              name="email"
              placeholder="Email"
            />

            <div className="text-red-600 font-semibold ">
              {formErrors.loginEmail}
            </div>
            <br></br>

            <input
              type="password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
              className="block border border-grey-light w-full p-3 rounded mb-4 "
              name="password"
              placeholder="Password"
            />

            <div className="text-red-600 font-semibold ">
              {formErrors.loginPassword}
              <p>{error}</p>
            </div>
            <br></br>
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <button
                type="submit"
                className=" px-6 py-2 text-sm transition-colors duration-300 border-2 rounded-full shadow-xl text-red-500 border-rose-400 shadow-rose-300/30 hover:bg-rose-500 hover:text-rose-100"
                onClick={login}
              >
                Login
              </button>
              <br></br>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
