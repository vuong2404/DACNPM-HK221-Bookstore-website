import classNames from 'classnames';
import Content from '../component/Content/Content';
import Navi from '../component/Navi/Navi';
import images from '~/assets/images';
import DefaultLayout from '../DefaultLayout';
import styles from './Search.module.scss';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const cx = classNames.bind(styles);
function SearchPage() {
    const [bookList, setBookList] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();
    let key = searchParams.get('key');

    const handleSearch = async () => {
        await axios
            .get(`http://localhost:8080/api/book?key=${key}`)
            .then((res) => res.data)
            .then((data) => setBookList(data))
            .catch((err) => alert('Đã xảy ra lỗi!', err));
    };

    useEffect(() => {
        handleSearch();
    });


  return (
    <>
      <DefaultLayout>
      <Navi />
        {bookList.length? <h1>Kết quả tìm kiếm của từ khóa '{key}':</h1>:<h1>Không tìm được sách phù hợp</h1>}
          <Content book={bookList} />
      </DefaultLayout>
    </>
  );
}

export default SearchPage;
