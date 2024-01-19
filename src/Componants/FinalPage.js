const FinalPage = ({ name, finalPageHandler }) => {
  return (
    <div className="text-white flex-row text-center pt-60 -ml-40 leftmove">
      <h1 className="m-2 text-2xl">Your Apllication is Succefully Submitted</h1>
      <h1 className="m-2 text-lg">
        <a
          className=" text-blue-500"
          href="https://www.fixhealth.in/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here
        </a>{" "}
        to Explore us
      </h1>
      <h1 className="text-2xl font-bold">Thank you {name}</h1>
      <h1 className=" m-3">
        {" "}
        If you want Changes
        <button onClick={finalPageHandler} className="ml-2 text-blue-500">
          Click here
        </button>
      </h1>
    </div>
  );
};
export default FinalPage;
