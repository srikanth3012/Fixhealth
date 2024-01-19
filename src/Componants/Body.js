import BookingForm from "./BookingForm";
import img from "./Assets/hero.png";
import { useState } from "react";
import Home from "./Home";

const Body = () => {
  const [bokingForm, setBookingForm] = useState(false);
  const bookingFormHandler = () => {
    setBookingForm(true);
    console.log(bokingForm);
  };
  return (
    <>
      <div className="flex bg-blue-950 h-screen w-screen fixed -z-30">
        <div>
          <img alt="doctor" src={img} className="w-96 rounded-lg" />
        </div>
      </div>
      <div className="ml-[30%]">
        {bokingForm ? (
          <BookingForm />
        ) : (
          <Home
            bookingFormHandler={() => {
              bookingFormHandler();
            }}
          />
        )}
      </div>
    </>
  );
};
export default Body;
