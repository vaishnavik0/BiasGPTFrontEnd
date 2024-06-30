import { Home } from "lucide-react";
import { Button } from "../components/ui/button";
import ModelWrapper from "../wrappers/Chat/ModelWrapper";
import UserInput from "../wrappers/Home/UserInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Chat = () => {
  const [apiResponse, setapiResponse] = useState([])
  console.log(apiResponse);
  
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-between items-center gap-6 h-full p-4">
       <Button
          className="bg-white text-black flex items-center gap-3 hover:text-white hover:border-2 hover:border-white"
          onClick={handleNavigation}
        >
          <Home />
          Return Home
        </Button>
        <UserInput arrowDirection="down" setUserResponse={setapiResponse} />
      <div className="flex flex-col md:flex-row w-full h-full md:gap-10 justify-around items-center">
        {apiResponse?.map((item:any,index:number)=>(
        <ModelWrapper
        modelName={index == 0? "Model A":"Model B"}
        response={item?.response}
      />
        ))}
        {/* <ModelWrapper
          modelName="Model B"
          response="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam numquam id modi? Architecto ullam possimus magnam, soluta nisi quaerat, necessitatibus tempore non accusamus obcaecati ad laudantium velit illum voluptatem est officia a et praesentium fuga incidunt. Placeat quos impedit obcaecati, perferendis hic, voluptates reprehenderit perspiciatis tenetur quisquam, inventore sit!"
        /> */}
      </div>
 
    </div>
  );
};

export default Chat;
