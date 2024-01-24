import React, { useEffect } from "react";
import { useDataLayerValue } from '../utils/DataLayer';
import '../styles/Sidebar.css'
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

export default function Sidebar({ spotify }) {
  const [{ token, playlists, user }, dispatch] = useDataLayerValue();

  useEffect(() => {

    spotify.getUserPlaylists(user).then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      });
      // console.log('user playList aa gyi:', playlists);
    });

  }, [token, dispatch, user, spotify]);

  // const changeCurrentPlaylist = (selectedPlaylistId) => {
  //   dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
  // };
  return (
    <div className='sidebar'>
      <img className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />

      <SidebarOption Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={SearchIcon} option="Search" />
      <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      {/* horizontal line */}
      <hr />

      {/* rendring playlists */}
      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}

    </div>
  );
}