import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'html-react-parser';
import moment from 'moment';
import SelectDate from '../approvalRegist/components/SelectDate';
import SelectBox from '../../common/Selectbox';
import { TinyEditor } from '../../common/TinyEditor';
import styled from '../../../styles/components/approvalManage/approvalUpdate/UpdateForm.module.css';

export default function UpdateForm({
  approval_doc_id,
  handleSelectTimeChange,
  handleSelectBoxChange,
  dataHandler,
  editorHandler,
  titleRef,
}) {
  const [default_form, setDefaultForm] = useState('');
  const [userName, setUserName] = useState('');
  const [deptName, setDeptName] = useState('');
  const [productNum, setProductNum] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [createdAt, setCreatedAt] = useState('');
  const [enforcementDate, setEnforcementDate] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [form_code, setFormCode] = useState(0);
  const [sequence, setSequence] = useState([]);
  useEffect(() => {
    console.log(approval_doc_id);
    fetch(`http://localhost:8080/approve/detail/${approval_doc_id}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setDefaultForm(json.defaultForm);
        setUserName(json.userName);
        setDeptName(json.deptName);
        setProductNum(json.productNum);
        setTitle(json.approvalDocTitle);
        setCreatedAt(moment(json.createdAt));
        setEnforcementDate(moment(json.enforcementDate));
        setContents(json.contents);
        setFormCode(json.formCode);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });

    if (form_code !== 0) {
      fetch(
        `http://localhost:8080/manage/form/seqTitleList?formCode=${form_code}`
      )
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setSequence(json);
        });
    }

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
      {isLoading ? (
        <div>Loading...</div>
      ) : (
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
                    <div id="doc_num" contentEditable="false">
                      {productNum === null ? (
                        <SelectBox
                          selectList={sequence}
                          width={'300'}
                          height={'40'}
                          onChange={handleSelectBoxChange}
                        />
                      ) : (
                        productNum
                      )}
                    </div>
                  );
                }
                if (domNode.attribs && domNode.attribs.id === 'drafting_time') {
                  return (
                    <div id="drafting_time">
                      <SelectDate
                        onChange={handleSelectTimeChange}
                        baseDate={createdAt}
                      />
                    </div>
                  );
                }
                if (domNode.attribs && domNode.attribs.id === 'drafter') {
                  return (
                    <div id="drafter" contentEditable="false">
                      {userName}
                    </div>
                  );
                }
                if (domNode.attribs && domNode.attribs.id === 'drafter_dept') {
                  return (
                    <div id="drafter_dept" contentEditable="false">
                      {deptName}
                    </div>
                  );
                }
                if (domNode.attribs && domNode.attribs.id == 'form_title') {
                  return (
                    <div id="form_title" contentEditable="true" ref={titleRef}>
                      {title}
                    </div>
                  );
                }
                if (domNode.attribs && domNode.attribs.id == 'enforce_date') {
                  return (
                    <div id="enforce_date" contentEditable="true">
                      <SelectDate
                        onChange={handleSelectTimeChange}
                        baseDate={enforcementDate}
                      />
                    </div>
                  );
                }
                if (domNode.attribs && domNode.attribs.id == 'enforcer') {
                  return <div id="enforcer" contentEditable="false"></div>;
                }
                if (domNode.attribs && domNode.attribs.id == 'content') {
                  return (
                    <>
                      <h4>신청내용</h4>
                      <div id="content" className={styled.container}>
                        <TinyEditor
                          init={contents}
                          editorHandler={editorHandler}
                          dataHandler={dataHandler}
                        />
                      </div>
                    </>
                  );
                }
              },
            })}
          </div>
        </>
      )}
    </>
  );
}
