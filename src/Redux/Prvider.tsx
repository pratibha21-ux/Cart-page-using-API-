"use client";
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from './Store';

interface ProviderProps {
  children: ReactNode;
}

const ProviderComponent: React.FC<ProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ProviderComponent;
