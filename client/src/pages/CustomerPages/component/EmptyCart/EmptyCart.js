import images from "~/assets/images";

import MyButton from "~/components/Button";

function EmptyCart() {
    return  <div className="d-flex justify-content-center aligh-items-center">
       <div className="mx-auto d-flex flex-column align-items-center">
         <img src = {images.emptyCart} alt ='empty cart' width = '300'></img>
         <p>Giỏ hàng của bạn hiện đang trống</p>
         <MyButton primary user large to='/'>Mua ngay</MyButton>
       </div>

    </div>;
}

export default EmptyCart;
