import React from "react";
import { Link } from "react-router-dom";

const Erorr404 = () => {
  return (
    <div className="bg-red-600 p-20 rounded-xl">
        <h1 className="text-green-400 font-bold text-7xl p-10">404 Error!!</h1>
        <h3 className="text-green-600 font-semibold text-2xl p-10">You find this path as your own pace..</h3>
        <h3 className="text-orange-500 font-medium text-xl p-10 mb-10">This route is not set</h3>
        <Link className="text-white bg-green-500 p-10" to='/'>Click here to go home</Link>
    </div>
  );
};

export default Erorr404;
