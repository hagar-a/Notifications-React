import "./Alert.scss";
import { useState } from "react";
import { SquareX } from "lucide-react";

interface Idata {
  title: string;
  data: string;
  image: string;
}

function Alert({ title, data, image }: Idata) {
  const [IsVisible, setIsVisible] = useState(true);

  function handleDelete() {
    setIsVisible(false);
  }

  return (
    <>
      {IsVisible && (
        <div className="wrapper">
          <div className="header-icons">
            <span onClick={handleDelete}>
              <SquareX style={{border:'4px solid #f0dff4' , borderRadius:'20'}} />
            </span>
          </div>
          <div className="image-wrapper">
            <img src={image} alt="Alert" className="alert-image" />
            <div className="image-container">
              <span>{data}</span>

              <p style={{fontWeight:'lighter'}}>{title}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Alert;
