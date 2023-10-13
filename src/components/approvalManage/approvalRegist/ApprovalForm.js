import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import ReactHtmlParser from 'html-react-parser';
import Selectbox from '../../common/Selectbox';
import SelectDate from './components/SelectDate';
import { TinyEditor } from '../../common/TinyEditor';
import styled from '../../../styles/components/approvalManage/approvalRegist/ApprovalForm.module.css';

export default function ApprovalForm({
  form_code,
  main_form,
  setMainForm,
  userId,
  deptId,
  divRef,
  titleRef,
  dataHandler,
  editorHandler,
  handleSelectBoxChange,
  handleEnforceDateChange,
  handleSelectTimeChange,
}) {
  const [sequence, setSequence] = useState([]);
  const [default_form, setDefaultForm] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8080/manage/form/detail/${form_code}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setDefaultForm(json.defaultForm);
        setMainForm(json.mainForm);
      });

    fetch(
      `http://localhost:8080/manage/form/seqTitleList?formCode=${form_code}`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setSequence(json);
      });

    console.error = (function (_error) {
      return function (message, ...args) {
        if (
          typeof message !== 'string' ||
          message.indexOf('component is `contentEditable`') === -1
        ) {
          _error.apply(console, args);
        }
      };
    })(console.error);
  }, [form_code]);

  return (
    <>
      <div>
        {ReactHtmlParser(default_form, {
          replace: (domNode) => {
            if (domNode.attribs && domNode.attribs.id == 'approval_line') {
              return (
                <div id="approval_line" contentEditable="true">
                  결재라인입니다.
                </div>
              );
            }
            if (domNode.attribs && domNode.attribs.id === 'doc_num') {
              return (
                <Selectbox
                  selectList={sequence}
                  width={'300'}
                  height={'40'}
                  onChange={handleSelectBoxChange}
                />
              );
            }
            if (domNode.attribs && domNode.attribs.id === 'drafting_time') {
              return <SelectDate onChange={handleSelectTimeChange} />;
            }
            if (domNode.attribs && domNode.attribs.id === 'drafter') {
              return (
                <div id="drafter" contentEditable="false">
                  {userId}
                </div>
              );
            }
            if (domNode.attribs && domNode.attribs.id === 'drafter_dept') {
              return (
                <div id="drafter_dept" contentEditable="false">
                  {deptId}
                </div>
              );
            }
            if (domNode.attribs && domNode.attribs.id == 'form_title') {
              return (
                <div id="form_title" contentEditable="true" ref={titleRef}>
                  제목을 입력하세요
                </div>
              );
            }
            if (domNode.attribs && domNode.attribs.id == 'enforce_date') {
              return (
                <div id="enforce_date" contentEditable="true">
                  <SelectDate onChange={handleEnforceDateChange} />
                </div>
              );
            }
            if (domNode.attribs && domNode.attribs.id == 'enforcer') {
              return (
                <div id="enforcer" contentEditable="true" ref={divRef}></div>
              );
            }
            if (domNode.attribs && domNode.attribs.id == 'content') {
              return (
                <div id="content" className={styled.container}>
                  <TinyEditor
                    init={main_form}
                    editorHandler={editorHandler}
                    dataHandler={dataHandler}
                  />
                </div>
              );
            }
          },
        })}
      </div>
    </>
  );
}
