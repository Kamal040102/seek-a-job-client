import React, { Fragment, useState } from "react";
import InternshipExperienceCard from "./unit/InternshipExperienceCard";
import ButtonToggle from "../../../../../button/button-toggle/ButtonToggle";
import JobExperienceCarousel from "../../../../../carousel/JobExperienceCarousel";

const Internships = ({ data }) => {
  const [cardShortView, setCardShortView] = useState(true);
  return (
    <Fragment>
      <div className="px-4">
        <label className="label font-semibold">
          <span className="text-sm">INTERNSHIP(S)</span>
          <div>
            <ButtonToggle
              name={"internship"}
              noTitle={"Long"}
              yesTitle={"Short"}
              noEvent={(e) => {
                setCardShortView(false);
              }}
              yesEvent={(e) => {
                setCardShortView(true);
              }}
            />
          </div>
        </label>
        <JobExperienceCarousel
          id="internship"
          cardShortView={cardShortView}
          data={data?.internship}
        />
      </div>
    </Fragment>
  );
};

export default Internships;
