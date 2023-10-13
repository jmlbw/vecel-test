import React from 'react';
import styled from '../../styles/components/common/Loading.module.css';
import { useLoading } from '../../contexts/LoadingContext';
import loadingGif from '../../assets/imgs/loading.gif';

const Loading = () => {
  const { isLoading } = useLoading();

  return isLoading ? (
    <div className={styled.loading_overlay}>
      <img src={loadingGif} alt="로딩 중" className={styled.loading_image} />
    </div>
  ) : null;
};

export default Loading;
