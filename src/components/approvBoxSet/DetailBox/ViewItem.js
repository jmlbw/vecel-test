import React, { useEffect, useState } from 'react';
import ViewItemPopup from '../ViewItemPopup';
import Optionbox from '../../common/Optionbox';
import styled from '../../../styles/pages/ApprovalBoxSetPage.module.css';
import getViewItems from '../../../apis/approvalBoxAPI/getViewItems';
import { useApprovalBox } from '../../../contexts/ApprovalBoxContext';
import { useApprovalBoxManage } from '../../../contexts/ApprovalBoxManageContext';

const BASE_RADIX = 10;

function ViewItem(props) {
  const [data, setData] = useState([]);
  const [viewItemsLocal, setViewItemsLocal] = useState([]);
  const [error, setError] = useState(null);
  const { state, setState } = useApprovalBox();
  const { approvalBoxState } = useApprovalBoxManage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parsedBoxId = parseInt(props.boxId, BASE_RADIX);
        if (!isNaN(parsedBoxId)) {
          const response = await getViewItems(parsedBoxId);
          setData(response.data);

          let updatedViewItem = [];

          response.data.forEach((viewItem) => {
            if (viewItem.codeId.includes('01')) {
              updatedViewItem.push('send');
            } else if (viewItem.codeId.includes('02')) {
              updatedViewItem.push('pend');
            } else if (viewItem.codeId.includes('03')) {
              updatedViewItem.push('concluded_end');
            } else if (viewItem.codeId.includes('04')) {
              updatedViewItem.push('concluded_progress');
            } else if (viewItem.codeId.includes('05')) {
              updatedViewItem.push('rejected');
            } else if (viewItem.codeId.includes('06')) {
              updatedViewItem.push('reference');
            }
          });

          setState((prevState) => ({
            ...prevState,
            boxViewItems: updatedViewItem,
          }));
        }
      } catch (err) {
        setError(err);
        console.error('Error fetching box details:', err);
      }
    };
    fetchData();
  }, [props.boxId, approvalBoxState.viewItems]);

  useEffect(() => {
    if (approvalBoxState && approvalBoxState.viewItems) {
      setViewItemsLocal(approvalBoxState.viewItems); // approvalBoxState.viewItems 값이 변경될 때마다 로컬 상태 업데이트
    }
  }, [approvalBoxState.viewItems, approvalBoxState]); // approvalBoxState.viewItems 값의 변경을 감지

  let itemsToRender;

  if (viewItemsLocal && viewItemsLocal.length > 0) {
    itemsToRender = viewItemsLocal;
  } else {
    itemsToRender = data ? data.map((item) => item.codeValue) : [];
  }

  return (
    <div className={styled.inputItem}>
      <div style={props.commonCellStyle}>
        <div className={styled.text}>조회항목</div>
      </div>
      <div style={props.commonDataStyle}>
        <div className={styled.viewUseField}>
          <div className={styled.viewItemBox}>
            {itemsToRender.map((viewItemValue, index) => (
              <Optionbox key={index} name={viewItemValue} />
            ))}
          </div>

          <ViewItemPopup checkedItems={data} />
        </div>
      </div>
    </div>
  );
}

export default ViewItem;
