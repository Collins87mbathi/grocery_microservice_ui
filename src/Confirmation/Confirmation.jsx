import React, { useState } from "react";
import { Link } from "react-router-dom";

const Confirmation = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col items-center mt-[4rem]">
      <div>
        <p>please complete the order</p>
      </div>
      <div className="mt-4">
        <Link to="/complete">
          <button className=" px-6 py-2 text-[#F7F7F7] bg-[#40AA54] hover:bg-[#40AA54]">
            {loading ? "loading" : "complete"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
