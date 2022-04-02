import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";


const CreateVideo = createContext()

const VideoProvider = ({children}) => { 

    const [videoList, setVideoList] = useState([])

    useEffect(() => {
        (async () => {
            const videoDataResponse = await axios.get("/api/videos")
            // console.log(videoDataResponse.data.videos)
            if (videoDataResponse.status === 200){
                setVideoList(videoDataResponse.data.videos)
            }
        }) ()
    }, [])

    

    return(
        <CreateVideo.Provider value={{videoList, setVideoList}}>
            {children}
        </CreateVideo.Provider>
    )
}

const useVideoList = () => useContext(CreateVideo)

export {VideoProvider, useVideoList}