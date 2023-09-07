// // LoadingModal.js
// import React from "react";
// import lottie from "lottie-web";
// import animationData from "../assets/animation/loading.json"; // Replace with your animation data
// import loading from '../assets/animation/loadingDots.json';
// import load from '../assets/animation/'
// import Modal from "react-modal";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
//   overlay: {
//     backgroundColor: "rgba(255, 255, 255, 1)",
//   },
// };

// const LoadingModal = ({ isOpen }) => {
//   React.useEffect(() => {
//     if (isOpen) {
//       const anim = lottie.loadAnimation({
//         container: document.getElementById("loading-animation"),
//         renderer: "svg",
//         loop: true,
//         autoplay: true,
//         animationData: animationData,
//       });

//       return () => {
//         anim.destroy();
//       };
//     }
//   }, [isOpen]);

//   return (
//     <Modal
//       isOpen={isOpen}
//       contentLabel="Loading Modal"
//       style={customStyles}
//     >
//       <div className="w-24 h-24" id="loading-animation">{animationData}</div>
//     </Modal>
//   );
// };

// export default LoadingModal;




import React, { useRef } from "react";
import lottie from "lottie-web";
import animationData from "../assets/animation/loadingCircle.json"; // Replace with your animation data
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none"
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
};

const LoadingModal = ({ isOpen }) => {
  
  const animationContainer = useRef(null);
  React.useEffect(() => {
    
    const container = document.getElementById("loading-animation");
      
    if (isOpen) {
      // Check if the container element exists before rendering the animation
      if (container) {
        const anim = lottie.loadAnimation({
          container: animationContainer.current,
          animationData, // Pass your animation data here
          loop: true,
          autoplay: true,
        });

        return () => {
          anim.destroy();
        };
      }
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Loading Modal"
      style={customStyles}
    >
      <div className="w-[30rem] h-[30rem ] text-slate-600 font-extrabold text-3xl border-collapse border-none outline-none w-full items-center justify-center">
      {/* <div ref={animationContainer} /> */}
      Loading...
      </div>
    </Modal>
  );
};

export default LoadingModal;
