import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import * as AiIcons from 'react-icons/ai';
import * as GrIcons from 'react-icons/gr';

// import images from '~/assets/images';
import styles from './Content.module.scss';
import Price from '~/components/PriceDisplay/Price';
import { useViewport } from '~/hooks/hooks';
import RateStar from '../../RateStar/RateStar';

import { addToCartAPI, getCartAPI } from '~/api/CartAPI';
import { useContext } from 'react';
import { Context } from '~/stores';
import { setCart } from '~/stores/actions';


const cx = classNames.bind(styles);
function Book({ book }) {
  const { width, size } = useViewport();
  const [state, dispatch] = useContext(Context)

  const handleAddToCart =async () => {
    await addToCartAPI(book.bookId).then(res => res).catch(err => alert("Đã xảy ra lỗi!", err))
    await getCartAPI().then(res => dispatch(setCart(res)))
  };
  
  return (
    <div
      className={cx('book-item') + ' col-12 col-md-4 col-lg-2 bg-white rounded py-2'}
      style={{ width: width > 992 && '20%' }}
    >
      <Link to={`/bookDetail?id=${book.bookId}`}>
        <img src={book.urlBook} className="w-100 border" height={240} alt="" />
      </Link>
      <div className="px-3">
        <p className="my-1 text-overflow-ellipsis-2">{book.title}</p>
        <div className="d-flex align-items-center justify-content-between my-2">
          <Price primary className="mr-2 ">
            {book.price}
          </Price>
          <p className="m-0">Đã bán: {book.sold_number}</p>
        </div>
        <div>
          <RateStar number={book.star} />
        </div>
        <div className="mt-3 text-center">
          <Link to={`/bookDetail?id=${book.bookId}`}>
            <button className="btn btn-info mr-3">
              <GrIcons.GrView />
            </button>
          </Link>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            <AiIcons.AiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}

function Content({ book = [] }) {
  console.log(book);
  return (
    //   <Container>
    //     <Row xxl={5} xl={4} lg={4} md={3} sm={2} xs={1}>
    //       {book.map((item,index)=>{
    //         return <Book key={index} book={item} />;
    //       })}
    //     </Row>
    // </Container>
    <div className="container my-4">
      {/* <h4 className="text-center my-3">Sách mới hôm nay</h4> */}
      <div className="row g-3 bg-white">
        {book.map((item, index) => {
          return <Book key={index} book={item} />;
        })}
      </div>
    </div>
  );
}

export default Content;
