import { useState } from "react";

const Card = ({ item, doctorhandler, selectDoctor }) => {
  const cardTick =
    "https://th.bing.com/th/id/OIP.Lsp8UZnutLQMX0ogSvx9IQHaHa?rs=1&pid=ImgDetMain";
  const cardDot =
    "https://th.bing.com/th?id=OIP.5eqcNapAwqqIy3D5fKO-1AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
  const [cardSelect, setCardSelect] = useState(false);

  const cardTickhandler = () => setCardSelect(!cardSelect);

  return (
    <div
      className="text-white font-normal w-96 text-center border border-solid-black m-2 rounded-lg "
      onClick={doctorhandler}
    >
      <div className="flex ml-16 mt-5">
        {" "}
        <img
          alt="tick"
          src={!cardSelect ? cardTick : cardDot}
          className="w-4 h-4 m-5 border border-white rounded-full"
        />
        <h1 className="font-bold mt-[13px] mb-2">{item?.Doctor}</h1>
      </div>
      <span className="text-sm m-2 w-72">{item?.Intro}</span>
      <h1 className="mt-2 text-blue-500">{item?.Phone}</h1>
      <h1 className="text-sm m-2  w-80">{item?.Address}</h1>
      <button
        onClick={() => cardTickhandler()}
        className="bg-green-700 px-3 py-1 rounded-lg m-5 hover:scale-105 hover:duration-150 hover:shadow-slate-50"
      >
        Select
      </button>
      <button
        onClick={() => cardTickhandler()}
        className="bg-green-700 px-3 py-1 rounded-lg m-5 hover:scale-105 hover:duration-150 hover:shadow-slate-50"
      >
        Cancel
      </button>
    </div>
  );
};
export default Card;
