import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const Search = styled('div')(({ theme, width, height }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  width: `${width}`,
  height: `${height}`,
  border: '1px solid',
  marginBottom: '10px',
  backgroundColor: 'white',
}));

const SearchIconWrapper = styled('div')(({ theme, width }) => ({
  paddingLeft: `${width}`,
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

export default function SearchBox({ width, height }) {
  return (
    <Search width={width} height={height}>
      <SearchIconWrapper width={width}>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search.."
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
}
