'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scrolling behavior
    });
  };
  return (
    <div className="bg-accent rounded-full fixed bottom-6 right-4 cursor-pointer w-12 h-12 flex justify-center items-center p-2 z-20" onClick={handleClick}>
      <FontAwesomeIcon className="w-full h-full" icon={faArrowUp} />
    </div>
  );
}
