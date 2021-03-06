import * as React from 'react';
import { Card, CardMedia } from '@mui/material';
import { useRecordContext } from 'react-admin';
import { Product } from '../../types';
import { API } from '../../App';

const Image = () => {
    const record = useRecordContext<Product>();
    if (!record) return null;
    return (
        <Card
            sx={{
                display: 'flex',
                maxHeight: '500px',
                boxShadow: 'none',
            }}
        >
            <CardMedia
                src={`${API}/filestore/picture/${record.fileId}/${record.width}/${record.height}/${record.name}`}
                component="img"
                alt=""
                sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                }}
            />
        </Card>
    );
};

export default Image;