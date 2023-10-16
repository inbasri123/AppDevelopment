import React, { useEffect, useState } from 'react';
import './Video.css';
import Sidebar from '../Loginform/Sidebar';
import axios from 'axios';
import ReactPlayer from 'react-player/lazy';

export default function Video2() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/auth/getVideo1")
      .then((response) => {
        const filteredVideos = response.data.filter((video) => video.type === 'video');
        setVideos(filteredVideos);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Sidebar />
      <div className='videofull'>
      <h2>Video List</h2>
      </div>
      <div className='videobody'>
      <ul>
          {videos.map((video) => (
            <li key={video.id}>
              <ReactPlayer
                url={video.url}
                controls={true}
                width="800px"
                height="440px"
              />
              <br/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}