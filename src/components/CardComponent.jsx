import Card from "react-bootstrap/Card";

export const CardComponent = ({coin}) => {
  return (
    <>
      <div className="shadow p-4 rounded h-100 ">
            <div className="row">
              <p>
              <img src={coin.iconUrl} width={50} alt="" />
              </p>
              <p className="text-black fw-bold fs-4 mb-0">{coin.name}</p>
            </div>
      </div>
    </>
  );
};
