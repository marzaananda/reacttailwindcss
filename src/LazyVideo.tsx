import React, { useRef, useEffect, useState } from "react";

interface LazyVideoProps {
  videoSrc: string;
  videoId: string;
  className?: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ videoSrc, videoId, className }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (videoRef.current) videoRef.current.play();
          } else {
            if (videoRef.current) videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      id={videoId}
      className={className}
      muted
      loop
      playsInline
      preload="auto"
      controls={false}
    >
      {isVisible && <source src={videoSrc} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  );
};

export default LazyVideo;
