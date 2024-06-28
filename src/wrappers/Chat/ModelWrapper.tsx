import Ratings from "../../components/ratings";

type pageProps  = {
    modelName: string,
    response?: string,
}

const ModelWrapper = ({modelName, response}: pageProps) => {
  return (
    <div className="flex flex-col justify-center items-start gap-5">
      <div className="w-[700px] h-[480px] border-2 rounded-lg border-white relative">
      <div className="absolute top-0 left-0 border-2 rounded-br-lg border-white w-36 h-10 text-center flex justify-center items-center">{modelName}</div>
      <p className="absolute top-10 p-8 text-xl h-[400px] overflow-y-scroll ">{response}</p>
      </div>
      <Ratings />
    </div>
  );
};

export default ModelWrapper;
