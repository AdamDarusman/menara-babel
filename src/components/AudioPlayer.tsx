"use client";

import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Menggunakan ID video dari pengguna: fvUW0Po9Fcc
  // Video ini disembunyikan menggunakan CSS (opacity-0, top-[-9999px]) sehingga hanya suaranya yang terdengar
  const videoId = "fvUW0Po9Fcc"; 

  return (
    <>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-black/60 border border-amber-500/30 text-amber-500 hover:bg-amber-900/40 backdrop-blur-md transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]"
        title="Toggle Background Music"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

      {isPlaying && (
        <div className="fixed w-0 h-0 overflow-hidden invisible pointer-events-none -z-50">
          <iframe
            width="10"
            height="10"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}`}
            allow="autoplay"
            title="Background Ambient Music"
          />
        </div>
      )}
    </>
  );
}
