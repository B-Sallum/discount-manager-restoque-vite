import { FaSpinner } from "react-icons/fa";
import "./styles.css";

const Spinner = () => {
  return (
  <div className="flex-ctr margin-spinner">
    <div className="flex-ctr spinner">
      <FaSpinner className="rotate-scale-up" />  Carregando dados
    </div>
  </div>
  )
}

export default Spinner;
