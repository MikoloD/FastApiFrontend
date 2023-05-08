import { useState } from 'react';
import ISong from '../interfaces/ISong';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const GetDataFromAPI = () => {
    const [songs, setSongs] = useState<ISong[]>([]);

    const getDataFromAPI = async () => {
        await fetch('http://localhost:8000/', {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        }).then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data)
                setSongs(data);
            });
    };

    return (
        <div>

            <h3>Search STH</h3>
            <Autocomplete
                style={{ width: 300,color: 'white' }}
                freeSolo
                autoComplete
                autoHighlight
                options={songs.map(song => song.artist+" "+song.name)}

                renderInput={(params) => (
                    <TextField
                        {...params}
                        onChange={getDataFromAPI}
                        variant="outlined"
                        label="Search Box"
                    />
                )}
            />      

        </div>
    );
};

export default GetDataFromAPI;