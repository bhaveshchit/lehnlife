import { useState, useEffect } from 'react';
import { IconButton, Box, Typography, Slider, useMediaQuery } from '@mui/material';
import { PlayArrow, Pause, VolumeUp, VolumeOff, MusicNote } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const MusicPlayer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1.0);
  const [audio, setAudio] = useState(null);
  const [showVolume, setShowVolume] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  // List of music files in your public/music folder
  const musicFiles = [
    '/music/Music.mp3',
   // 'music/Music2.mp3',
    //'music/Music3.mp3',
    // Add all your music files here
  ];

  const getRandomTrack = () => {
    const randomIndex = Math.floor(Math.random() * musicFiles.length);
    return musicFiles[randomIndex];
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const audioObj = new Audio(getRandomTrack());
      audioObj.loop = false; // Disable loop to allow track changes
      audioObj.volume = volume;
      setAudio(audioObj);

      // When a track ends, play a new random one
      const handleEnded = () => {
        const newTrack = getRandomTrack();
        audioObj.src = newTrack;
        audioObj.play().catch(console.error);
      };

      audioObj.addEventListener('ended', handleEnded);

      return () => {
        audioObj.pause();
        audioObj.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  useEffect(() => {
    if (audio) {
      audio.volume = volume;
    }
  }, [volume, audio]);

  const togglePlay = () => {
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      // Change track when pressing play
      const newTrack = getRandomTrack();
      audio.src = newTrack;
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.error("Play error:", err));
    }
  };

  const toggleVolume = () => {
    setShowVolume(!showVolume);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  return (
    <>
      <Box sx={{
        position: 'fixed',
        bottom: 20,
        right: isMobile ? 10 : 20,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        background: 'rgba(0,0,0,0.85)',
        borderRadius: '50px',
        p: isMobile ? '6px 12px' : '8px 16px',
        backdropFilter: 'blur(10px)',
        border: '2px solid rgba(255,255,255,0.3)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.6)'
        }
      }}>
        {!isMobile && (
          <>
            <MusicNote sx={{ 
              color: isPlaying ? 'primary.main' : 'text.secondary',
              fontSize: '1.8rem',
              mr: 1,
              filter: isPlaying ? 'drop-shadow(0 0 5px rgba(72,219,251,0.7))' : 'none',
              transition: 'all 0.3s ease'
            }} />
            
            <Typography variant="body1" sx={{
              color: 'white',
              fontWeight: 'bold',
              mr: 2,
              fontSize: '1.1rem',
              background: isPlaying 
                ? 'linear-gradient(45deg, #FF6B6B 30%, #48DBFB 90%)'
                : 'rgba(255,255,255,0.7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease'
            }}>
              {isPlaying ? "Now Playing" : "Music Player"}
            </Typography>
          </>
        )}
        
        <IconButton 
          onClick={togglePlay}
          sx={{
            color: 'white',
            background: isPlaying 
              ? 'linear-gradient(45deg, #FF6B6B 30%, #48DBFB 90%)' 
              : 'rgba(255,255,255,0.2)',
            p: isMobile ? '8px' : '10px',
            '&:hover': {
              transform: 'scale(1.2)',
              background: 'linear-gradient(45deg, #FF6B6B 40%, #48DBFB 100%)'
            },
            transition: 'all 0.3s ease'
          }}
        >
          {isPlaying ? <Pause fontSize={isMobile ? 'medium' : 'large'} /> : <PlayArrow fontSize={isMobile ? 'medium' : 'large'} />}
        </IconButton>
        
        {isMobile ? (
          <IconButton 
            onClick={toggleVolume}
            sx={{
              color: volume > 0 ? 'primary.main' : 'text.secondary',
              p: '8px',
              '&:hover': {
                transform: 'scale(1.2)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            {volume > 0 ? <VolumeUp fontSize="medium" /> : <VolumeOff fontSize="medium" />}
          </IconButton>
        ) : (
          <Box sx={{ 
            width: '100px',
            display: 'flex',
            alignItems: 'center',
            ml: 1
          }}>
            <VolumeUp sx={{ 
              color: volume > 0 ? 'primary.main' : 'text.secondary',
              mr: 1,
              transition: 'all 0.3s ease'
            }} />
            <Slider
              value={volume}
              onChange={handleVolumeChange}
              min={0}
              max={1}
              step={0.01}
              disabled={!isPlaying}
              sx={{
                color: 'primary.main',
                '& .MuiSlider-thumb': {
                  width: 12,
                  height: 12,
                  transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                  '&:hover, &.Mui-focusVisible': {
                    boxShadow: '0 0 0 8px rgba(72, 219, 251, 0.16)'
                  },
                  '&.Mui-active': {
                    width: 20,
                    height: 20
                  }
                }
              }}
            />
          </Box>
        )}
      </Box>

      {/* Mobile Volume Slider Popup */}
      {isMobile && showVolume && (
        <Box sx={{
          position: 'fixed',
          bottom: 80,
          right: 20,
          zIndex: 1001,
          background: 'rgba(0,0,0,0.9)',
          borderRadius: '20px',
          p: '12px 16px',
          backdropFilter: 'blur(10px)',
          border: '2px solid rgba(255,255,255,0.2)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}>
          <VolumeUp sx={{ color: 'primary.main' }} />
          <Slider
            value={volume}
            onChange={handleVolumeChange}
            min={0}
            max={1}
            step={0.01}
            orientation="horizontal"
            sx={{
              width: '150px',
              color: 'primary.main',
              '& .MuiSlider-thumb': {
                width: 14,
                height: 14,
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: '0 0 0 8px rgba(72, 219, 251, 0.16)'
                },
                '&.Mui-active': {
                  width: 20,
                  height: 20
                }
              }
            }}
          />
        </Box>
      )}
    </>
  );
};

export default MusicPlayer;