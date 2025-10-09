import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function PageNotFound() {
  let navigate = useNavigate();
  let [time, setTime] = useState(20);

  useEffect(() => {
    let _intervalId = setInterval(() => {
      setTime(--time);
    }, 1000);

    // on unmount
    return () => {
      clearInterval(_intervalId);
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      navigate("/");
      //window.location.replace("/");
    }
  }, [time]);

  return (
    <div className="mt-5 h3 text-danger text-center d-flex gap-3 justify-content-center">
      Page Not Found , we redirecting you in {time} else click
      <button onClick={() => navigate("/")}>Home</button>
      <Link to="/">Home</Link>
    </div>
  );
}

export default PageNotFound;
