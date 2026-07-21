"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
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
          autoplay: 0, // Matikan autoplay bawaan yt agar kita kontrol manual lewat overlay
          controls: 0,
          disablekb: 1,
        },
        events: {
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

  const handleEnter = () => {
    setHasEntered(true);
    if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
      playerRef.current.playVideo();
    }
  };

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
      <AnimatePresence>
        {!hasEntered && (
          <motion.div 
            initial={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(20px)", transition: { duration: 1.5, ease: "easeInOut" } }}
            className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-amber-500 mb-8 tracking-widest text-center" style={{ fontFamily: 'var(--font-outfit)' }}>
              MISTERI BABEL
            </h1>
            <button 
              onClick={handleEnter}
              className="px-8 py-4 border-2 border-amber-500 text-amber-500 text-xl tracking-widest hover:bg-amber-500 hover:text-black transition-all cursor-pointer"
            >
              MULAI PERJALANAN
            </button>
            <p className="text-gray-500 mt-6 text-sm tracking-wide">
              ( Disarankan menggunakan earphone / aktifkan suara )
            </p>
          </motion.div>
        )}
      </AnimatePresence>

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
