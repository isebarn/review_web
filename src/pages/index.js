import React, { useState } from "react";
import Link from "next/link";
import { searchProduct } from "@/services/SearchServices";

const HomePage = () => {
  const [searchId, setSearchId] = useState("");

  const searchHandle = async () => {
    const response = searchProduct(searchId);
    if (response) {
      console.log(response);
    } else {
      console.log("something went wrong");
    }
  };

  return (
    <div className="container vh-100">
      <div className="row flex-center">
        <div className="col-sm-10 col-md-10 col-lg-8 col-xl-8 col-xxl-5">
          <Link className="d-flex flex-center text-decoration-none" href="/">
            <div className="d-flex fw-bolder fs-5">Summary</div>
          </Link>
          <label className=" mt-5 mb-3">Search Your Product Here</label>
          <div className="d-flex">
            <input
              onChange={(event) => setSearchId(event.target.value)}
              className="form-control w-100"
            />
            <button
              onClick={searchHandle}
              className="btn btn-primary w-25 ms-3"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
