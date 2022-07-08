import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useTranslate, useTheme, Title } from 'react-admin';

import { darkTheme, lightTheme} from './layout/Themes';

const Mode = () => {
    const translate = useTranslate();
    const [theme, setTheme] = useTheme();

    return (
        <Card>
            <Title title={translate('Mode')} />
            <CardContent>
                <Box sx={{ width: '10em', display: 'inline-block' }}>
                    {translate('Theme')}
                </Box>
                <Button
                    variant="contained"
                    sx={{ margin: '1em' }}
                    color={
                        theme?.palette?.mode === 'light'
                            ? 'primary'
                            : 'secondary'
                    }
                    onClick={() => setTheme(lightTheme)}
                >
                    {translate('Light Mode')}
                </Button>
                <Button
                    variant="contained"
                    sx={{ margin: '1em' }}
                    color={
                        theme?.palette?.mode === 'dark'
                            ? 'primary'
                            : 'secondary'
                    }
                    onClick={() => setTheme(darkTheme)}
                >
                    {translate('Dark Mode')}
                </Button>
            </CardContent>
        </Card>
    );
};

export default Mode;