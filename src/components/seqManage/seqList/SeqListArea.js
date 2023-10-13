import InnerBox from '../../common/InnerBox';
import DataList from '../../formManage/formList/DataList';
import { columns } from '../../../assets/datas/seq_manage_list';
import React, { useEffect } from 'react';
import Button from '../../common/Button';
import getSeqDetail from '../../../apis/commonAPI/getSeqDetail';
import { useSeqManage } from '../../../contexts/SeqManageContext';
import delSeq from '../../../apis/commonAPI/delSeq';
import { useLoading } from '../../../contexts/LoadingContext';

export default function SeqListArea({ rows, searchHandler }) {
  const { detailData, setDetailData, updateDetailData } = useSeqManage();
  const { showLoading, hideLoading } = useLoading();

  const delHandler = () => {
    showLoading();
    delSeq(detailData.code)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        alert('데이터가 삭제되었습니다.');
      })
      .then(() => {
        searchHandler();
      })
      .catch((err) => {
        console.log(`데이터 삭제를 실패했습니다. [${err}]`);
      })
      .finally(() => {
        hideLoading();
      });
  };

  const dataHandler = (data) => {
    showLoading();
    getSeqDetail(data.id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        updateDetailData();
        console.log(res);
        setDetailData({
          ...detailData,
          ...res,
          compName: data.compName,
        });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        hideLoading();
      });
  };

  useEffect(() => {
    if (rows.length > 0) {
      dataHandler(rows[0]);
    }
  }, [rows]);

  return (
    <InnerBox
      text={'채번목록'}
      width={'100%'}
      height={'100%'}
      titleChildren={
        <Button label={'삭제'} btnStyle={'gray_btn'} onClick={delHandler} />
      }
      childStyle={{ width: '100%', height: '100%' }}
      children={
        <DataList rows={rows} columns={columns} dataHandler={dataHandler} />
      }
    />
  );
}
