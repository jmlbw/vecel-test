import styled from '../../../../styles/components/formManage/formDetail/components/DetailTableItems.module.css';
import DragDrop from './DragDrop';
import React, { useState } from 'react';
import PopUp from '../../../common/PopUp';
import FormEdit from '../../formEditPopUp/FormEdit';
import { FiEdit } from 'react-icons/fi';
import PopUpFoot from '../../../common/PopUpFoot';
import Optionbox from '../../../common/Optionbox';

const DetailBox = ({ children }) => {
  return (
    <div className={styled.detailBox} style={{ width: '100%' }}>
      {children}
    </div>
  );
};

const TitleBox = ({ title }) => {
  return <div className={styled.titleBox}>{title}</div>;
};

const SelectBox = ({ id, data, dataHandler, width = '90%' }) => {
  return (
    <div className={styled.contentBox}>
      <select
        style={{ width: `${width}` }}
        onChange={(e) => {
          dataHandler(id, e.target.value);
        }}
      >
        {data
          ? data.map((ele, index) => {
              return (
                <option key={index} value={ele.id}>
                  {ele.name}
                </option>
              );
            })
          : null}
      </select>
    </div>
  );
};

const InputBox = ({
  id,
  data,
  dataHandler,
  width = '90%',
  children,
  disabled,
}) => {
  return (
    <div className={styled.contentBox}>
      <input
        type="text"
        value={data}
        style={{ width }}
        onChange={(e) => {
          dataHandler(id, e.target.value);
        }}
        disabled={disabled}
      />
      {children}
    </div>
  );
};

const AreaBox = ({ id, data, dataHandler }) => {
  return (
    <div className={`${styled.contentBox} ${styled.areaContent}`}>
      <div className={styled.areaContentBox}>
        {data.length > 0
          ? data.map((ele, index) => {
              return (
                <Optionbox
                  key={index}
                  id={id}
                  initData={ele}
                  dataHandler={dataHandler}
                ></Optionbox>
              );
            })
          : null}
      </div>
    </div>
  );
};

const FileBox = ({ id, name, data, dataHandler }) => {
  const [formData, setFormData] = useState(data);
  let previewWindow = null;
  const openPreviewWindow = (data) => {
    previewWindow = window.open('', 'Preview', 'width=565,height=800');
    previewWindow.document.write(
      '<html><head><title>미리보기</title></head><body>'
    );
    previewWindow.document.write(data);
    previewWindow.document.write('</body></html>');
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const grayAndBlueBtn = [
    {
      label: '미리보기',
      onClick: () => {
        openPreviewWindow(formData);
      },
      btnStyle: 'popup_gray_btn',
    },
    {
      label: '반영',
      onClick: () => {
        dataHandler(id, formData);
        closeModal();
      },
      btnStyle: 'popup_blue_btn',
    },
  ];

  return (
    <div className={styled.contentBox}>
      <div className={styled.fileContent}>
        <DragDrop name={name} id={id} data={data} dataHandler={dataHandler} />
        <div className={styled.subBox}>
          <PopUp
            label={<FiEdit />}
            isModalOpen={isModalOpen}
            openModal={openModal}
            closeModal={closeModal}
            width={'1200px'}
            height={'700px'}
            title={'양식파일편집'}
            children={
              <>
                <div className={styled.contentContainer}>
                  <div>
                    <FormEdit data={data} dataHandler={setFormData} />
                  </div>
                </div>
                <PopUpFoot buttons={grayAndBlueBtn} />
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

const RadioBox = ({ id, buttons, data, dataHandler }) => {
  return (
    <div className={styled.contentBox}>
      <div className={styled.radioBox}>
        <input
          type="radio"
          name="radio"
          value={buttons[0].value}
          checked={data === 1}
          onChange={(e) => {
            dataHandler(id, e.target.value === 'true' ? 1 : 0);
          }}
        />
        <div>{buttons[0].name}</div>
        <input
          type="radio"
          name="radio"
          value={buttons[1].value}
          checked={data === 0}
          onChange={(e) => {
            dataHandler(id, e.target.value === 'false' ? 0 : 1);
          }}
        />
        <div>{buttons[1].name}</div>
      </div>
    </div>
  );
};

export { DetailBox, TitleBox, SelectBox, InputBox, FileBox, AreaBox, RadioBox };
