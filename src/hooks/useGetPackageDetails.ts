import { useEffect, useState } from "react";

type PackageData = {
  version: string;
  createdAt: string;
  modifiedAt: string;
  versions: { version: string; createdAt: string }[];
  pullCount: number;
  contributorsCount: number;
  starsCount: number;
};

const defaultData: PackageData = {
  version: "",
  createdAt: "",
  modifiedAt: "",
  versions: [],
  pullCount: 0,
  contributorsCount: 0,
  starsCount: 0,
};

const formatPackageData = (data: any): any => {
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
      // NPM
      const npmRes = await fetch(
        "https://registry.npmjs.org/react-skeletonify"
      );
      const npmDetails = formatPackageData(await npmRes.json());

      // Pull Requests
      const pullsRes = await fetch(
        "https://api.github.com/repos/Sinan0333/react-skeletonify/pulls?state=all"
      );
      const pullsData = await pullsRes.json();
      const pullCount = pullsData.length;

      // Contributors
      const contribRes = await fetch(
        "https://api.github.com/repos/Sinan0333/react-skeletonify/contributors"
      );
      const contribData = await contribRes.json();
      const contributorsCount = contribData.length;

      // Repo Info (stars, forks, watchers, etc.)
      const repoRes = await fetch(
        "https://api.github.com/repos/Sinan0333/react-skeletonify"
      );
      const repoData = await repoRes.json();
      const starsCount = repoData.stargazers_count || 0;

      setData({
        ...npmDetails,
        pullCount,
        contributorsCount,
        starsCount,
      });
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
