import * as React from 'react';
import {
    Edit,
    SimpleForm,
    TextField,
    TextInput,
    required,
    useRecordContext,
} from 'react-admin';
import {
    Typography,
    Grid,
    Box,
} from '@mui/material';
import { Product } from '../../types';

const TagTitle = () => {
    const record = useRecordContext<Product>();
    return record ? <span>Tag "{record.tag}"</span> : null;
};
const TagEdit = () => {
    return (
        <>
            <Edit title={<TagTitle />}>
                <SimpleForm >
                    <Grid
                        container
                        spacing={2}
                        style={{
                            display: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Grid item xs={12}>
                            <Box display="flex" alignItems="center">
                                <Grid item xs={2} >
                                    <Typography
                                        fontWeight={600}
                                        variant="subtitle2"
                                        component="div"
                                        children="Id"
                                        fontSize={18}
                                        m={2}
                                    />
                                </Grid>
                                <Grid item xs={10} >
                                    <TextField source="id" fontSize={16} />
                                </Grid>
                            </Box>

                            <Box display="flex" alignItems="center">
                                <Grid item xs={2} >
                                    <Typography
                                        fontWeight={600}
                                        variant="subtitle2"
                                        component="div"
                                        children="Create Time"
                                        fontSize={18}
                                        m={2}
                                    />
                                </Grid>
                                <Grid item xs={10} >
                                    <TextField source="createdAt" fontSize={16} />
                                </Grid>
                            </Box>

                            <Box display="flex" alignItems="center">
                                <Grid item xs={2} >
                                    <Typography
                                        fontWeight={600}
                                        variant="subtitle2"
                                        component="div"
                                        children="Update Time"
                                        fontSize={18}
                                        m={2}
                                    />
                                </Grid>
                                <Grid item xs={10} >
                                    <TextField source="updatedAt" fontSize={16} />
                                </Grid>
                            </Box>

                            <Box display="flex" alignItems="center">
                                <Grid item xs={2} >
                                    <Typography
                                        fontWeight={600}
                                        variant="subtitle2"
                                        component="div"
                                        children="Tag Name"
                                        fontSize={18}
                                        m={2}
                                    />
                                </Grid>
                                <Grid item xs={10} >
                                    <TextInput source="name" label={false} validate={[required()]} />
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </SimpleForm>
            </Edit>
        </>
    );
};

export default TagEdit;