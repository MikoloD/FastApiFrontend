import { useState } from 'react';
import Song from '../models/Song';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { SongViewModel } from '../models/Song';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


const GetDataFromAPI = () => {
    const [songs, setSongs] = useState<Song[]>([]);
    const [value, setValue]= useState<string | SongViewModel | null>();  

    const getDataFromAPI = async () => {
        await fetch('http://localhost:8000/', {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setSongs(data);
            });
    };
    const songOptions=songs.map((song) =>
    ({
        songId: song.songId,
        label: song.artist+' '+song.name
    }))
    
    console.log({value})
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div style={{marginBottom: 30}}>
                <h3>Search For Your Song</h3>
                <Autocomplete
                    freeSolo
                    autoComplete
                    autoHighlight
                    options={songOptions}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            onChange={getDataFromAPI}
                            variant="outlined"
                            label="Search Box"
                        />
                    )}
                    value = {value}
                    onChange={(event: any, newValue:string | SongViewModel | null) => setValue(newValue)}                   
                />
            </div>          
        </ThemeProvider>

    );
};

export default GetDataFromAPI;

