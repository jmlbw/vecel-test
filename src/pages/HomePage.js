import styled from '../styles/pages/HomePage.module.css';
import React from 'react';
import RecommendForm from '../components/home/RecommendForm';
import Favorite from '../components/home/Favorite';
import ProgressDoc from '../components/home/ProgressDoc';
import ReceivedRef from '../components/home/ReceivedRef';
import TimeLine from '../components/home/TimeLine';

export default function HomePage() {
  return (
    <div className={styled.container}>
      <div className={styled.recoFormArea}>
        <RecommendForm />
      </div>
      <div className={styled.favoriteArea}>
        <Favorite />
      </div>
      <div className={styled.processDocArea}>
        <ProgressDoc />
      </div>
      <div className={styled.receRefArea}>
        <ReceivedRef />
      </div>
      <div className={styled.timeLineArea}>
        <TimeLine />
      </div>
    </div>
  );
}
