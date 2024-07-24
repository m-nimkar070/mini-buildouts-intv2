import { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./components/Pagination/Pagination";

const URL =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

function App() {
  const [fetchedData, setFetchedData] = useState([]);

  const ApiCall = async () => {
    await fetch(URL)
      .then((res) => res.json())
      .then((data) => setFetchedData(data))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    ApiCall();
  }, []);
  return (
    <>
      <Pagination data={fetchedData} />
    </>
  );
}

export default App;
