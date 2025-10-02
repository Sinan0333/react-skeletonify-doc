import { useEffect, useState } from "react";

type DocData = {
  lastUpdatedAt: string;
};

const defaultData: DocData = {
  lastUpdatedAt: "",
};

const formatDocData = (data: any): DocData => {
  return {
    lastUpdatedAt: data?.commit?.committer?.date,
  };
};

function useGetDocDetails() {
  const [data, setData] = useState<DocData>(defaultData);

  const fetchData = async () => {
    try {
      fetch("https://api.github.com/repos/Sinan0333/react-skeletonify/commits")
        .then((res) => res.json())
        .then((data) => setData(formatDocData(data[0])));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
}

export default useGetDocDetails;
