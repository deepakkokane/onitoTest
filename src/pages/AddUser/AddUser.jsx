import { useState } from "react";

import "./Styles.css";
import {
  bloodGroups,
  cities,
  countries,
  guardianTypes,
  religions,
  states,
} from "../../static/FormValues";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    age: yup.string().required("Age is required"),
    sex: yup.string().required("sex is required"),
    mobile: yup
      .string()
      .matches(/^[6-9]\d{9}$/g, "Mobile number is not valid")
      .required("Mobile number required"),
    govIdType: yup
      .string("id type must be string")
      .oneOf(["aadhar", "pan"], "ID Type must be addhar or pan")
      .required("ID Type is required"),
    govId: yup.string().when("govIdType", {
      is: "aadhar",
      then: () =>
        yup
          .string()
          .matches(
            /^\d{12}$/,
            "Aadhar number should be a valid 12-digit numeric string"
          )
          .required("Aadhar number is required"),
      otherwise: () =>
        yup
          .string()
          .matches(
            /^([A-Z]){5}([0-9]){4}([A-Z]){1}$/,
            "PAN number should be a valid 10-digit alpha-numeric string"
          )
          .required("PAN number is required"),
    }),
    guardianLabel: yup.string(),
    guardianName: yup.string(),
    email: yup.string().email("Email is not valid"),
    contact: yup
      .string()
      .matches(/^[6-9]\d{9}$/g, "Mobile number is not valid")
      .required("Mobile number required"),
    address: yup.string(),
    state: yup.string(),
    city: yup.string(),
    country: yup.string(),
    pinCode: yup.number("pincode must be number"),
    occupation: yup.string(),
    religion: yup.string(),
    materialStatus: yup.string(),
    bloodGroup: yup.string(),
    nationality: yup.string(),
  })
  .required();

function AddUser() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    fetch("http://localhost:8000/api/user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => {
        navigate("/listusers");
        reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <h4>Personal Details</h4>
          <Link to={"/listusers"}>
            <h4>Users List</h4>
          </Link>
        </div>

        <div className="inputsContainer">
          <div className="input">
            <div>
              <label htmlFor="name">name</label>
              <input type="text" id="name" {...register("name")} />
            </div>

            <p>{errors?.name?.message}</p>
          </div>

          <div className="input">
            <div>
              <label htmlFor="age">Date of birth or Age</label>
              <input
                type="text"
                id="age"
                placeholder="DD/MM/YYYY or age in years"
                {...register("age")}
              />
            </div>
            <p>{errors?.age?.message}</p>
          </div>

          <div className="input">
            <div>
              <label htmlFor="sex">sex</label>

              <select type="text" id="sex" {...register("sex")} defaultValue="">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <p>{errors?.sex?.message}</p>
          </div>

          <div className="input">
            <div>
              <label htmlFor="mobile">Mobile</label>
              <input type="text" id="mobile" {...register("mobile")} />
            </div>
            <p>{errors?.mobile?.message}</p>
          </div>

          <div className="input">
            <div>
              <label htmlFor="id">Govt issued ID</label>
              <select
                type="text"
                id="id"
                {...register("govIdType")}
                defaultValue="aadhar"
              >
                <option value="aadhar">Addhar</option>
                <option value="pan">PAN</option>
              </select>
            </div>
            <p>{errors?.govIdType?.message}</p>
          </div>

          <div className="input">
            <div>
              <input
                type="text"
                placeholder="Enter govt id"
                {...register("govId")}
              />
            </div>
            <p>{errors?.govId?.message}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <h4>Contact Details</h4>

        <div className="inputsContainer">
          <div className="input">
            <div>
              <label htmlFor="Guardian">Guardian details</label>
              <select type="text" id="state" {...register("guardianLabel")}>
                {guardianTypes.map((guardian) => (
                  <option value={guardian} key={guardian}>
                    {guardian}
                  </option>
                ))}
              </select>
            </div>
            <p>{errors?.guardianLabel?.message}</p>
          </div>

          <div className="input">
            <input
              type="text"
              placeholder="Enter guardian name"
              {...register("guardianName")}
            />
            <p>{errors?.guardianName?.message}</p>
          </div>

          <div className="input">
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" {...register("email")} />
            </div>
            <p>{errors?.email?.message}</p>
          </div>

          <div className="input">
            <div>
              <label htmlFor="contact">Emergency contact number</label>
              <input type="text" id="contact" {...register("contact")} />
            </div>
            <p>{errors?.contact?.message}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <h4>Address Details</h4>

        <div className="inputsContainer">
          <div className="input">
            <div>
              <label htmlFor="address">Address</label>
              <input type="text" id="address" {...register("address")} />
            </div>
            <p>{errors?.address?.message}</p>
          </div>

          <div className="input">
            <div>
              <label htmlFor="state">State</label>
              <select type="text" id="state" {...register("state")}>
                {states.map((state) => (
                  <option value={state} key={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <p>{errors?.state?.message}</p>
          </div>

          <div className="input">
            <div>
              <label htmlFor="city">City</label>
              <select type="text" id="city" {...register("city")}>
                {cities.map((city) => (
                  <option value={city} key={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <p>{errors?.city?.message}</p>
          </div>

          <div className="input">
            <div>
              <label htmlFor="country">Country</label>
              <select type="text" id="country" {...register("country")}>
                {countries.map((country) => (
                  <option value={country} key={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <p>{errors?.country?.message}</p>
          </div>

          <div className="input">
            <div>
              <label htmlFor="pin">Pin code</label>
              <input type="text" id="pin" {...register("pinCode")} />
            </div>
            <p>{errors?.pinCode?.message}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <h4>Other Details</h4>

        <div className="inputsContainer">
          <div className="input">
            <div>
              <label htmlFor="occupation">Occupation</label>
              <input type="text" id="occupation" {...register("occupation")} />
            </div>
            <p>{errors?.occupation?.message}</p>
          </div>

          <div className="input">
            <div>
              <label htmlFor="religion">Religion</label>
              <select type="text" id="religion" {...register("religion")}>
                {religions.map((religion) => (
                  <option value={religion} key={religion}>
                    {religion}
                  </option>
                ))}
              </select>
            </div>
            <p>{errors?.religion?.message}</p>
          </div>

          <div className="input">
            <div>
              <label htmlFor="material">Material Status</label>
              <select type="text" id="material" {...register("materialStatus")}>
                <option value={"married"}>Married</option>
                <option value={"unmarried"}>Unmarried</option>
              </select>
            </div>
            <p>{errors?.materialStatus?.message}</p>
          </div>

          <div className="input">
            <div>
              <label htmlFor="bg">Blood group</label>
              <select type="text" id="bg" {...register("bloodGroup")}>
                {bloodGroups.map((bg) => (
                  <option value={bg} key={bg}>
                    {bg}
                  </option>
                ))}
              </select>
            </div>
            <p>{errors?.blodGroup?.message}</p>
          </div>

          <div className="input">
            <div>
              <label htmlFor="nationality">Nationality</label>
              <select type="text" id="nationality" {...register("nationality")}>
                {countries.map((country) => (
                  <option value={country} key={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <p>{errors?.nationality?.message}</p>
          </div>
        </div>
      </div>

      <div className="btnContainer container">
        <button className="btn cancel">CANCEL</button>
        <button className="btn submit" type="submit">
          SUBMIT
        </button>
      </div>
    </form>
  );
}

export default AddUser;
