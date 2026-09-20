import React, { useState, useRef, useEffect } from 'react';

export default function MusicPlayer({ onShowToast }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);
  const melodyIndexRef = useRef(0);

  // Indian Raga Frequencies (Bhairavi / Yaman auspicious notes)
  const ragaScale = [
    261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25, 587.33, 659.25
  ];
  const melodyNotes = [
    0, 2, 4, 3, 2, 0, 4, 6, 7, 6, 4, 2, 0,
    4, 6, 7, 8, 9, 8, 7, 6, 4, 2, 0
  ];

  const playHarmonicTone = (freq, duration, type = 'sine') => {
    const audioCtx = audioCtxRef.current;
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch {
      // Audio context might be suspended or closed
    }
  };

  const startIndianRagaMelody = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioContext();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    intervalRef.current = setInterval(() => {
      const noteIdx = melodyNotes[melodyIndexRef.current % melodyNotes.length];
      const freq = ragaScale[noteIdx];
      playHarmonicTone(freq, 1.4, 'triangle');

      if (melodyIndexRef.current % 4 === 0) {
        playHarmonicTone(ragaScale[0] / 2, 2.8, 'sine');
        playHarmonicTone(ragaScale[4] / 2, 2.8, 'sine');
      }
      melodyIndexRef.current++;
    }, 450);
  };

  const stopIndianRagaMelody = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const toggleMusic = () => {
    if (!isPlaying) {
      startIndianRagaMelody();
      setIsPlaying(true);
      onShowToast?.('Playing Traditional Classical Shehnai & Santoor Melody');
    } else {
      stopIndianRagaMelody();
      setIsPlaying(false);
      onShowToast?.('Melody Paused');
    }
  };

  useEffect(() => {
    return () => {
      stopIndianRagaMelody();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <button
      id="music-toggle"
      className={`subtle-music-btn ${isPlaying ? 'music-playing' : ''}`}
      onClick={toggleMusic}
      title="Toggle Wedding Classical Melody"
      aria-label="Toggle Wedding Music"
    >
      <svg className="music-icon-svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
      </svg>
      <div className="subtle-equalizer">
        <span />
        <span />
        <span />
      </div>
    </button>
  );
}
