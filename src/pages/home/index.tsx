import { memo, useEffect, useState } from 'react';
import { HomeContext, HomeState, THomeState } from './config';
import './index.less';

const Home = memo(() => {
  const [state, setState] = useState<THomeState>(HomeState);

  useEffect(() => {
    const button = document.querySelector('.shuffle');
    const grid = document.querySelector('.grid');

    if (button && grid) {
      button.addEventListener('click', () => {
        for (var i = grid.children.length; i >= 0; i--) {
          grid.appendChild(grid.children[(Math.random() * i) | 0]);
        }
        [...grid.children].forEach((e) => {
          console.log(e.getBoundingClientRect(), e);
        });
      });
    }
  }, []);

  return (
    <div className='Home'>
      <HomeContext.Provider value={[state, setState]}>
        <div className='shuffleWrap'>
          <button className='shuffle'>Shuffle order of boxes</button>
        </div>
        <div className='grid'>
          <div className='box blue wide'></div>
          <div className='box green square'></div>
          <div className='box green square'></div>
          <div className='box green tall'></div>
          <div className='box red square'></div>
          <div className='box red square'></div>
          <div className='box red square'></div>
          <div className='box green square'></div>
          <div className='box red wide'></div>
          <div className='box blue square'></div>
          <div className='box blue tall'></div>
          <div className='box green wide'></div>
          <div className='box red square'></div>
        </div>
      </HomeContext.Provider>
    </div>
  );
});

export default Home;
