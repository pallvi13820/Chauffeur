import { DrawerActions } from '@react-navigation/native';
import React from 'react';

export const navigationRef = React.createRef();

export const navigate = (name, params) => {
  if (navigationRef.current) {
    navigationRef.current?.navigate(name, params);
  }
};

export function goBack() {
  navigationRef.current?.goBack();
}

export const toggleDrawer = () => {
  if (!navigationRef.current) {
    throw new Error('nav reference not found');
  }
  navigationRef.current.dispatch(DrawerActions.toggleDrawer());
};
