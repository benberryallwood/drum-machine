//import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

const drums = [
    {
        key: 'Q',
        name: 'Bass 1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
        key: 'W',
        name: 'Hi Hat Closed',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    },
    {
        key: 'E',
        name: 'Snare 1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    },
    {
        key: 'A',
        name: 'Bass 2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
        key: 'S',
        name: 'Hi Hat Open',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
        key: 'D',
        name: 'Tom 1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
        key: 'Z',
        name: 'Bass 3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
        key: 'X',
        name: 'Crash',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
        key: 'C',
        name: 'Tom 2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    }
];

function DrumPad(props) {
    const key = props.drum.key;
    const drumName = props.drum.name;
    const url = props.drum.url;
    
    const padActivate = function() {
        const clip = document.getElementById(key);
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
                src={url}
            />
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
