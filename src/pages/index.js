import React from "react";

import { Layout, SEO, PlaceholderImage } from "../components";
import products from "../data/products.json";
import { useState, useEffect, useReducer } from "react";

export default function IndexPage() {
  console.log(products);
  const [searchProducts, setsearchProducts] = useState("");
  const [resultProducts, setresultProducts] = useState([]);
  const handleChange = (e) => {
    setsearchProducts(e.target.value);
  };
  useEffect(() => {
    const results = products.filter(
      (products) =>
        products.name.toLowerCase().includes(searchProducts) ||
        products.category.toLowerCase().includes(searchProducts) ||
        products.price.toString().toLowerCase().includes(searchProducts)
    );
    setresultProducts(results);
  }, [searchProducts]);

  const Checkbox = ({
    clickPants,
    clickShirts,
    clickOut,
    title = "",
    checked = false,
  }) => (
    <label>
      <input
        onClick={(e) => {
          if (clickPants !== undefined) clickPants(e.target.checked);
          if (state.pants === false) {
            setState({ filterPants: "pants" });
          } else {
            setState({ filterPants: "" });
          }
        }}
        onChange={(e) => {
          if (clickShirts !== undefined) clickShirts(e.target.checked);
          if (state.shirts === false) {
            setState({ filterShirts: "shirts" });
          } else {
            setState({ filterShirts: "" });
          }
        }}
        onChange={(e) => {
          if (clickOut !== undefined) clickOut(e.target.checked);
          if (state.out === false) {
            setState({ filterOut: "outerwear" });
          } else {
            setState({ filterOut: "" });
          }
        }}
        type="checkbox"
        checked={checked}
      />
      {title}
    </label>
  );

  const initialState = {
    pants: false,
    shirts: false,
    out: false,
    filterPants: "pants",
    filterShirts: "shirts",
    filterOut: "outerwear",
    selectedCategory: "",
  };

  const reducer = (state, action) => ({ ...state, ...action });
  const [state, setState] = useReducer(reducer, initialState);

  return (
    <Layout>
      <SEO title="Home" />
      <div className="py-12 text-gray-800">
        <div class="flex md:flex-row flex-wrap">
          <div class="w-full md:w-1/4 p-4">
            <select
              class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={(e) => setState({ selectedCategory: e.target.value })}
            >
              <option value="">All</option>
              <option value="shirts">Shirts</option>
              <option value="pants">Pants</option>
              <option value="outerwear">Outerwear</option>
            </select>
          </div>
          <div class="w-full md:w-3/4 p-4">
            <input
              class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-50 float-right appearance-none leading-normal"
              type="text"
              placeholder="Search"
              value={searchProducts}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="container mx-100 px-4">
          <div className="flex flex-wrap">
            {resultProducts
              .filter((x) => x.category.includes(state.selectedCategory))
              .map((y) => (
                <div
                  className="pt-6 w-full md:w-12/12 sm:w-1/3 px-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
                >
                  <div className="relative flex flex-col min-w-0 break-words h-95 bg-grey w-full mb-8 shadow-lg rounded-lg hover:bg-gray-100">
                    <div className="px-4 py-5 flex-auto">
                      <div class="flex md:flex-row flex-wrap">
                        <div class="w-full md:w-2/4 p-4 ">
                          <p className="mb-2 text-gray-600">
                            {y.category.toUpperCase()}
                          </p>
                        </div>
                        <div class="w-full md:w-2/4 p-4">
                          <p className="mb-2 text-gray-600 text-right">
                            {"$" + y.price}
                          </p>
                        </div>
                      </div>
                      <h6 className="text-sm font-semibold text-center bg-black text-white">
                        {y.name}
                      </h6>
                      <img class="w-full h-30 myDIV" src={y.image}></img>
                      <div class="hide text-sm text-white">
                        <p className="text-center">{y.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
