import { useNavigate } from "react-router-dom";
import Header from "../wrappers/Home/Header";
import { Button } from "../components/ui/button";
import Analytics from "../wrappers/Home/Analytics";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/chat");
  };


  return (
    <>
      <Header />
      <Button className="bg-white text-black hover:bg-transparent hover:border-2 hover:border-white hover:text-white" onClick={handleNavigation}>
        Try Biased GPT
      </Button>
      <Analytics />
    </>
  );
};

export default Home;
