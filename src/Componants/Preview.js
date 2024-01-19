import { useState } from "react";
import Card from "./Card";
import FinalPage from "./FinalPage";

const Preview = ({ formValues, doctor, previewHandler, showExperience }) => {
  const [selectDoctor, setSelectDoctor] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [finalPage, setFinalPage] = useState(false);
  const doctorhandler = () => setSelectDoctor(true);
  const submitHandler = () => setSubmit(true);
  const finalPageHandler = () => {
    setFinalPage(!finalPage);
    setSubmit(false);
  };

  return !finalPage ? (
    <>
      <div className="text-white pt-10 text-start ml-7 leftmove">
        <h1 className="m-2 ">
          Name <span className="ml-[273px]">:</span>
          <span className="ml-4">{formValues.username}</span>
        </h1>
        <h1 className="m-2 ">
          Phone Number <span className="ml-[208px]">:</span>
          <span className="ml-4">{formValues.phone}</span>
        </h1>
        <h1 className="m-2 ">
          Age <span className="ml-[287px]">:</span>
          <span className="ml-4">{formValues.age}</span>
        </h1>
        <h1 className="m-2 ">
          City <span className="ml-[287px]">:</span>
          <span className="ml-4">{formValues.city}</span>
        </h1>
        <h1 className="m-2 ">
          Company <span className="ml-[246px]">:</span>
          <span className="ml-4">{formValues.company}</span>
        </h1>
        <h1 className="m-2 ">
          Cheif Complaints <span className="ml-[193px]">:</span>
          <span className="ml-4">{formValues.cheifComplaints}</span>
        </h1>

        <h1 className="m-2 ">
          Any Previous Experience With Physiotherapy :
          <span className="ml-5">{formValues.prevexperiance}</span>
        </h1>
      </div>
      <div className=" font-bold text-lg justify-center m-5 ">
        <h1 className="mr-5 text-white">
          Available Doctors in {formValues.city}
        </h1>
        <div className="flex ">
          {doctor.map((item) => (
            <Card
              item={item}
              key={item?.Doctor}
              doctorhandler={() => doctorhandler()}
              selectDoctor={selectDoctor}
            />
          ))}
        </div>
        {submit && (
          <div>
            {!selectDoctor ? "Please Select Doctor" : finalPageHandler()}
          </div>
        )}

        <div>
          {" "}
          <button
            className="m-3 text-white px-4 py-2 bg-green-700 rounded-lg text-sm hover:bg-green-500"
            onClick={() => {
              submitHandler();
            }}
          >
            Submit
          </button>
          <button
            className="m-3 text-white px-4 py-2 bg-green-700 rounded-lg text-sm hover:bg-green-500"
            onClick={previewHandler}
          >
            Back
          </button>
        </div>
      </div>
    </>
  ) : (
    <FinalPage
      name={formValues.username}
      finalPageHandler={() => finalPageHandler()}
    />
  );
};
export default Preview;
