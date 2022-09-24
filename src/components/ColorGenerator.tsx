import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// obtain a list of 8 random hex values
const getRandomColors = () => {
    const colors = [];
    const length = 8;
    for (let i = 0; i < length; i++) {
        const hex = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
        colors.push(hex);
    }
    return colors;
};

// get random colors and display them
const generateRandomColors = () => {
    const colors = getRandomColors();
    const colorComponent = colors.map((color) => (
        <Typography>{color}</Typography>
    ));
    return colorComponent;
};

const ColorGenerator = () => {
    const [generated, setGenerated] = useState<JSX.Element[]>([]);

    return generated.length > 0 ? (
        <>
            <div>
                {generated.map((generatedColor) => (
                    <>{generatedColor}</>
                ))}
            </div>
            <Button
                variant="contained"
                onClick={() => setGenerated(generateRandomColors)}
            >
                Generate New Color Pallete
            </Button>
        </>
    ) : (
        <Button
            variant="contained"
            onClick={() => setGenerated(generateRandomColors)}
        >
            Generate Color Pallete
        </Button>
    );
};

export default ColorGenerator;
