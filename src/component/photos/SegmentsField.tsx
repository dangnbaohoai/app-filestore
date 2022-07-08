import { Chip, Stack } from '@mui/material'
import * as React from 'react'
import { FieldProps, useRecordContext } from 'react-admin'
import { Product } from '../../types'

const SegmentsField = (props: FieldProps) => {
  const record = useRecordContext<Product>()
  
  if (!record || !record.tags) {
    return null
  }
  return (
    <Stack direction="row" gap={1} flexWrap="wrap">
      {record.tags.map((item, index) => (
        <Chip key={index} label={item.name} color="info" variant="outlined" />
      ))}
    </Stack>
  )
}

export default SegmentsField