import React from "react";
import FrontPage from "../FrontPage/FrontPage";
import BasicInfo from "../BasicInfo/BasicInfo";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import MoreInfo from "../MoreInfo/MoreInfo";
import Reviews from "../Reviews/Reviews";
import Payment from "../Payment/Payment";

export default function Dashboard({
  updateReviewNumber,
  reviewNumber,
  buyProduct,
  buyers,
  history,
  blur,
}) {
  return (
    <div className={`Dashboard ${blur && "blur"}`}>
      <FrontPage />
      <BasicInfo buyers={buyers} />
      <VideoPlayer kits={3000 - buyers} />
      <MoreInfo />
      <Reviews i={reviewNumber} updateReviewNumber={updateReviewNumber} />
      <Payment buyProduct={buyProduct} history={history} />
    </div>
  );
}
