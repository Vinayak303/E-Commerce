import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { db } from "./Firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
function Registeration() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState(null);
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(
      validate({ newName, registerEmail, registerPassword, newAge })
    );
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, []);
  const validate = (values) => {
    const errors = {};
    const Regex = /^[a-zA-Z\-]+$/;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const agevali = /^[0-9]+$/;
    if (!values.newName) {
      errors.newName = "Username is required !";
    } else if (!Regex.test(values.newName)) {
      errors.newName = "This is not a valid username format !";
    } else if (values.newName.length < 3) {
      errors.newName = "username must be more than 3 characters";
    }
    if (!values.registerEmail) {
      errors.registerEmail = "Email is required !";
    } else if (!regex.test(values.registerEmail)) {
      errors.registerEmail = "This is not a valid email format !";
    }
    if (!values.registerPassword) {
      errors.registerPassword = "Password is required !";
    } else if (values.registerPassword.length < 8) {
      errors.registerPassword = "Password must be more than 8 characters";
    }
    if (!values.newAge) {
      errors.newAge = "Please Enter your Age !";
    } else if (!agevali.test(values.newAge)) {
      errors.newAge = "This is not a valid age format !";
    }
    return errors;
  };
  const usersCollectionRef = collection(db, "users");
  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      age: Number(newAge),
      emailID: registerEmail,
      Password: registerPassword,
    });
  };
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      if (!user) {
        throw new error("invalid credentials");
      }
      if (user) {
        createUser();
        return navigate("/Login");
      }
    } catch (error) {
      console.log(error.message);
      // setError("Email Already in Use");
    }
  };
  return (
    <div className="bg-white min-h-screen flex flex-col ">
      <form onSubmit={handleSubmit}>
        <div className="  mt-20 container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-zinc-100  px-6 py-8 rounded shadow-md text-black w-full">
            <h4 className="mb-8 text-3xl text-center text-purple-600">
              Sign up
            </h4>

            <input
              type="text"
              onChange={(event) => {
                setNewName(event.target.value);
              }}
              className="block border border-grey-light w-full p-3 rounded mb-4 "
              name="username"
              placeholder="User Name"
            />

            <div className="text-red-600 font-semibold ">
              {formErrors.newName}
            </div>
            <br></br>

            <input
              type="text"
              onChange={(event) => {
                setNewAge(event.target.value);
              }}
              className="block border border-grey-light w-full p-3 rounded mb-4 "
              name="age"
              placeholder="Age"
            />

            <div className="text-red-600 font-semibold ">
              {formErrors.newAge}
            </div>
            <br></br>

            <input
              type="text"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
              className="block border border-grey-light w-full p-3 rounded mb-4 "
              name="email"
              placeholder="Email"
            />

            <div className="text-red-600 font-semibold ">
              {formErrors.registerEmail}
            </div>
            <br></br>

            <input
              type="password"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
              className="block border border-grey-light w-full p-3 rounded mb-4 "
              name="password"
              placeholder="Password"
            />

            <div className="text-red-600 font-semibold ">
              {formErrors.registerPassword}
              <p>{error}</p>
            </div>

            <br></br>

            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <button
                type="submit"
                className=" px-6 py-2 text-sm transition-colors duration-300 border-2 rounded-full shadow-xl text-red-500 border-rose-400 shadow-rose-300/30 hover:bg-rose-500 hover:text-rose-100"
                onClick={register}
              >
                Register
              </button>
            </div>
            <p class="text-sm font-semibold mt-2 pt-1 text-blue-600">
              Already have an account?
            </p>
            <button
              onClick={() => {
                navigate("/Login");
              }}
              className=" text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
            >
              Login Here
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Registeration;
