import { FaSpinner } from "react-icons/fa";
import "./styles.css";

const Spinner = ({ text }) => {

  if (!text) {
    text = 'Carregando dados';
  };

  return (
  <div className="flex-ctr margin-spinner">
    <div className="flex-ctr spinner">
      <FaSpinner className="rotate-scale-up" />  { text }
    </div>
  </div>
  )
}

export default Spinner;
