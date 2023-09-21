import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { searchDataFunc, sortingDataFunc } from "../redux/dataSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between bg-indigo-600 text-white p-3">
      <div className="text-3xl">Quiz App</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select
            onChange={(e) => dispatch(sortingDataFunc(e.target.value))}
            className="h-10 rounded-lg"
            name=""
            id=""
          >
            <option value="asc">Increase</option>
            <option value="desc">Descrease</option>
          </select>
        </div>
        <div>
          <input
            className="h-10 rounded-lg px-4 text-black"
            type="text"
            placeholder="Search"
            onChange={(e) => dispatch(searchDataFunc(e.target.value))}
          />
        </div>
        <div
          onClick={() => dispatch(modalFunc())}
          className="bg-indigo-900 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
        >
          <IoIosAddCircle size={24}></IoIosAddCircle>
        </div>
      </div>
    </div>
  );
};

export default Header;
