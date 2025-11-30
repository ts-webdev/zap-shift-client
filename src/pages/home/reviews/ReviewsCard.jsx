import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";import { IoMdQuote } from "react-icons/io";
;

const ReviewsCard = ({data}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
       <div>
        <IoMdQuote className="text-accent/50" size={60}/>

       </div>

        {/* Review Text */}
        <p className="text-gray-700 mb-4">
          {data.review}
        </p>

        {/* Divider */}
        <div className="divider my-2"></div>

        {/* Reviewer Info */}
        <div className="flex items-center">
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-10">
                <img src={data.user_photoURL} alt="" />
            </div>
          </div>
          <div className="ml-3">
            <h3 className="font-bold text-secondary">{data.userName}</h3>
            <p className="text-sm text-gray-500">{data.user_email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
