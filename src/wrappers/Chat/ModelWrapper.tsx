import Ratings from "../../components/ratings";
import { Card, CardDescription, CardHeader } from "../../components/ui/card";

type pageProps = {
  modelName: string;
  response?: string;
};

const ModelWrapper = ({ modelName, response }: pageProps) => {
  return (
    <div className="flex flex-col justify-center h-full items-start gap-5 py-4">
      {/* <div className="lg:w-[700px] lg:h-[480px] w-[100%] h-full border-2 rounded-lg border-white relative">
        <div className="absolute top-0 left-0 border-2 rounded-br-lg border-white w-36 h-10 text-center flex justify-center items-center">
          {modelName}
        </div>
        <p className="absolute top-5 p-8 text-xl h-[180px] overflow-y-scroll ">
          {response}
        </p>
      </div> */}
      <Card className="lg:w-[700px] lg:h-[480px] w-[100%] h-full p-4 bg-transparent text-white">
        <CardHeader className="text-4xl">
          {modelName}
        </CardHeader>
        <CardDescription className="text-white md:text-xl text-justify overflow-y-scroll h-80">
          {response}
        </CardDescription>
      </Card>
      <Ratings />
    </div>
  );
};

export default ModelWrapper;
