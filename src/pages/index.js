import React, { useState } from "react";
import Link from "next/link";
import { searchProduct } from "@/services/api";

const HomePage = () => {
  const [searchId, setSearchId] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const searchHandle = async () => {
    const response = await searchProduct(searchId);
    if (response && response !== null) {
      setSearchResult(response);
    } else {
      setSearchResult("Something Went Wrong")
    }
  };

  return (
    <div className="container vh-100">
      <div className="d-flex flex-center flex-column">
        <div className="col-sm-10 col-md-10 col-lg-8 col-xl-8 col-xxl-5 mb-5">
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
        <div className="col-sm-10 col-md-10 col-lg-8 col-xl-8 col-xxl-5">
        <p className="text-center">
           {searchResult}
        </p>
      </div>
      </div>
    </div>
  );
};

export default HomePage;
