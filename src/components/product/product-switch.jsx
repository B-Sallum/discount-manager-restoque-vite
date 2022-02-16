import { useSwitchContext } from "../../contexts/switch-product-context";

import { AiFillCloseCircle } from 'react-icons/ai';

const ProductSwitch = (props) => {

  const { switchProduct, setSwitchProduct } = useSwitchContext();

  return (
    <div className='modal-bg'>
      <div className='wrap-modal'>


        <AiFillCloseCircle
          className="close-modal"
          onClick={() => {
            setSwitchProduct(null);
          }}
        />
      </div>
    </div>
  )
}

export default ProductSwitch;