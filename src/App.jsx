import { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./components/Pagination/Pagination";
import axios from "axios";

const URL =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

function App() {
  const [fetchedData, setFetchedData] = useState([]);

  const ApiCall = async () => {
    try {
      const data = await axios.get(URL)
      console.log(data.data)
      setFetchedData(data.data)
    } catch (error) {
      alert("failed to fetch data: " , error)
    }
  };

  useEffect(() => {
    ApiCall();
  }, []);
  return (
    <>
    {fetchedData.length > 0 &&
     <Pagination data={fetchedData} /> 
    }
    </>
  );
}

export default App;
