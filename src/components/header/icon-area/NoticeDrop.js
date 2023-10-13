import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import styles from '../../../styles/components/header/dropdown.module.css';

export default function Notice() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            {...bindTrigger(popupState)}
            className={styles.test}
          >
            <div className={styles.iconcontainer}>
              <NotificationsNoneRoundedIcon
                className={styles.noticeIcon}
              ></NotificationsNoneRoundedIcon>
              <div className={styles.circle}>5</div>
            </div>
          </Button>
          <Menu className={styles.notice_menubox} {...bindMenu(popupState)}>
            <div className={styles.fixedbox}>Notice</div>
            <MenuItem
              className={styles.notice_menuitem}
              onClick={popupState.close}
            >
              Profile
            </MenuItem>
            <MenuItem
              className={styles.notice_menuitem}
              onClick={popupState.close}
            >
              My account
            </MenuItem>
            <MenuItem
              className={styles.notice_menuitem}
              onClick={popupState.close}
            >
              Logout
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
