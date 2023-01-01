import Slide from '~/components/Slide/Slide';
import SlideShow from '~/components/SlideShow/SlideShow';
import Navi from '~/components/Customer/Navi/Navi';
import Content from '~/components/Customer/Content/Content';

import DefaultLayout from '~/layout/CustomerLayout/index';

import { getBookLists } from '~/api/bookApi';
import { useState, useEffect } from 'react';


function Home() {
  const [bookLists, setBookLists] = useState([]);
  const loadData = async () => {
    return await getBookLists().then((res) => setBookLists(res));
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <DefaultLayout>
        <Navi />
        <div className='container'>
          <SlideShow
            slides={[
              <Slide image={require('~/assets/images/banner1.jpg')} width={1000} height={500}></Slide>,
              <Slide image={require('~/assets/images/banner2.jpg')}width={1000} height={500}></Slide>,
              <Slide image={require('~/assets/images/banner3.jpg')} width={1000} height={500}></Slide>,
            ]}
          />
          <Content book={bookLists} />
        </div>
      </DefaultLayout>
    </>
  );
}

export default Home;
