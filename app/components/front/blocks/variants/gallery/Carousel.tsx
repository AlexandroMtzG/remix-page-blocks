import { useEffect, useState } from "react";

interface Props {
  images: { title: string; src: string }[];
}
export default function Carousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState<{ title: string; route?: string; src: string } | undefined>(undefined);

  useEffect(() => {
    if (images.length > currentIndex) {
      setCurrentImage(images[currentIndex]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  function nextImage() {
    if (images.length > currentIndex + 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }

  function previousImage() {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <div className="relative mx-auto w-full">
      <div className="mb-2 flex flex-col space-y-3 text-left">
        {/* <h3 className="text-lg font-bold">{currentImage?.group}</h3> */}
        <div className=" flex space-x-1 text-sm font-medium italic dark:bg-gray-900">
          <span className=" ">
            {currentIndex + 1}/{images.length}
          </span>
          <span>&rarr;</span>
          {/* {currentImage?.route ? (
            <Link to={currentImage?.route} className=" border-b border-dashed border-b-theme-300 hover:border-dotted">
              <span>{currentImage?.title} 🔗</span>
            </Link>
          ) : ( */}
          <span className="border-b border-transparent">{currentImage?.title}</span>
          {/* )} */}
        </div>
      </div>
      <div className="relative block w-full overflow-hidden rounded-lg border-4 border-dotted border-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-0 lg:h-[32rem]">
        <div className="absolute top-0 mt-3 ml-2">
          <button
            onClick={previousImage}
            type="button"
            className="absolute rounded-full border border-gray-500 bg-gray-900 p-2 text-gray-300 opacity-90 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-theme-600 focus:ring-offset-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <div className="absolute right-2 top-0 mr-10 mt-3 w-full text-right">
          <button
            onClick={nextImage}
            type="button"
            className="absolute rounded-full border border-gray-500 bg-gray-900 p-2 text-gray-300 opacity-90 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-theme-600 focus:ring-offset-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <img loading="lazy" className="min-h-full w-full object-cover" src={currentImage?.src} alt={currentImage?.title} />
      </div>
    </div>
  );
}
