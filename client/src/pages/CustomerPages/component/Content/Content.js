import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import images from '~/assets/images';
import styles from './Content.module.scss';

const cx= classNames.bind(styles);
function Book({value}){
  return (
      <Col>
          <Link to= {`/bookDetail?id=${value.bookId}`} className={cx('book')}>
              <img src={value.urlBook} alt="" />
              <h3>{value.name}</h3>
              <div className={cx('sellInfo')}>
                <h3 className={cx('price')}>{value.price}vnd</h3>
                <h3 className={cx('sell')}>Đã bán: {value.sold_number}</h3>
              </div>
          </Link>
      </Col>
  )
}

function Content({book=[]}){
    return(
      <Container>
        <Row xxl={5} xl={4} lg={4} md={3} sm={2} xs={1}>
          {book.map((item,index)=>{
            return <Book key={index} value={item} />;
          })}
        </Row>
    </Container>
  );
}

export default Content;