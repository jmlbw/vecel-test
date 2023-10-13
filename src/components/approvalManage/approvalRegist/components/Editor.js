import React, { useRef, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import Quill from 'quill';
import styled from '../../../../styles/components/approvalManage/approvalRegist/components/Editor.module.css';
import '../../../../styles/components/approvalManage/approvalRegist/components/Editor.css';
// 커스텀 모듈을 Quill에 추가하는 함수
function addCustomModule(main_form) {
  const Parchment = Quill.import('parchment');
  // 커스텀 모듈을 정의합니다.
  class CustomBoxBlot extends Parchment.Embed {
    static blotName = 'custom-box';
    static tagName = 'div';
    static className = 'custom-box';

    // 커스텀 박스 생성
    static create(value) {
      const node = super.create(value);
      node.innerHTML = main_form;
      return node;
    }
  }

  Quill.register(CustomBoxBlot, true);
}

export default function Editor({ main_form }) {
  const quillRef = useRef(null);

  // Quill 에디터 초기화 및 커스텀 모듈 추가
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        [{ customBox: '' }], // 커스텀 모듈 버튼 추가
      ],
    },
  };

  // 사용자가 버튼을 눌렀을 때 커스텀 박스를 삽입하는 함수
  useEffect(() => {
    addCustomModule(main_form);
    const quill = quillRef.current.getEditor();

    const index = 0;
    quill.insertEmbed(index, 'custom-box', 'This is a custom box');
  }, []);

  return (
    <div className={styled.test}>
      <ReactQuill
        ref={quillRef}
        modules={modules}
        placeholder="내용을 입력하세요..."
        className={styled.test2}
      />
    </div>
  );
}
