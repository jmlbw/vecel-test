import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from '../../styles/components/sidebar/Button.module.css';

export default function BasicButton({ name, goApproval }) {
  return (
    <Stack spacing={2} direction="row" className={styled.button}>
      <Button variant="contained" className={styled.name} onClick={goApproval}>
        <span className={styled.font}>{name}</span>
      </Button>
    </Stack>
  );
}
