import { useEffect, useState } from "react";

function useGetDownloadCount() {
  const [data, setData] = useState<number>();

  const fetchData = async (range: string) => {
    try {
      fetch(`https://api.npmjs.org/downloads/point/${range}/react-skeletonify`)
        .then((res) => res.json())
        .then((data) => setData(data.downloads));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const startDate = "2025-09-22";
    const endDate = new Date().toISOString().split("T")[0];
    fetchData(`${startDate}:${endDate}`);
  }, []);

  return { data, fetchData };
}

export default useGetDownloadCount;
