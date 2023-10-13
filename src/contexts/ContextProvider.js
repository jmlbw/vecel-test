import { AppProvider } from './AppContext';
import { PageProvier } from './PageContext';
import { FormManageProvider } from './FormManageContext';
import { ApprovalBoxProvider } from './ApprovalBoxContext';
import { SeqManageProvider } from './SeqManageContext';
import { ApprovalBoxManageProvider } from './ApprovalBoxManageContext';
import { LoadingProvider } from './LoadingContext';
import React from 'react';

export default function ContextProvider({ children }) {
  return (
    <AppProvider>
      <PageProvier>
        <LoadingProvider>
          <FormManageProvider>
            <ApprovalBoxProvider>
              <ApprovalBoxManageProvider>
                <SeqManageProvider>{children}</SeqManageProvider>
              </ApprovalBoxManageProvider>
            </ApprovalBoxProvider>
          </FormManageProvider>
        </LoadingProvider>
      </PageProvier>
    </AppProvider>
  );
}
