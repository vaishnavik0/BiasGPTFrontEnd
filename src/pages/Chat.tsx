import { Home } from "lucide-react";
import { Button } from "../components/ui/button";
import ModelWrapper from "../wrappers/Chat/ModelWrapper";
import UserInput from "../wrappers/Home/UserInput";
import { useNavigate } from "react-router-dom";

const Chat = () => {
    const navigate = useNavigate()
    const handleNavigation = () => {
        navigate("/")
    }
  return (
    <div className="flex flex-col justify-center items-center gap-6 h-full">
        <div className="flex justify-start items-center w-full">
            <Button className="bg-white text-black flex items-center gap-3 hover:text-white hover:border-2 hover:border-white" onClick={handleNavigation}><Home />Return Home</Button>
        </div>
     <div className="flex w-full h-full gap-5 justify-around items-center">
     <ModelWrapper modelName="Model A" response="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam numquam id modi? Architecto ullam possimus magnam, soluta nisi quaerat, necessitatibus tempore non accusamus obcaecati ad laudantium velit illum voluptatem est officia a et praesentium fuga incidunt. Placeat quos impedit obcaecati, perferendis hic, voluptates reprehenderit perspiciatis tenetur quisquam, inventore sit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam numquam id modi? Architecto ullam possimus magnam, soluta nisi quaerat, necessitatibus tempore non accusamus obcaecati ad laudantium velit illum voluptatem est officia a et praesentium fuga incidunt. Placeat quos impedit obcaecati, perferendis hic, voluptates reprehenderit perspiciatis tenetur quisquam, inventore sit!
     
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam numquam id modi? Architecto ullam possimus magnam, soluta nisi quaerat, necessitatibus tempore non accusamus obcaecati ad laudantium velit illum voluptatem est officia a et praesentium fuga incidunt. Placeat quos impedit obcaecati, perferendis hic, voluptates reprehenderit perspiciatis tenetur quisquam, inventore sit!" />
      <ModelWrapper modelName="Model B" response="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam numquam id modi? Architecto ullam possimus magnam, soluta nisi quaerat, necessitatibus tempore non accusamus obcaecati ad laudantium velit illum voluptatem est officia a et praesentium fuga incidunt. Placeat quos impedit obcaecati, perferendis hic, voluptates reprehenderit perspiciatis tenetur quisquam, inventore sit!" />

     </div>
      <UserInput />
    </div>
  );
};

export default Chat;
