import Ratings from "../../components/ratings";
import { Card, CardDescription, CardHeader } from "../../components/ui/card";

type pageProps = {
  modelName: string;
  response?: string;
  model: string,
};

const ModelWrapper = ({ modelName, response, model }: pageProps) => {

  return (
    <div className="flex flex-col justify-center h-full items-start gap-5 py-4">
      <Card className="lg:w-[700px] lg:h-[480px] w-[100%] h-full p-4 bg-transparent text-white">
        <CardHeader className="text-4xl">
          {modelName}
        </CardHeader>
        <CardDescription className="text-white md:text-xl text-justify overflow-y-scroll h-80">
          {response}
        </CardDescription>
      </Card>
      <Ratings modelName={model} />
    </div>
  );
};

export default ModelWrapper;
