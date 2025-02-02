// import { Link } from "react-router-dom";

// const Donate = ({ donate }) => {
//     const {
//         id,
//         img,
//         category_name,
//         category_title,
//         donate_amount,
//     } = donate || {};

//     return (
//         <div
//             className="flex flex-col rounded-lg shadow-md overflow-hidden bg-white transition-all transform hover:scale-105 hover:shadow-lg"
//         >
//             <div className="relative">
//                 <img
//                     src={img}
//                     alt={category_name || "Donate"}
//                     className="w-full h-48 object-cover"
//                 />
//                 <Link to={`/donate/${id}`}>
//                     <span
//                         className="absolute top-3 left-3 py-1 px-3 bg-rose-500 rounded-md text-sm font-medium uppercase tracking-wide"
//                     >
//                         {category_name || "Category"}
//                     </span>
//                 </Link>
//             </div>
//             <div className="p-4 flex flex-col gap-3">
//                 <h2
//                     className="text-xl font-semibold leading-snug"
//                 >
//                     {category_title || "Support a Cause"}
//                 </h2>
//                 <p
//                     className="text-lg font-medium"
//                 >
//                     {donate_amount || "Donation amount not specified"}
//                 </p>
//                 <Link to="/statistics">
//                     <button
//                         className="w-full py-2 rounded-md text-white font-bold shadow-md hover:opacity-90 transition-all"
//                     >
//                         View Details
//                     </button>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default Donate;
