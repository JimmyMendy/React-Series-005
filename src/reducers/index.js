import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'What you talking about?', artist: 'Young Jeezy', duration: '3:21' },
    { title: 'March Madness', artist: 'Future', duration: '4:05' },
    { title: 'Shake Junk', artist: 'Big K.R.I.T.', duration: '4:48' },
    { title: 'Can you stand the rain', artist: 'New Edition',  duration: '4:25' }
  ];
};

const SelectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: SelectedSongReducer
});