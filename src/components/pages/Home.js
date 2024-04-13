import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line
import Button from "react-bootstrap/Button";
import PendingHome from "./home2";
import './Home.css'

const HomePage = () => {
  return (
    <div className="mb-1">
      <div className=" d-flex justify-content-center flex-column align-items-center ">
        <div className="mb-3">
          <Button
            variant="light"
            size="lg"
            className="d-grid gap-2 block "
          >
            Get our Latest Album
          </Button>
        </div>
        <div>
          <Button
            variant="light"
            size="lg"
            className="rounded-circle p-3"
          
          >
            <FontAwesomeIcon icon={faPlay} />
          </Button>
        </div>
      </div>
      <div className="text-center">
        <h2 style={{ marginBottom: "5%" }}>ABOUT</h2>
      </div>
      <PendingHome />
      
    </div>
  );
};

export default HomePage;