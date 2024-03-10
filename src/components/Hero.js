import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Hero = () => {
  const { cash, take, products } = useSelector((s) => s);
  const [editProId, setEditProId] = useState(null);
  const dispatch = useDispatch();
  const GetMoney = () => {
    if (name === "" || price === "") {
      alert("fill in the blanks");
    } else {
      const AddObj = {
        id: products.length ? products[products.length - 1].id + 1 : 1,
        name,
        price,
      };
      dispatch({ type: "TO_DO", payload: AddObj });
      setName("");
      setPrice("");
    }
  };

  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const del = (data) => {
    dispatch({ type: "DELETE_PRODUCT", payload: data.id });
  };
  const addEdit = (data) => {
    setName(data.name);
    setPrice(data.price);
    setEditProId(data.id);
    // dispatch({ type: +"EDDIT", payload : })  
  };
  const editProduct = () => {
    let obj = {
      id: editProId,
      name,
      price,
    };
    dispatch({ type: "EDIT_PRODUCT", payload: obj });
  };

  return (
    <div className="Hero">
      <div className="hero-nav flex items-center  justify-center ">
        <div className="all ">
          <div className="take text-4xl text-white bg-red-900 ">
            Расходы
            <h1 className=" mt-10">{"-" + take}</h1>
          </div>
          <div className="between">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text "
              placeholder="name"
            />
            <input
              type="number"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button
              onClick={!editProId ? () => GetMoney() : () => editProduct()}
            >
              {editProId ? "save add" : "buy add"}
            </button>
          </div>
          <div className="add  text-4xl text-white ">
            Кошелёк
            <h1 className=" mt-10">{cash}</h1>
          </div>
        </div>
      </div>

      <div class="relative overflow-x-auto mt-[100px] ml-[250px] ">
        <table class="w-[1000px] text-sm text-left rtl:text-right  text-green-800  dark:text-green-600">
          <thead class="text-xs text-green-700 uppercase bg-gray-50 dark:bg-green-700 dark:text-gray-400">
            <tr className=" text-center">
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                EDIT
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((el) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-green-700 text-center">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {el.name}
                </th>
                <td class="px-6 py-4">{el.price}</td>
                <th>
                  <button
                    onClick={(e) => addEdit(el)}
                    class=" text-center ml-3 mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                  >
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      EDIT
                    </span>
                  </button>
                </th>
                <th className=" text-center">
                  <button
                    onClick={(e) => del(el)}
                    class=" text-center mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                  >
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      DELETE
                    </span>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Hero;
