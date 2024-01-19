import { useEffect, useState } from "react";
import jsondata from "./Data.json";
import Preview from "./Preview";

const BookingForm = () => {
  const [showExperience, setShowExperience] = useState(true);
  const [doctorDetails, setDoctorDetails] = useState("");
  const [preview, SetPreview] = useState(false);
  const [data, setdata] = useState("");
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await fetch("Data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const json = await data.json();
    setdata(json);
  };
  const [formValues, setFormValues] = useState({
    username: "",
    phone: "",
    age: "",
    city: "",
    company: "",
    cheifComplaints: "",
    prevexperiance: "N/A",
  });
  const doctorSuggest = (city) => {
    const person = jsondata.filter((item) => item?.City === city);
    setDoctorDetails(person);
  };
  const inputHandler = (event) => {
    const values = { ...formValues, [event.target.name]: event.target.value };
    setFormValues(values);
    if (formValues.age < 40) setShowExperience(false);
    else setShowExperience(true);
  };
  const formHandle = (e) => {
    e.preventDefault();
  };

  const previewHandler = () => SetPreview(!preview);

  return !preview ? (
    <form
      className="text-white pt-32 text-start leftmove"
      onSubmit={formHandle}
    >
      <div className="flex m-3">
        {" "}
        <div className="m-5">
          <label>Name : </label>
          <input
            type="text"
            name="username"
            placeholder="ex:Srikanth ganji"
            value={formValues?.username}
            onChange={inputHandler}
            className="border border-black px-1 py-1 rounded-lg ml-2 text-black pl-3"
          />
        </div>
        <div className="m-5">
          <label>Phone : </label>
          <input
            type="text"
            placeholder="ex:0123456789"
            name="phone"
            value={formValues.phone}
            className="border border-black px-1 py-1 rounded-lg ml-2 text-black pl-3"
            onChange={inputHandler}
          />
        </div>
      </div>
      <div className="flex m-3">
        {" "}
        <div className="m-5 ml-6 flex">
          <label> Age : </label>
          <input
            type="text"
            placeholder="ex:40"
            name="age"
            value={formValues.age}
            className="border border-black px-1 py-1 rounded-lg ml-5 text-black pl-3"
            onChange={inputHandler}
          />
        </div>
        <div className="m-5 ml-10 flex">
          <label>City :</label>
          <input
            type="text"
            placeholder="ex:Hyderabad"
            name="city"
            value={formValues.city}
            className="border border-black px-1 py-1 rounded-lg ml-2 text-black pl-3"
            onChange={inputHandler}
          />
        </div>
        <div className="m-5 flex">
          <label>Company :</label>
          <input
            type="text"
            placeholder="ex:Capgemini"
            name="company"
            value={formValues.company}
            className="border border-black px-1 py-1 rounded-lg ml-2 text-black pl-3"
            onChange={inputHandler}
          />
        </div>
      </div>

      <div className="m-5 ml-[4%]">
        <label>Cheif Complaints :</label>
        <input
          type="text"
          placeholder="ex:Cheif Complaints"
          name="cheifComplaints"
          value={formValues.cheifComplaints}
          className="border border-black px-1 py-1 rounded-lg ml-[26%] text-black pl-3"
          onChange={inputHandler}
        />
      </div>

      <div className="m-5 ml-[4%]">
        <label>Any Previous Experience With Physiotherapy :</label>
        <input
          type="text"
          disabled={formValues.age < 40}
          placeholder="please Enter if age above 40"
          name="prevexperiance"
          className="border border-black px-1 py-1 rounded-lg ml-10 text-black pl-3"
          onChange={inputHandler}
        />
      </div>

      <div>
        <button
          className="bg-green-700 px-2 py-2 rounded-lg ml-[40%] mt-5 hover:bg-green-400"
          disabled={
            formValues.username.length === 0 || formValues.phone.length === 0
          }
          onClick={() => {
            doctorSuggest(formValues.city);
            previewHandler();
          }}
        >
          Check Available Doctor
        </button>
      </div>
    </form>
  ) : (
    <Preview
      formValues={formValues}
      doctor={doctorDetails}
      showExperience={showExperience}
      previewHandler={() => previewHandler()}
    />
  );
};
export default BookingForm;
