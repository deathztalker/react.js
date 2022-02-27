import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import getdata from "./getdata.services";

function App() {
  const MySwal = withReactContent(Swal);
  const [myArray, setMyArray] = useState("false");
  const [cargar, setCargar] = useState(1);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    getdata.getMyData(setMyArray, cargar, setCargar);
    console.log(myArray);
  };

  useEffect(() => {
    if (myArray !== "false") MySwal.fire(myArray);
  }, [myArray, cargar]);

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form>
                <button
                  onClick={(e) => handleSubmit(e)}
                  className="btn btn-success btn-block mt-4"
                >
                  Mostrar Ultimo Valor
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
