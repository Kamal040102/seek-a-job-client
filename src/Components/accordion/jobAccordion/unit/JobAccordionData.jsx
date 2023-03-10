import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./JobAccordionData.css";
import classNames from "classnames";
import Avatar from "../../../avatar/Avatar";

const JobAccordionData = ({
  src,
  position,
  positionType,
  companyName,
  salary,
  id,
  companyUrl,
  className,
  location,
}) => {
  const navigate = useNavigate();
  const handleIdClick = (id) => {
    navigate(`/job/${id}`);
  };

  return (
    <Fragment>
      <div
        className={classNames(
          "grid grid-cols-4 text-xs sm:text-sm md:text-md lg:text-lg",
          className
        )}
      >
        <Avatar src={src} />
        <div className="grid grid-cols-1 grid-rows-3 col-span-2">
          <div>
            {position} ({positionType})
          </div>
          <div className="flex items-center">
            <Link className="cursor-pointer" to={companyUrl}>
              {companyName}, {location}
            </Link>
          </div>
          <div className="flex gap-x-1">
            Job Id:{" "}
            <span
              onClick={(e) => handleIdClick(id)}
              className="text-primary underline flex cursor-pointer hover:text-white"
            >
              {id}
            </span>
          </div>
        </div>
        <div>Rs. {salary} /month.</div>
      </div>
    </Fragment>
  );
};

export default JobAccordionData;
