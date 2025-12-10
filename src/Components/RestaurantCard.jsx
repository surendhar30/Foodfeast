const IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";


const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <div className="card-details">
        <h2>{name}</h2>
        <h5>{cuisines.join(", ")}</h5>
        <h6>{area}</h6>
      </div>
      <span>
        <h4
          style={
            avgRating < 4
              ? { backgroundColor: "red" }
              : { backgroundColor: "rgb(19, 176, 1)" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;