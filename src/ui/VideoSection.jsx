import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Badge } from "./CardUi";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);

  // const togglePlay = () => {
  //   if (videoRef.current) {
  //     if (isPlaying) {
  //       videoRef.current.pause();
  //     } else {
  //       videoRef.current.play();
  //     }
  //     setIsPlaying(!isPlaying);
  //   }
  // };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowControls(false);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-emerald-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-white/20 text-white border border-white/30">
            Featured Video
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See Our Work in Action
          </h2>
          <p className="text-l text-slate-200 max-w-3xl mx-auto">
            Discover how Gubemigentle Construction transforms communities
            through quality infrastructure and construction excellence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => !isPlaying && setShowControls(false)}
          >
            {/* Video Element */}
            <div className="relative aspect-video bg-gradient-to-br from-emerald-600 to-emerald-800">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                muted={isMuted}
                loop
                onEnded={handleVideoEnd}
                poster="/construction-2.jpeg"
                autoPlay={true}
              >
                {/* Sample construction videos - replace with your actual video URLs */}
                <source src="/ads.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Video Overlay when not playing */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              )}
            </div>
            {/* Video Controls */}
            {(isPlaying || showControls) && (
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMute();
                  }}
                  className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </button>
              </div>
            )}

            {/* Video Info Overlay */}

            {/* Loading State */}
            {isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )}
          </div>

          {/* Video Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-white mb-2 animate-pulse">
                500+
              </div>
              <div className="text-emerald-200">Projects Completed</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-white mb-2 animate-pulse">
                25+
              </div>
              <div className="text-emerald-200">Years Experience</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-white mb-2 animate-pulse">
                98%
              </div>
              <div className="text-emerald-200">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Additional Video Information */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-4">
                Why Choose Us?
              </h4>
              <ul className="space-y-3 text-emerald-100">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  Licensed & Insured Professionals
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  25+ Years of Construction Excellence
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  Quality Materials & Modern Equipment
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  On-Time Project Delivery
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-4">Our Promise</h4>
              <p className="text-emerald-100 leading-relaxed">
                Every project we undertake is a testament to our commitment to
                excellence. From initial consultation to final delivery, we
                ensure transparent communication, superior craftsmanship, and
                lasting results that exceed expectations.
              </p>
              <div className="mt-6">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Get Your Free Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
