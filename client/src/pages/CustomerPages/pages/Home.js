import classNames from 'classnames';
import Slide from '~/components/Slide/Slide';
import SlideShow from '~/components/SlideShow/SlideShow';
import Navi from '../component/Navi/Navi';
import Content from '../component/Content/Content';

import DefaultLayout from '../DefaultLayout';
import styles from './CustomerPage.module.scss';

import { getBookLists } from '~/api/bookApi';
import { useState, useEffect } from 'react';


const cx = classNames.bind(styles);
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
        <div style={{ maxWidth: 1200, margin: 'auto' }}>
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
