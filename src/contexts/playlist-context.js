import { createContext, useState, useContext } from "react";

const createPlaylist = createContext() 


 const CreatePlaylistProvider = ({children}) => { 

    const [createPlaylistModal, setCreatePlaylistModal] = useState(null)
    const [playlistArray, setPlaylistArray] = useState({playlistData: []})
  const [addVideo, setAddVideo] = useState({video: []})


    return (
        <createPlaylist.Provider value = {{createPlaylistModal, setCreatePlaylistModal, playlistArray, setPlaylistArray, addVideo, setAddVideo}}>
            {children}
        </createPlaylist.Provider>
    )
}

 const usePlaylist = () => useContext(createPlaylist); 

 export {CreatePlaylistProvider, usePlaylist}