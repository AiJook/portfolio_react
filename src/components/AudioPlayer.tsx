import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import musicBG from "../assets/music/mirostar-lofi-beats-531504.mp3";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(musicBG);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Error playing audio", e));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;

    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 glass-panel p-2 rounded-full shadow-xl animate-fadeSlideDown">
      <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-surface-hover border border-border ml-2">
        <Music className={`size-4 text-primary ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`} />
      </div>

      <button
        onClick={togglePlay}
        className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-all shadow-[0_0_10px_rgba(20,184,166,0.3)]"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause className="size-5" /> : <Play className="size-5 ml-1" />}
      </button>

      <button
        onClick={toggleMute}
        className="w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:bg-surface-hover transition-colors"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX className="size-5 text-muted-foreground" /> : <Volume2 className="size-5" />}
      </button>
    </div>
  );
}
