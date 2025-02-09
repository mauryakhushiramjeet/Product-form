import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addProductList } from "./ProductSlice";

const Product = () => {
  const [optionName, setOptionName] = useState("");
  const [inputs, setInputs] = useState([""]); // Start with one input field
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((store) => store.product.productDetails);
  const handleInput = (index, e) => {
    const newInputs = [...inputs];
    newInputs[index] = e.target.value;
    setInputs(newInputs);

    // If it's the last input and not empty, add a new one
    if (index === inputs.length - 1 && e.target.value !== "") {
      setInputs([...newInputs, ""]);
    }
  };
  const hadleInputeDelete = (indexRemove) => {
    const restInput = inputs.filter((_, index) => index !== indexRemove);
    setInputs(restInput);
  };
  const handleVrientData = (e) => {
    e.preventDefault();
    if (optionName && inputs) {
      // const allArrayData=
      dispatch(addProductList({ optionName, inputs }));
      setInputs([""]);
    }
  };

  // useEffect(() => {
  //   console.log("data is", data);
  // }, [data]);
  return (
    <div className="w-[80%] flex border border-b justify-center items-center flex-col gap-2 p-4">
      {/* Option Name */}

      {data &&
        data.map((item, index) => (
          <div key={index}>
            <p className="font-bold">{item.optionName}</p>
            <div className="flex  gap-5 ">
              {item.inputs.map((input, i) => (
                <div key={i} className="border border-b">
                  {input}
                </div>
              ))}
            </div>
          </div>
        ))}

      <div className="flex flex-col">
        <label className="p-2">Option Name</label>
        <select
          className="border border-b p-2"
          value={optionName}
          onChange={(e) => setOptionName(e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="size">Size</option>
          <option value="color">Color</option>
          <option value="material">Material</option>
        </select>
      </div>

      {/* Option Values (Dynamic Input Fields) */}
      <div className="flex flex-col ">
        <label className="p-2">Option Value::::</label>
        {inputs.map((value, index) => (
          <div className="flex items-center">
            <input
              key={index}
              type="text"
              value={value}
              className="border p-2 mb-2"
              placeholder="Enter option value..."
              onChange={(e) => handleInput(index, e)}
            />
            {index > 0 ? (
              <AiFillDelete
                size={22}
                className="cursor-pointer"
                onClick={() => hadleInputeDelete(index)}
              />
            ) : null}
          </div>
        ))}
      </div>
      <button
        className="border border-b bg-green-400 cursor-pointer p-1 font-bold rounded-full"
        onClick={handleVrientData}
      >
        done
      </button>
      <table>
        <thead>
          <tr>
            <th className="p-4 border border-b">compination</th>
            <th className="p-4 border border-b">Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-b">
            <td>R-M</td>
            <td>
              {" "}
              {price > 0}{" "}
              <input
                type="number"
                className="p-4 border border-b"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                className="p-4 border border-b"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Product;
