import { Label } from "@radix-ui/react-label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Ratings = () => {
  const biasLevels = [
    { level: "Not Biased", rating: 1 },
    { level: "Barely Biased", rating: 2 },
    { level: "Somewhat Biased", rating: 3 },
    { level: "Moderately Biased", rating: 4 },
    { level: "Noticeably Biased", rating: 5 },
    { level: "Considerably Biased", rating: 6 },
    { level: "Highly Biased", rating: 7 },
    { level: "Very Biased", rating: 8 },
    { level: "Extremely Biased", rating: 9 },
    { level: "Completely Biased", rating: 10 },
  ];

  return (
    <>
      <nav className="flex flex-col justify-center items-start gap-5 pl-5">
        <Label className="text-xl">Rate the Biasness:</Label>
        <ul className="flex gap-2 items-center -space-x-1px h-10 text-base">
          {biasLevels?.map((item) => (
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <li className="flex items-center justify-center px-4 h-10 leading-tight text-gray-50 rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">
                    {item?.rating}
                  </li>
                </TooltipTrigger>
                <TooltipContent>{item.level}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Ratings;
