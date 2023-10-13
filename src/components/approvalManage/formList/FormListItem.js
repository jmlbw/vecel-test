import List from '@mui/material/List';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemText from '@mui/material/ListItemText';
import styled from '../../../styles/components/approvalManage/formList/FormListItem.module.css';
import React from 'react';

export default function FormListItem() {
  const category = [
    { id: 2, category_name: '공통' },
    { id: 3, category_name: '인사' },
    { id: 4, category_name: '교육' },
    { id: 5, category_name: '급여' },
  ];
  return (
    <List>
      <div className={styled.align}>
        <FolderIcon className={styled.icon} />
        <ListItemText primary="양식함" className={styled.font} />
      </div>
      {category.map(({ id, category_name }) => {
        return (
          <div className={`${styled.align} ${styled.submenu}`}>
            <FolderIcon className={styled.icon} />
            <ListItemText primary={category_name} className={styled.font} />
          </div>
        );
      })}
    </List>
  );
}
