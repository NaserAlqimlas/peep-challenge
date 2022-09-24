import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import ColorGenerator from "./components/ColorGenerator";

const theme = createTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main">
                <ColorGenerator />
            </Container>
        </ThemeProvider>
    );
}

export default App;
