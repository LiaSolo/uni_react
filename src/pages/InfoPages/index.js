import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';
import { questions, answers } from '../../interview';
import Interview from '../../components/Interview/index';
import { faculties } from '../../Faculties';
import Menu from '../../components/Menu';
import ReactPlayer from 'react-player/youtube';


function FacultyInfo() {
    const {faculty} = useParams();
    let third = 0;
    if (3.1 in answers[faculty]) {
        third = 3.1
    } else if (3.2 in answers[faculty]) {
        third = 3.2
    }
    else {
        third = 3.3
    }
  return (
    <div className='FacultyInfo'>
      {Menu()}
      <h3>{faculties[faculty]['singer']}</h3>

      <div className='big_photo'>
        <img src={require(`../assets/big_photos/${faculties[faculty]['alias']}.jpg`)} width='100%'/>
      </div>
      <div className='phrase_block'>
        {answers[faculty][0]}
      </div>
      <div className='line_gradient_container'>
        <div className='note_icon_container'></div>
      </div>
      <div className='interview'>

        {Interview(questions[1], answers[faculty][1])}
        {Interview(questions[2], answers[faculty][2])}
        {Interview(questions[third], answers[faculty][third])}
        {Interview(questions[4], answers[faculty][4])}
        {Interview(questions[5], answers[faculty][5])}
        {Interview(questions[6], answers[faculty][6])}

      </div>
      
      <div className='music_block' onClick={() => window.open(`${faculties[faculty]['song-link']}`)}>
        <div style={{display:'flex'}}>
          <div className='youtube_music_logo'></div>
          <div className='youtube_music'>YouTube Music</div>
        </div>
        <div className='song_block'>{faculties[faculty]['song']}</div>
      </div>

      <div className='line_gradient_container'>
        <div className='note_icon_container'></div>
      </div>

      <div className='video_container'>
      <ReactPlayer 
        url={faculties[faculty]['open-video']} 
        controls={true}
        width='100%'
        height='100%'
      /></div>

    </div>
      
  );
}

export default FacultyInfo;