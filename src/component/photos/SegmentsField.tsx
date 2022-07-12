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
        <Chip key={index} label={item.name} style={{
          backgroundColor: 'rgb(194, 224, 255)',
          color: 'rgb(0, 127, 255)',
          fontWeight: '700'
        }}
        />
      ))}
    </Stack>
  )
}

export default SegmentsField