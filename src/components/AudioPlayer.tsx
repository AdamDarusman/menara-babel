"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);
  
  // Menggunakan ID video dari pengguna: fvUW0Po9Fcc
  const videoId = "fvUW0Po9Fcc"; 

  useEffect(() => {
    // Memuat YouTube IFrame API secara dinamis
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }
    }

    const initPlayer = () => {
      playerRef.current = new window.YT.Player('yt-player', {
        height: '10',
        width: '10',
        videoId: videoId,
        playerVars: {
          autoplay: 1, 
          controls: 0,
          disablekb: 1,
        },
        events: {
          'onReady': (event: any) => {
             // Coba putar otomatis saat siap
             event.target.playVideo();
          },
          'onStateChange': (event: any) => {
            // YT.PlayerState.ENDED adalah 0 (Saat musik selesai)
            if (event.data === 0) {
              setIsPlaying(false);
              // Set jeda 5 detik (5000 milidetik) sebelum memutar kembali
              setTimeout(() => {
                if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
                  playerRef.current.playVideo();
                }
              }, 5000); 
            } else if (event.data === 1) { // PLAYING
              setIsPlaying(true);
            } else if (event.data === 2) { // PAUSED
              setIsPlaying(false);
            }
          }
        }
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  // Mengakali kebijakan Auto-play browser: Putar saat user klik atau scroll halaman pertama kali
  useEffect(() => {
    const handleInteraction = () => {
      if (playerRef.current && typeof playerRef.current.getPlayerState === 'function') {
        const state = playerRef.current.getPlayerState();
        // Jika belum main, mainkan
        if (state !== 1) {
          playerRef.current.playVideo();
        }
      }
      // Hapus pendengar event setelah interaksi pertama
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
    
    document.addEventListener('click', handleInteraction);
    document.addEventListener('scroll', handleInteraction);
    
    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation(); // Mencegah trigger event klik ganda
    if (playerRef.current && typeof playerRef.current.getPlayerState === 'function') {
      const state = playerRef.current.getPlayerState();
      if (state === 1) { // Jika sedang bermain
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    }
  };

  return (
    <>
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-black/60 border border-amber-500/30 text-amber-500 hover:bg-amber-900/40 backdrop-blur-md transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]"
        title="Toggle Background Music"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

      <div className="fixed w-0 h-0 overflow-hidden invisible pointer-events-none -z-50">
        <div id="yt-player"></div>
      </div>
    </>
  );
}
