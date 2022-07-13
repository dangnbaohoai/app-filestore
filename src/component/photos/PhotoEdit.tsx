import * as React from 'react';
import {
  Edit,
  FormTab,
  TabbedForm,
  DateField,
  useRecordContext,
  TextField,
  ReferenceArrayInput,
  AutocompleteArrayInput
} from "react-admin";
import {
  Box,
  Typography,
  Grid,
} from '@mui/material';
import Image from './Image';
import { Product } from '../../types';

const ProductTitle = () => {
  const record = useRecordContext<Product>();
  return record ? <span>Image "{record.name}"</span> : null;
};

const Size = () => {
  const record = useRecordContext<Product>();
  return record ?
    <span style={{ margin: '20px', fontSize: '16px' }}>
      {record.width}x{record.height}
    </span> : null
};

const PhotoEdit = () => {
  return (
    <Edit title={<ProductTitle />}>
      <TabbedForm>
        <FormTab label="update" sx={{ maxWidth: "100%" }}>
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
              <Box display="flex" justifyContent="center">
                <Size />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box display="flex" alignItems="center">
                <Grid item xs={3}>
                  <Typography
                    fontWeight={600}
                    variant="subtitle2"
                    component="div"
                    children="Id"
                    fontSize={18}
                    m={1}
                  />
                </Grid>
                <Grid item xs={9}>
                  <TextField source="id" fontSize={16} fullWidth />
                </Grid>
              </Box>

              <Box display="flex" alignItems="center">
                <Grid item xs={3}>
                  <Typography
                    fontWeight={600}
                    variant="subtitle2"
                    component="div"
                    children="Name"
                    fontSize={18}
                    m={1}
                  />
                </Grid>
                <Grid item xs={9}>
                  <TextField source="name" fontSize={16} fullWidth />
                </Grid>
              </Box>

              <Box display="flex" alignItems="center">
                <Grid item xs={3}>
                  <Typography
                    fontWeight={600}
                    variant="subtitle2"
                    component="div"
                    children="File Size:"
                    fontSize={18}
                    m={1}
                  />
                </Grid>
                <Grid item xs={9}>
                  <TextField source="size" fontSize={16} fullWidth />
                </Grid>
              </Box>

              <Box display="flex" alignItems="center">
                <Grid item xs={3}>
                  <Typography
                    fontWeight={600}
                    variant="subtitle2"
                    component="div"
                    children="Type:"
                    fontSize={18}
                    m={1}
                  />
                </Grid>
                <Grid item xs={9}>
                  <TextField source="type" fontSize={16} fullWidth />
                </Grid>
              </Box>

              <Box display="flex" alignItems="center">
                <Grid item xs={3} >
                  <Typography
                    fontWeight={600}
                    variant="subtitle2"
                    component="div"
                    children="File Url"
                    fontSize={18}
                    m={1}
                  />
                </Grid>
                <Grid item xs={9} >
                  <TextField source="fileUrl" fontSize={16} fullWidth />
                </Grid>
              </Box>

              <Box display="flex" alignItems="center">
                <Grid item xs={3} >
                  <Typography
                    fontWeight={600}
                    variant="subtitle2"
                    component="div"
                    children="Created At"
                    fontSize={18}
                    m={1}
                  />
                </Grid>
                <Grid item xs={9} >
                  <DateField source="createdAt" fontSize={16} fullWidth showTime />
                </Grid>
              </Box>

              <Box display="flex" alignItems="center">
                <Grid item xs={3} >
                  <Typography
                    fontWeight={600}
                    variant="subtitle2"
                    component="div"
                    children="Download At"
                    fontSize={18}
                    m={1}
                  />
                </Grid>
                <Grid item xs={9} >
                  <DateField source="downloadedAt" fontSize={16} fullWidth showTime />
                </Grid>
              </Box>

              <Box display="flex" alignItems="center">
                <Grid item xs={3}>
                  <Typography
                    fontWeight={600}
                    variant="subtitle2"
                    component="div"
                    children="Tags:"
                    fontSize={18}
                    m={1}
                  />
                </Grid>
                <Grid item xs={9}>
                  <ReferenceArrayInput source="tags" reference="tags">
                    <AutocompleteArrayInput fullWidth label={false} source="tags" optionText="name" optionValue="id" />
                  </ReferenceArrayInput>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </FormTab>
      </TabbedForm>
    </Edit>
  )
};

export default PhotoEdit;