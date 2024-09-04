import { useNavigate } from "react-router-dom";
import Header from "../wrappers/Home/Header";
import { Button } from "../components/ui/button";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/chat");
  };
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
  return (
    <>
      <Header />
      <Button
        className="bg-white text-black border-2 rounded-md border-[#0C0F19] hover:text-white"
        onClick={handleNavigation}
      >
        Try Biased GPT
      </Button>
    </>
  );
};

export default Home;
