import React from "react";
import { OverAllRate } from "../DTO/OverAllRate";
import { Link } from "@tanstack/react-router";

export default function TotalRates({Quality = 0.0 ,
  TotalReviews = 231,
  TeacherLink = "12345"} : OverAllRate) {
  return (
    <div className="flex items-center pt-2 w-full ">
      <p className="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
        {Quality}
      </p>
      <p className="ms-2 font-medium text-gray-900 dark:text-white ">
        {Quality > 8 ? "Excellent" : Quality > 6 ? "Good " : "Poor"}
      </p>
      <span className="w-2 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 pr-5 w-full">
        {TotalReviews} reviews
      </p>
      <Link
        to={"/authenticated/teacher/"+TeacherLink}
        className=" w-full text-right text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        Read all reviews
      </Link>
    </div>
  );
}
