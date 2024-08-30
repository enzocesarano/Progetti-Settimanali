
const City = ({cityProp}) => {

  return (
    <div className="d-flex align-items-baseline text-light">
        <i className="bi bi-geo-alt-fill fs-4 me-2 text-light"></i>
        <h4>{cityProp}</h4>
    </div>
  );
};


export default City