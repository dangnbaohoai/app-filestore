// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import { useRecordContext } from 'react-admin';
// import { Product } from '../../types';

// const Img = styled('img')({
//     width: 350,
//     maxWidth: 350,
//     maxHeight: 350,
//     verticalAlign: 'middle',
// });

// const ThumbnailField = (props: { source: string; label?: string }) => {
//     const record = useRecordContext<Product>();
//     if (!record) return null;
//     return <Img src={record.url} alt="" />;
// };

// export default ThumbnailField;


import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { useRecordContext } from 'react-admin'
import { Product } from '../../types'
import {
    Button,
    Dialog,
    DialogTitle,
    IconButton,
    DialogContent
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { API } from '../../App'

const Img = styled('img')({
    width: 240,
    height: 135,
    objectFit: 'fill',
    maxWidth: 360,
    maxHeight: 180,
    verticalAlign: 'middle'
})

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2)
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1)
    }
}))

export interface DialogTitleProps {
    id: string
    children?: React.ReactNode
    onClose: () => void
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props

    return (
        <DialogTitle sx={{ m: 0, p: 2, }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    )
}

const ThumbnailField = (props: { source?: string; label?: string }) => {
    const [open, setOpen] = useState(false)
    const record = useRecordContext<Product>()

    if (!record) return null

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Button onClick={handleClickOpen}>
                <Img
                    src={`${API}/filestore/picture/${record.fileId}/400/400/${record.name}`}
                    alt=""
                    style={{width: 'auto', height: 'auto'}}
                />
            </Button>
            <BootstrapDialog aria-labelledby="customized-dialog-title" open={open} fullWidth>
                <BootstrapDialogTitle
                    id="customized-dialog-title"
                    onClose={handleClose}
                >
                    {record.name}
                </BootstrapDialogTitle>
                <DialogContent dividers style={{ padding: 0, }}>
                    <img
                        src={`${API}/filestore/picture/${record.fileId}/2180/2180/${record.name}`}
                        alt={record.name}
                        style={{ width: '100%',}}
                    />
                </DialogContent>
            </BootstrapDialog>
        </>
    )
}

export default ThumbnailField