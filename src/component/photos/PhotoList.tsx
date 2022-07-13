import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    DateInput,
    // TextInput,
    SearchInput,
    ReferenceInput,
    ShowButton,
    AutocompleteArrayInput,
    DateField,
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
    <DateInput source="createdAt_from" />,
    <DateInput source="createdAt_to"/>,
    <DateInput source="downloadedAt_from"/>,
    <DateInput source="downloadedAt_to"/>,
    // <TextInput source="downloadTotal" />,
];
export const PhotoList = () => {

    return (
        <List
            filters={orderFilters}
            perPage={5}
            // sort={{
            //     field: 'id',
            //     order: 'desc',
            // }}
        >
            <Datagrid>
                <ThumbnailField source="" label="Images" />
                <ReferenceField source="id" reference="files">
                    <TextField source="id" textAlign="center" />
                </ReferenceField>
                <TextField source="name" textAlign="center" />
                <TextField source="type" textAlign="center" />
                {/* <TextField source="size" textAlign="center" label={"Size(Kb)"}/> */}
                <SegmentsField source="tags" textAlign="center" />
                <DateField source="createdAt" textAlign="center" showTime locales="fr-FR" label="Created Time"/>
                <DateField source="downloadedAt" textAlign="center" showTime locales="fr-FR" label="Download Time"/>
                {/* <TextField source="downloadTotal" textAlign="center" /> */}
                <EditButton />
                <ShowButton />
            </Datagrid>
        </List>
    )
};