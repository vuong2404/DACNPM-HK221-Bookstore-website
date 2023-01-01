import Content from '~/components/Customer/Content/Content';
import Navi from '~/components/Customer/Navi/Navi';
import DefaultLayout from '~/layout/CustomerLayout';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

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
