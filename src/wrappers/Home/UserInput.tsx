import { useNavigate } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Textarea } from "../../components/ui/textarea"
import {CircleArrowDown, CircleArrowUp } from "lucide-react"
import { useState } from "react"
import axios from "axios"

type PageProps ={
  arrowDirection:string,
  setUserResponse?:any,
}

const UserInput = ({arrowDirection, setUserResponse}:PageProps) => {
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate("/chat")
  }
  const [userPrompt, setUserPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSendRequest = () => {
      axios.post('https://biasgptbackend.vercel.app/chat', {
          modelName: "Model A",
          userPrompt: userPrompt,
      })
      .then(response => {
          setResponse(response.data.response);
          setUserResponse(response.data.response)
      })
      .catch(error => {
          console.error('Error:', error);
      });
      localStorage.setItem("response",response)
  };

  
  return (
    <div className="w-full gap-10 flex justify-center flex-col items-center ">
         <div className="relative w-full">
      <Textarea 
      value={userPrompt}
      onChange={e => setUserPrompt(e.target.value)}
        placeholder="Enter your prompt here" 
        className="bg-[#0C0F19] w-[80vw] text-xl p-3"
      ></Textarea>
      <Button 
        className="absolute top-1/2 right-0 md:right-[3.5rem] lg:right-[8rem] transform -translate-y-1/2 bg-transparent text-2xl text-white transition-all hover:bg-transparent hover:scale-100"
        onClick={handleNavigation}
      >
        {arrowDirection=="up"? (
          <CircleArrowUp size={32} strokeWidth={2} onClick={handleSendRequest} />
        ): (
          <CircleArrowDown size={32} strokeWidth={2} onClick={handleSendRequest}  />
        )}
      </Button>
    </div>
     
    </div>
  )
}

export default UserInput