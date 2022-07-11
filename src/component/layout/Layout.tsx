import * as React from 'react';
import { Layout, LayoutProps } from 'react-admin';
import AppBar from './AppBar';
const layout = (props: LayoutProps) => { 
    return <Layout {...props} appBar={AppBar} />; 
};

export default layout