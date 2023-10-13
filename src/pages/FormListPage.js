import SearchBox from '../components/common/SearchBox';
import InnerBox from '../components/common/InnerBox';
import styled from '../styles/pages/FormListPage.module.css';
import SmallBox from '../components/approvalManage/formList/SmallBox';
import FormListItem from '../components/approvalManage/formList/FormListItem';
import React, { useEffect, useState } from 'react';

export default function FormListPage() {
  const [formList, setFormList] = useState([]);
  useEffect(() => {
    //console.log('useEffect 호출');
    fetch('http://localhost:8080/manage/form/formTitleList')
      .then((res) => {
        return res.json();
      })
      .then((json) => setFormList(json));
  }, []);

  return (
    <div className={styled.align}>
      <div className={styled.left_box}>
        <SearchBox width="200px" />
        <InnerBox width="100%" height="100%">
          <FormListItem />
        </InnerBox>
      </div>
      <div className={styled.right_box}>
        <InnerBox width="100%" height="100%" text="전체양식" font_size="18px">
          {formList.map(({ formName, formExplain, formCode }) => {
            return (
              <SmallBox
                width="100%"
                height="78px"
                form_name={formName}
                form_explain={formExplain}
                form_code={formCode}
              />
            );
          })}
        </InnerBox>
      </div>
    </div>
  );
}
