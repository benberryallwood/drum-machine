//import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

const drums = [
    {
        key: 'Q',
        name: 'Bass 1',
        url: 'audio/AndrewHuang_WMD_kick_one_shot_tight_1.wav',
        url2: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
        key: 'W',
        name: 'Hi Hat Closed',
        url: 'audio/AndrewHuang_WMD_hihat_one_shot_2.wav',
        url2: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    },
    {
        key: 'E',
        name: 'Snare 1',
        url: 'audio/AndrewHuang_WMD_snare_one_shot_full_2.wav',
        url2: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    },
    {
        key: 'A',
        name: 'Bass 2',
        url: 'audio/AndrewHuang_WMD_kick_one_shot_tight_4.wav',
        url2: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
        key: 'S',
        name: 'Hi Hat Open',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        url2: 'audio/AndrewHuang_WMD_hihat_one_shot_2.wav',
    },
    {
        key: 'D',
        name: 'Tom 1',
        url: 'audio/AndrewHuang_WMD_tom_one_shot_3.wav',
        url2: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
        key: 'Z',
        name: 'Bass 3',
        url: 'audio/AndrewHuang_WMD_kick_one_shot_tight_1.wav',
        url2: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
        key: 'X',
        name: 'Crash',
        url: 'audio/AndrewHuang_WMD_cymbal_one_shot_14.wav',
        url2: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
        key: 'C',
        name: 'Tom 2',
        url: 'audio/AndrewHuang_WMD_tom_one_shot_1.wav',
        url2: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    }
];

function DrumPad(props) {
    const key = props.drum.key;
    const drumName = props.drum.name;
    const url = props.drum.url;
    const url2 = props.drum.url2;
    
    const padActivate = function() {
        const clip = document.getElementById(key);
        clip.pause();
        clip.currentTime = 0;
        clip.play();
        props.changeDisplay(drumName);
    };
    
    const handleKeyPress = (event) => {
        if (event.key.toUpperCase() === key) {
            console.log(event.key);
            padActivate();
        }
    };
    
    useEffect(() =>
        document.addEventListener('keydown', handleKeyPress),
    []);
    
    return(
        <div
            className="drum-pad"
            id={drumName}
            onClick={padActivate}
        >
            <audio
                className="clip"
                id={key}
            >
                <source src={url} type="audio/wav" />
                <source src={url2} type="audio/wav" />
                Your browser does not support this audio
            </audio>
            {key}
        </div>
    );
}

function App() {
    const [display, setDisplay] = useState('Drum Machine');

    return (
        <div id="drum-machine" className="drum-machine">
            <div id="display" className="display">
                <p>
                    {display}
                </p>
            </div>
            {drums.map(drum =>
                <DrumPad
                    drum={drum}
                    changeDisplay={drumName => setDisplay(drumName)}
                />
            )}
        </div>
    );
}

export default App;
