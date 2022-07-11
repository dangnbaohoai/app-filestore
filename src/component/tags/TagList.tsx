import React from 'react';
import {
    TextField,
    List,
    Datagrid,
    EditButton,
    SearchInput,
    DateField,
} from 'react-admin';

const orderFilters = [
    <SearchInput source="q" alwaysOn />,
];
export const TagList = () => (
    <List
        filters={orderFilters}
        perPage={5}
        sort={{ field: 'name', order: 'desc' }}
    >
        <Datagrid>
            <TextField source="id" textAlign="center" />
            <TextField source="name" textAlign="center" />
            <DateField showTime source="createdAt" textAlign="center" />
            <DateField showTime source="updatedAt" textAlign="center" />
            <EditButton/>
        </Datagrid>
    </List>
);