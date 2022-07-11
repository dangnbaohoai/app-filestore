import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    DateInput,
    TextInput,
    SearchInput,
    ReferenceInput,
    ShowButton,
    AutocompleteArrayInput,
} from "react-admin";
import { Tag } from "../../types";
import SegmentsField from "./SegmentsField";
import ThumbnailField from "./ThumbnailField";

const orderFilters = [
    <SearchInput source="q" alwaysOn />,
    <ReferenceInput source="tags" reference="tags">
        <AutocompleteArrayInput
            optionText={(choice?: Tag) =>
                choice?.id
                    ? `${choice.name} `
                    : ''
            }
        />
    </ReferenceInput>,
    <DateInput source="createdTime" />,
    <DateInput source="downloadTime" />,
    <TextInput source="downloadTotal" />,
];
export const PhotoList = () => {

    return (
        <List
            filters={orderFilters}
            perPage={5}
            sort={{
                field: 'size',
                order: 'desc',
            }}
        >
            <Datagrid>
                <ThumbnailField source="" label="Images" />
                <ReferenceField source="id" reference="files">
                    <TextField source="id" textAlign="center" />
                </ReferenceField>
                <TextField source="name" textAlign="center" />
                <TextField source="type" textAlign="center" />
                <TextField source="size" textAlign="center" label={"Size(Kb)"}/>
                <SegmentsField source="tags" textAlign="center" />
                {/* <TextField source="createdTime" textAlign="center" />
                <TextField source="downloadTime" textAlign="center" />
                <TextField source="downloadTotal" textAlign="center" /> */}
                <EditButton />
                <ShowButton />
            </Datagrid>
        </List>
    )
};