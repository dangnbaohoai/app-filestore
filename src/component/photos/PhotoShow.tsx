import * as React from 'react';
import {
    Show,
    useRecordContext,
    TabbedShowLayout,
    TextField,
    Tab,
    ReferenceArrayField,
    SingleFieldList, 
    ChipField
} from "react-admin";
import {
    Stack,
    Typography,
    Grid,
    Box
} from '@mui/material';
import Image from './Image';
import { Product } from '../../types';
// import SegmentsField from './SegmentsField';

const ProductTitle = () => {
    const record = useRecordContext<Product>();
    return record ? <span>Poster "{record.name}"</span> : null;
};

const PhotoShow = () => {
    return (
        <Show title={<ProductTitle />}>
            <TabbedShowLayout>
                <Tab label="details" sx={{ maxWidth: "100%" }}>
                    <Grid
                        container
                        spacing={2}
                        style={{
                            display: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Grid item xs={6}>
                            <Image />
                            <Stack spacing={1} alignItems="center" margin={"20px"}>
                                <Stack direction="row" spacing={1}>
                                    <Typography
                                        fontWeight={600}
                                        variant="subtitle2"
                                        component="div"
                                        children="Tag Name"
                                        margin={"auto"}
                                        fontSize={18}
                                        marginRight={2}
                                    />
                                    <ReferenceArrayField label="tags" reference="tags" source="tags">
                                        <SingleFieldList>
                                            <ChipField source="name" color="info" variant="outlined" />
                                        </SingleFieldList>
                                    </ReferenceArrayField>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={6} >
                            <Box display="flex" alignItems="center">
                                <Grid item xs={3} >
                                    <Typography
                                        fontWeight={600}
                                        variant="subtitle2"
                                        component="div"
                                        children="Id"
                                        fontSize={18}
                                        m={1}
                                    />
                                </Grid>
                                <Grid item xs={9} >
                                    <TextField source="id" fontSize={16} fullWidth />
                                </Grid>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Grid item xs={3} >
                                    <Typography
                                        fontWeight={600}
                                        variant="subtitle2"
                                        component="div"
                                        children="Name"
                                        fontSize={18}
                                        m={1}
                                    />
                                </Grid>
                                <Grid item xs={9} >
                                    <TextField source="name" fontSize={16} fullWidth />
                                </Grid>
                            </Box>

                            <Box display="flex" alignItems="center">
                                <Grid item xs={3} >
                                    <Typography
                                        fontWeight={600}
                                        variant="subtitle2"
                                        component="div"
                                        children="File size"
                                        fontSize={18}
                                        m={1}
                                    />
                                </Grid>
                                <Grid item xs={9} >
                                    <TextField source="size" fontSize={16} fullWidth />
                                </Grid>
                            </Box>

                            <Box display="flex" alignItems="center">
                                <Grid item xs={3} >
                                    <Typography
                                        fontWeight={600}
                                        variant="subtitle2"
                                        component="div"
                                        children="Type"
                                        fontSize={18}
                                        m={1}
                                    />
                                </Grid>
                                <Grid item xs={9} >
                                    <TextField source="type" fontSize={16} fullWidth />
                                </Grid>
                            </Box>

                            {/* <Box display="flex" alignItems="center">
                                <Grid item xs={3} >
                                    <Typography
                                        fontWeight={600}
                                        variant="subtitle2"
                                        component="div"
                                        children="Created Time"
                                        fontSize={18}
                                        m={1}
                                    />
                                </Grid>
                                <Grid item xs={9} >
                                    <TextField source="createdTime" fontSize={16} fullWidth />
                                </Grid>
                            </Box> */}

                            {/* <Box display="flex" alignItems="center">
                                <Grid item xs={3} >
                                    <Typography
                                        fontWeight={600}
                                        variant="subtitle2"
                                        component="div"
                                        children="Download Time"
                                        fontSize={18}
                                        m={1}
                                    />
                                </Grid>
                                <Grid item xs={9} >
                                    <TextField source="downloadTime" fontSize={16} fullWidth />
                                </Grid>
                            </Box> */}

                            {/* <Box display="flex" alignItems="center">
                                <Grid item xs={3} >
                                    <Typography
                                        fontWeight={600}
                                        variant="subtitle2"
                                        component="div"
                                        children="Download Total"
                                        fontSize={18}
                                        m={1}
                                    />
                                </Grid>
                                <Grid item xs={9} >
                                    <TextField source="downloadTotal" fontSize={16} fullWidth />
                                </Grid>

                            </Box> */}
                        </Grid>
                    </Grid>
                </Tab>
            </TabbedShowLayout>
        </Show>
    )
};

export default PhotoShow;