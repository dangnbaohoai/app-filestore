import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextField,
    TextInput,
    required,
} from 'react-admin';

const TagCreate = () => (
    <Create redirect="list">
        <SimpleForm>
            <TextField source="id" />
                <TextInput source="name" validate={[required()]} />
        </SimpleForm>
    </Create>
);

export default TagCreate;