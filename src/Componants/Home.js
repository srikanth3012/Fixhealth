const Home = ({ bookingFormHandler }) => {
  return (
    <div className="text-white leftmove">
      <div className="flex">
        <h1 className="text-4xl font-bold mt-48 ml-40">
          Welcome to Fix Health
        </h1>
      </div>
      <div className="flex">
        <div className="border border-white w-52 mt-10 ml-10 p-3 rounded-lg shadow-white shadow-md ">
          <h1 className="font-bold text-lg ">1,00,000 +</h1>
          <h1 className="font-bold">sessions</h1>
          <span className="text-sm">Convininet & Effective care</span>
        </div>
        <div className="border border-white w-52 mt-10 ml-10 p-3 rounded-lg shadow-white shadow-md">
          <h1 className="font-bold text-lg ">100 +</h1>
          <h1 className="font-bold">Cities</h1>
          <span className="text-sm">Patients from metro to taluka places</span>
        </div>
        <div className="border border-white w-52 mt-10 ml-10 p-3 rounded-lg shadow-white shadow-md">
          <h1 className="font-bold text-lg ">3.8/4</h1>
          <h1 className="font-bold ">Patient Feedback</h1>
          <span className="text-sm p-0.5 ">
            Patient satisfaction is our primary goal.
          </span>
        </div>
      </div>
      <button
        onClick={bookingFormHandler}
        className="bg-green-700 px-3 py-1 rounded-lg mt-10 -ml-36"
      >
        Book Slot
      </button>
    </div>
  );
};
export default Home;
