import * as React from "react";
import { Card, CardContent, CardHeader } from '@mui/material';

function Dashboard() {
    return (
        <Card
            sx={{
                background: theme =>
                    theme.palette.mode === 'dark'
                        ? '#535353'
                        : `#2196f3`,

                color: '#fff',
                padding: '20px',
                marginTop: 2,
                marginBottom: '1em',
            }}
        >
            <CardHeader title="Welcome to the project Filestore!!!" />
            <CardContent>This is the admin of an filestore management. Feel free to explore and modify the data.</CardContent>
        </Card>
    )
}
export default Dashboard