import { useState } from 'react';
import ISong from '../model/Song';
import Button from '@mui/material/Button';
import App_module from '../App.module.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
const darkTheme = createTheme({
  palette: {
      mode: 'dark',
  },
});

const Recomendation = (props: any) => {
    const [songs, setSongs] = useState<ISong[]>([]);
    const requestOptions = {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',},
    };
    const fetchSongData = async () => {
        await fetch('http://localhost:8000/recommenderService/'+props.id,requestOptions)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data)
                setSongs(data);
            });
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Button variant="text" className={App_module['App-MarginBottom']} onClick={() => fetchSongData() } style={{marginBottom: 20}}>
                Get Your Recommendations
            </Button>
            {songs.map((song) => (
            <ListItemButton key={song.songId} component="a" href={song.spotifyUri}>
              <ListItemText primary={song.artist + ' ' + song.name} />
              </ListItemButton>))}
        </ThemeProvider>
    );
};
export default Recomendation;
