import { useEffect, useState } from "react";
import Tableview from "../TableView/Tableview";

const Pagination = ({ data }) => {
  const [page , setPage]=useState(1);
  const [starting , setStarting] = useState(0);
  const [slicedData , setSlicedData] = useState([])

  const numOfData = 10;
  const totalPages = Math.ceil(data.length/numOfData)
  
  const nextData=()=>{
    if(page<5){
      setPage((prev)=>prev+1)
      setStarting((prev)=>prev+numOfData);
    }
  }
  const prevData=()=>{
    if(page > 1){
      setPage((prev)=>prev-1)
      setStarting((prev)=>prev-numOfData);
    }
    }
  
  useEffect(()=>{
    setSlicedData(data.slice(starting,starting+numOfData));
  },[starting,data]
  )

  return (
    <>
      <div className="pagination-container">
        <div>
        <Tableview fetchedData={slicedData} />

        </div>

        <div className="button">
          <button onClick={prevData} disabled={page <= 1 } className="btn">Previous</button>
          <button className="btn">{page}</button>
          <button onClick={nextData} disabled={page >= totalPages} className="btn">Next</button>
        </div>

      </div>
    </>
  );
};

export default Pagination;
