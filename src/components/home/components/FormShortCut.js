import React, { useState } from 'react';
import styled from '../../../styles/components/home/RecommendForm.module.css';
import { Link } from 'react-router-dom';

let shorCutInit = [{ icon: 'form', name: '양식관리' }];

export default function FormShortCut() {
  const [shorCutBtns, setShortCutBtns] = useState(shorCutInit);

  return (
    <div className={styled.container}>
      {shorCutBtns.map((ele, index) => {
        console.log(ele, index);
        return (
          <div key={index}>
            <Link to="./EAM" className={styled.shortCutBtn}>
              {ele.icon} {ele.name}
            </Link>
            {/* {index !== shorCutBtns.length - 1 ? (
              <div className={styled.division} />
            ) : null} */}
          </div>
        );
      })}
    </div>
  );
}
