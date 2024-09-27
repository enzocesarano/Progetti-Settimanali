
import DailyHour from "./DailyHour";

const Daily = ({ cityProp }) => {
  return (
    <div className="p-4 containerWrap overflow-x-scroll mb-5">
       {cityProp.list.map((element, i) => (
        <DailyHour key={i} cityProp={element} />
      ))} 
    </div>
    
  );
};

export default Daily;
