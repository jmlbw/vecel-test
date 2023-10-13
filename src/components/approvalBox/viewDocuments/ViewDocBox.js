import React, { useEffect, useState, useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import DocItem from './DocItem';
import { useApprovalBox } from '../../../contexts/ApprovalBoxContext';
import getDocsList, {
  detailSearchDocs,
} from '../../../apis/approvalBoxAPI/getDocsList';
import styled from '../../../styles/components/ApprovalBox/ViewDocBox.module.css';
import TableHeader from './TableHeader';
import { useNavigate } from 'react-router-dom';

function ViewDocBox() {
  const { state, setState, detailSearchState } = useApprovalBox();
  const [docData, setDocData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const { viewItem } = state;
  const docListStyles = {
    maxHeight: state.view ? '250px' : '400px',
  };

  // Helper function to fetch data
  const fetchData = async (isDetailSearch = false) => {
    try {
      const offset = (page - 1) * 10;
      const response = isDetailSearch
        ? await detailSearchDocs(viewItem, 10, offset, detailSearchState)
        : await getDocsList(viewItem, 10, offset, state.searchInput);

      const { docList, count } = response.data;
      setTotalCount(count);
      setDocData(
        docList.map((docItem) => ({
          ...docItem,
          createdAt: new Date(docItem.createdAt),
        }))
      );
      setTotalPages(Math.ceil(count / 10));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [viewItem, state.searchInput, page]);

  useEffect(() => {
    if (state.shouldFetchDocs) {
      fetchData(true);
      setState((prevState) => ({ ...prevState, shouldFetchDocs: false }));
    }
  }, [state.shouldFetchDocs]);

  useEffect(() => {
    setPage(1);
  }, [viewItem, state.searchInput]);

  const navigate = useNavigate();

  const handleItemClick = (docId) => {
    navigate(`/AD?page=${docId}`);
  };

  return (
    <div className={styled.container}>
      <TableHeader />
      <div className={styled.docContainer}>
        <ul className={styled.docList} style={docListStyles}>
          {docData.map((docItem) => (
            <DocItem
              key={docItem.approvalDocId}
              docNumber={docItem.approvalDocId}
              formName={docItem.formName}
              date={docItem.createdAt.toLocaleString('ko-KR')}
              title={docItem.approvalDocTitle}
              sendUser={docItem.userName}
              docStatus={docItem.docStatus}
              sendDepartDetail={docItem.deptName}
              onClick={() => handleItemClick(docItem.approvalDocId)}
            />
          ))}
        </ul>
      </div>
      <div className={styled.pagination}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(event, newPage) => setPage(newPage)}
        />
      </div>
    </div>
  );
}

export default ViewDocBox;
