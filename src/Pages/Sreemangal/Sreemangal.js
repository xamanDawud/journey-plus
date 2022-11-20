import React from "react";

const Sreemangal = () => {
  return (
    <div className="home flex justify-conte-between">
      <div className="home-left-section mt-28">
        <h1 className="text-5xl font-bold coxs-title mb-4">Sreemangal</h1>
        <p>
          Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known
          for its very long, sandy beachfront, stretching from Sea Beach in the
          north to Kolatoli Beach in the south. Aggameda Khyang monastery is
          home to bronze statues and
        </p>
        <p>
          centuries-old Buddhist manuscripts. South of town, the tropical
          rainforest of Himchari National Park has waterfalls and many birds.
          North, sea turtles breed on nearby Sonadia Island.
        </p>
      </div>
      <div className="coxs-right-section text-black rounded-md">
        <small className="block mb-3">Origin</small>
        <input
          className="block origin-input mb-3 p-3 font-medium rounded-md bg-gray-200"
          type="text"
          name="cox's Bazar"
          defaultValue={"Dhaka"}
          id=""
        />
        <small className="block mb-3">Destination</small>
        <input
          className="block destination-input mb-3 p-3 font-medium rounded-md bg-gray-200"
          type="text"
          name="cox's Bazar"
          defaultValue={"Sreemangal"}
          readOnly
          id=""
        />

        <div className="flex justify-between">
          <span className="from-date">
            <small className="block mb-3">From</small>
            <input
              type="date"
              name="date"
              className="from-date-input mb-3 p-3 font-medium rounded-md bg-gray-200"
              id=""
            />
          </span>
          <span className="to-date">
            <small className="block mb-3">To</small>
            <input
              type="date"
              name="date"
              className="to-date-input mb-3 p-3 font-medium rounded-md bg-gray-200"
              id=""
            />
          </span>
        </div>
        <button className="btn btn-warning coxsBooking-btn">
          Start Booking
        </button>
      </div>
    </div>
  );
};

export default Sreemangal;
