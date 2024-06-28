import { useNavigate } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Textarea } from "../../components/ui/textarea"
import {CircleArrowUp } from "lucide-react"

const UserInput = () => {
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate("/chat")
  }
  return (
    <div className="w-full gap-10 flex justify-center flex-col items-center ">
         <div className="relative w-full">
      <Textarea 
        placeholder="Enter your prompt here" 
        className="bg-[#0C0F19] w-[80vw] text-xl p-3 pr-20"
      ></Textarea>
      <Button 
        className="absolute top-1/2 right-[6.5rem] transform -translate-y-1/2 bg-transparent text-2xl text-white transition-all hover:bg-transparent hover:scale-100"
        onClick={handleNavigation}
      >
        <CircleArrowUp size={32} strokeWidth={2} />
      </Button>
    </div>
     
    </div>
  )
}

export default UserInput