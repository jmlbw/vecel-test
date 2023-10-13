import React, { useState, useEffect } from 'react';
import {
  DetailBox,
  TitleBox,
  InputBox,
  AreaBox,
  SelectBox,
} from '../../../formManage/formDetail/components/DetailTableItem';
import { useSeqManage } from '../../../../contexts/SeqManageContext';
import PopUp from '../../../common/PopUp';
import styled from '../../../../styles/components/seqManage/seqDetail/SeqDetailTable.module.css';
import { FiEdit } from 'react-icons/fi';
import PopUpFoot from '../../../common/PopUpFoot';
import SeqSet from '../../seqSetPopUp/SeqSet';
import getSeqItemList from '../../../../apis/commonAPI/getSeqItemList';
import FormListPopUp from '../../popup/FormListPopUp';
import { AiOutlineOrderedList } from 'react-icons/ai';
import OrgChart from '../../../org/OrgChart';

export default function SeqDetailTable() {
  const {
    detailData,
    flagData,
    setData,
    setDetailData,
    seqItems,
    setSeqItems,
  } = useSeqManage();
  const [seqList, setseqList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeptModalOpen, setIDeptModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [gridData, setGridData] = useState({});
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openDeptModal = () => {
    setIDeptModalOpen(true);
  };

  const closeDeptModal = () => {
    setIDeptModalOpen(false);
  };

  const openFormModal = () => {
    setIsFormModalOpen(true);
  };

  const closeFormModal = () => {
    setIsFormModalOpen(false);
  };

  const deptScopeConfirm = (data) => {
    dataUpdateHandler('deptScope', data);
  };

  useEffect(() => {
    getSeqItemList()
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        setSeqItems(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const itemIdList = detailData.seqString.split(',');
    if (detailData.seqString !== '') {
      let result = seqItems.filter((ele) => {
        if (itemIdList.includes(ele.id)) {
          return true;
        }
        return false;
      });
      setseqList([...result]);
    }
  }, [detailData.seqString]);

  const formConfirm = () => {
    gridData.category = 'F';
    gridData.useId = parseInt(gridData.id);
    gridData.name = gridData.formName;
    delete gridData.id;
    delete gridData.formName;
    detailData.formScope.push(gridData);
    setDetailData({
      ...detailData,
    });
  };

  const seqConfirm = () => {
    setDetailData({
      ...detailData,
      seqList: seqList
        .map((ele) => {
          return ele.value;
        })
        .join(' '),
      seqString: seqList
        .map((ele) => {
          return ele.id;
        })
        .join(','),
    });
  };

  const dataUpdateHandler = (id, data) => {
    setDetailData({ ...detailData, [id]: data });
  };

  const deptScopefilterHandler = (id, category, useId) => {
    let filetedData = detailData.deptScope.filter((ele) => {
      if (ele.category === category && ele.useId === useId) {
        return false;
      }
      return true;
    });
    setDetailData({ ...detailData, [id]: filetedData });
  };

  const formScopefilterHandler = (id, category, useId) => {
    console.log(id, category, useId);
    let filetedData = detailData.formScope.filter((ele) => {
      if (ele.category === category && ele.useId === useId) {
        return false;
      }
      return true;
    });
    setDetailData({ ...detailData, [id]: filetedData });
  };

  const grayAndBlueBtn = [
    {
      label: '반영',
      onClick: () => {
        seqConfirm();
        closeModal();
      },
      btnStyle: 'popup_blue_btn',
    },
  ];

  const grayAndBlueBtn_form_popup = [
    {
      label: '반영',
      onClick: () => {
        formConfirm();
        closeFormModal();
      },
      btnStyle: 'popup_blue_btn',
    },
  ];

  return (
    <>
      <DetailBox
        children={
          <>
            <TitleBox title={'회사명'} />
            {flagData === 1 ? (
              <SelectBox
                id={'compName'}
                data={setData.compList}
                dataHandler={dataUpdateHandler}
              />
            ) : (
              <InputBox
                id={'compName'}
                data={detailData.compName}
                dataHandler={dataUpdateHandler}
                disabled={true}
              />
            )}
          </>
        }
      ></DetailBox>
      <DetailBox
        children={
          <>
            <TitleBox title={'채번명'} />
            <InputBox
              id={'seqName'}
              data={detailData.seqName}
              dataHandler={dataUpdateHandler}
            />
          </>
        }
      ></DetailBox>
      <DetailBox
        children={
          <>
            <TitleBox title={'대상부서'} />
            <AreaBox
              id={'deptScope'}
              data={detailData.deptScope}
              dataHandler={deptScopefilterHandler}
            />
            <OrgChart
              view={'user'}
              initData={detailData.deptScope.map((ele, index) => {
                ele.id = index;
                return ele;
              })}
              isModalOpen={isDeptModalOpen}
              openModal={openDeptModal}
              closeModal={closeDeptModal}
              confirmHandler={deptScopeConfirm}
            />
          </>
        }
      ></DetailBox>
      <DetailBox
        children={
          <>
            <TitleBox title={'대상양식'} />
            <AreaBox
              id={'formScope'}
              data={detailData.formScope}
              dataHandler={formScopefilterHandler}
            />
            <PopUp
              label={<AiOutlineOrderedList />}
              width={'400px'}
              height={'600px'}
              isModalOpen={isFormModalOpen}
              openModal={openFormModal}
              closeModal={closeFormModal}
              children={
                <>
                  <FormListPopUp setGridData={setGridData} />
                  <PopUpFoot buttons={grayAndBlueBtn_form_popup} />
                </>
              }
            />
          </>
        }
      ></DetailBox>
      <DetailBox
        children={
          <>
            <TitleBox title={'설명'} />
            <InputBox
              id={'description'}
              data={detailData.description}
              dataHandler={dataUpdateHandler}
            />
          </>
        }
      ></DetailBox>
      <DetailBox
        children={
          <>
            <TitleBox title={'정렬순서'} />
            <InputBox
              id={'sortOrder'}
              data={detailData.sortOrder}
              dataHandler={dataUpdateHandler}
            />
          </>
        }
      ></DetailBox>
      <DetailBox
        children={
          <>
            <TitleBox title={'채번값 설정'} />
            <InputBox
              id={'seqList'}
              data={detailData.seqList}
              dataHandler={dataUpdateHandler}
              width="80%"
              disabled={true}
              children={
                <div className={styled.popupBox}>
                  <PopUp
                    label={<FiEdit />}
                    width={'900px'}
                    height={'600px'}
                    title={'채번값 설정'}
                    isModalOpen={isModalOpen}
                    openModal={openModal}
                    closeModal={closeModal}
                    children={
                      <>
                        <div className={styled.contentContainer}>
                          <SeqSet
                            seqItems={seqItems}
                            seqList={seqList}
                            setseqList={setseqList}
                            initData={detailData.seqString}
                          />
                        </div>
                        <PopUpFoot buttons={grayAndBlueBtn} />
                      </>
                    }
                  />
                </div>
              }
            />
          </>
        }
      ></DetailBox>
    </>
  );
}
