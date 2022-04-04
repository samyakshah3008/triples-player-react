import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const CreateVideo = createContext();

const VideoProvider = ({ children }) => {
  const [videoList, setVideoList] = useState([]);

  const getCategoryByVideo = (data, category) => {
    const getVideoData = [...data];
    if (category === "All") {
      return getVideoData;
    } else {
      return getVideoData.filter(
        (eachVideo) => eachVideo.categoryName === category
      );
    }
  };

  const uniqueCategory = (data) => {
    const finalData = data.map((eachVideo) => eachVideo["categoryName"]);
    // console.log(finalData)
    return [...new Set(finalData)];
  };
  const result = uniqueCategory(videoList);
  // console.log(result)

  useEffect(() => {
    (async () => {
      const videoDataResponse = await axios.get("/api/videos");
      if (videoDataResponse.status === 200) {
        setVideoList(videoDataResponse.data.videos);
      }
    })();
  }, []);

  return (
    <CreateVideo.Provider value={{ videoList, setVideoList }}>
      {children}
    </CreateVideo.Provider>
  );
};

const useVideoList = () => useContext(CreateVideo);

export { VideoProvider, useVideoList };
