import { Home } from "lucide-react";
import { Button } from "../components/ui/button";
import ModelWrapper from "../wrappers/Chat/ModelWrapper";
import UserInput from "../wrappers/Home/UserInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "../components/loader";

const Chat = () => {
  const [apiResponse, setapiResponse] = useState({
    modelResponse: [],
    userPrompt: "",
  });
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-between items-center gap-6 h-full p-4">
      <Button
        className="bg-white text-black border-2 rounded-md border-[#0C0F19] hover:text-white"
        onClick={handleNavigation}
      >
        <Home />
        Return Home
      </Button>
      <UserInput
        arrowDirection="down"
        setUserResponse={setapiResponse}
        setLoader={setLoader}
      />
      <div className="flex flex-col md:flex-row w-full h-full md:gap-10 justify-around items-center">
        {loader ? (
          <div className="flex h-screen w-full justify-center items-start">
            <Loader />
          </div>
        ) : (
          apiResponse?.modelResponse?.map((item: any, index: number) => (
            <ModelWrapper
              key={index} // Ensure each item has a unique key when mapping
              modelName={index === 0 ? "Model A" : "Model B"}
              response={item?.response}
              model={item?.modelName}
              userPrompt={apiResponse?.userPrompt}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Chat;
