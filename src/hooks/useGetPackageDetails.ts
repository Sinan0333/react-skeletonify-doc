import { useEffect, useState } from "react";

type PackageData = {
  version: string;
  createdAt: string;
  modifiedAt: string;
  versions: { version: string; createdAt: string }[];
};

const defaultData: PackageData = {
  version: "",
  createdAt: "",
  modifiedAt: "",
  versions: [],
};

const formatPackageData = (data: any): PackageData => {
  return {
    version: data["dist-tags"].latest,
    createdAt: data.time.created,
    modifiedAt: data.time.modified,
    versions: Object.entries(data.time)
      .filter(([key]) => key !== "created" && key !== "modified")
      .map(([version, createdAt]) => ({
        version,
        createdAt: createdAt as string,
      })),
  };
};

function useGetPackageDetails() {
  const [data, setData] = useState<PackageData>(defaultData);

  const fetchData = async () => {
    try {
      fetch("https://registry.npmjs.org/react-skeletonify")
        .then((res) => res.json())
        .then((data) => setData(formatPackageData(data)));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
}

export default useGetPackageDetails;
