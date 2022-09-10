import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';

interface Props {
    children: React.ReactNode;
}

export const AppTheme = ({ children }: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};