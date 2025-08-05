// import React, { useState } from "react";
// import {
//   Menu,
//   X,
//   Star,
//   Play,
//   Download,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// const HomePage = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const featuredMovies = [
//     {
//       id: 1,
//       title: "Quantum Horizon",
//       genre: "Sci-Fi Thriller",
//       rating: 8.9,
//       price: "$14.99",
//       image:
//         "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=300&h=400&fit=crop",
//       description: "A mind-bending journey through space and time",
//     },
//     {
//       id: 2,
//       title: "Shadow Dynasty",
//       genre: "Action Drama",
//       rating: 9.2,
//       price: "$12.99",
//       image:
//         "https://images.unsplash.com/photo-1489599516021-42eff1d7977e?w=300&h=400&fit=crop",
//       description: "An epic tale of power, betrayal, and redemption",
//     },
//     {
//       id: 3,
//       title: "Ocean's Echo",
//       genre: "Mystery Adventure",
//       rating: 8.7,
//       price: "$13.99",
//       image:
//         "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop",
//       description: "Dive deep into the unknown mysteries of the sea",
//     },
//     {
//       id: 4,
//       title: "Neon Dreams",
//       genre: "Cyberpunk Action",
//       rating: 8.5,
//       price: "$15.99",
//       image:
//         "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop",
//       description: "In a world of neon lights and digital shadows",
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentSlide(
//       (prev) => (prev + 1) % Math.ceil(featuredMovies.length / 3)
//     );
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (prev) =>
//         (prev - 1 + Math.ceil(featuredMovies.length / 3)) %
//         Math.ceil(featuredMovies.length / 3)
//     );
//   };

//   return (
//     <>
//       <div className="min-h-screen w-full relative bg-gradient-to-b from-[#d8c7a0] to-[#3a3b1f] text-white font-sans">
//         {/* Mossy terrain background image */}
//         <div className="absolute inset-0 z-0">
//           <img
//             src="https://images.unsplash.com/photo-1489599516021-42eff1d7977e?w=1920&h=1080&fit=crop"
//             alt="background"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Navbar */}
//         <nav className="relative top-4 z-50 bg-white/10 backdrop-blur-md shadow-lg text-white px-6 py-4 mx-auto max-w-6xl rounded-4xl border border-white/10">
//           <div className="flex justify-between items-center">
//             {/* Logo */}
//             <div className="text-2xl font-extrabold tracking-wide text-white drop-shadow-sm">
//               🎬 NextWave
//             </div>

//             {/* Desktop Menu */}
//             <ul className="hidden md:flex space-x-8 font-medium">
//               {["Home", "Movies", "TV Shows", "My List"].map((item) => (
//                 <li
//                   key={item}
//                   className="relative cursor-pointer hover:text-yellow-300 transition-all duration-200 group"
//                 >
//                   {item}
//                   <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-300 transition-all group-hover:w-full"></span>
//                 </li>
//               ))}
//             </ul>

//             {/* Sign In */}
//             <button className="hidden md:inline-block px-5 py-2 rounded-full bg-yellow-300 text-black font-semibold hover:bg-yellow-400 transition">
//               Sign In
//             </button>

//             {/* Mobile Toggle */}
//             <button
//               className="md:hidden text-white"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               {menuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {menuOpen && (
//             <ul className="md:hidden mt-4 flex flex-col space-y-4 text-center font-medium text-white">
//               {["Home", "Movies", "TV Shows", "My List"].map((item) => (
//                 <li
//                   key={item}
//                   className="hover:text-yellow-300 transition-all duration-200"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {item}
//                 </li>
//               ))}
//               <button
//                 className="mt-2 px-5 py-2 rounded-full bg-yellow-300 text-black font-semibold hover:bg-yellow-400 transition"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Sign In
//               </button>
//             </ul>
//           )}
//         </nav>

//         {/* Hero Content */}
//         <div className="relative z-10 px-8 pt-28 pb-16 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
//           {/* Movie Preview */}
//           <div className="flex flex-col items-start max-w-xl">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//               Watch and download <br /> your favorite movies
//             </h1>
//             <p className="text-lg text-white/80 mb-8">
//               Stream blockbuster movies instantly or <br /> download to watch
//               offline at your convenience.
//             </p>

//             <div className="flex space-x-4">
//               <button className="px-6 py-3 bg-black rounded-full text-white text-sm hover:bg-opacity-80 transition">
//                 ▶ Watch Now
//               </button>
//               <button className="px-6 py-3 bg-white text-black rounded-full text-sm hover:bg-gray-100 transition">
//                 ⬇ Download
//               </button>
//             </div>
//           </div>

//           {/* TV Mockup */}
//           <div className="mt-12 lg:mt-0 relative w-[400px] h-[225px] rounded-xl shadow-lg overflow-hidden">
//             <img
//               src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=225&fit=crop"
//               alt="Featured movie scene"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-40 p-6 flex flex-col justify-end text-white">
//               <h2 className="text-xl font-semibold">THE GREAT ADVENTURE</h2>
//               <div className="flex items-center justify-between mt-3">
//                 <span className="text-sm">$12.99</span>
//                 <button className="px-3 py-1 bg-white text-black text-xs rounded-full hover:bg-gray-300">
//                   Download
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Featured Movies Section */}
//       <div className="relative bg-gradient-to-b from-[#3a3b1f] via-black to-[#1a1a1a] py-16">
//         {/* Background overlay for cinema seats */}
//         <div className="absolute inset-0 opacity-10">
//           <img
//             src="https://images.unsplash.com/photo-1489599516021-42eff1d7977e?w=1920&h=600&fit=crop"
//             alt="cinema background"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-8">
//           {/* Section Header */}
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               Featured Movies
//             </h2>
//             <p className="text-lg text-white/70 max-w-2xl mx-auto">
//               Discover the latest blockbusters and critically acclaimed films.
//               Stream instantly or download for offline viewing.
//             </p>
//           </div>

//           {/* Movie Carousel */}
//           <div className="relative">
//             {/* Navigation Buttons */}
//             <button
//               onClick={prevSlide}
//               className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
//             >
//               <ChevronLeft size={24} />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
//             >
//               <ChevronRight size={24} />
//             </button>

//             {/* Movies Grid */}
//             <div className="overflow-hidden">
//               <div
//                 className="flex transition-transform duration-500 ease-in-out"
//                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//               >
//                 {featuredMovies.map((movie) => (
//                   <div
//                     key={movie.id}
//                     className="flex-none w-full md:w-1/3 px-4"
//                   >
//                     <div className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-300/50 transition-all duration-300 hover:scale-105">
//                       {/* Movie Poster */}
//                       <div className="relative overflow-hidden">
//                         <img
//                           src={movie.image}
//                           alt={movie.title}
//                           className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                         {/* Play Button Overlay */}
//                         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                           <button className="bg-yellow-300 text-black p-4 rounded-full hover:bg-yellow-400 transition-colors">
//                             <Play size={24} fill="currentColor" />
//                           </button>
//                         </div>
//                       </div>

//                       {/* Movie Info */}
//                       <div className="p-6">
//                         <div className="flex items-center justify-between mb-2">
//                           <span className="text-sm text-yellow-300 font-medium">
//                             {movie.genre}
//                           </span>
//                           <div className="flex items-center space-x-1 text-yellow-300">
//                             <Star size={16} fill="currentColor" />
//                             <span className="text-sm font-semibold">
//                               {movie.rating}
//                             </span>
//                           </div>
//                         </div>

//                         <h3 className="text-xl font-bold text-white mb-2">
//                           {movie.title}
//                         </h3>
//                         <p className="text-white/70 text-sm mb-4 line-clamp-2">
//                           {movie.description}
//                         </p>

//                         <div className="flex items-center justify-between">
//                           <span className="text-lg font-bold text-yellow-300">
//                             {movie.price}
//                           </span>
//                           <div className="flex space-x-2">
//                             <button className="px-4 py-2 bg-yellow-300 text-black text-sm rounded-full hover:bg-yellow-400 transition flex items-center space-x-1">
//                               <Play size={14} fill="currentColor" />
//                               <span>Watch</span>
//                             </button>
//                             <button className="px-4 py-2 bg-white/10 text-white text-sm rounded-full hover:bg-white/20 transition flex items-center space-x-1">
//                               <Download size={14} />
//                               <span>Download</span>
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Carousel Indicators */}
//           <div className="flex justify-center mt-8 space-x-2">
//             {Array.from({ length: Math.ceil(featuredMovies.length / 3) }).map(
//               (_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     currentSlide === index ? "bg-yellow-300" : "bg-white/30"
//                   }`}
//                 />
//               )
//             )}
//           </div>

//           {/* Browse All Movies CTA */}
//           <div className="text-center mt-12">
//             <button className="px-8 py-4 bg-gradient-to-r from-yellow-300 to-yellow-400 text-black font-semibold rounded-full hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl">
//               Browse All Movies
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;
