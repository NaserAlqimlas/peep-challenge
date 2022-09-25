import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ColorGenerator = () => {
    const [colors, setColors] = useState<string[]>([]);
    const [liked, setLiked] = useState<string[]>([]);

    const getRandomColors = (amountToGenerate: number = 8) => {
        const hexValues: string[] = [];
        for (let i = 0; i < amountToGenerate; i++) {
            const hex = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
            hexValues.push(hex);
        }
        setColors(() => {
            return [...liked, ...hexValues];
        });
    };

    const generateRandomColors = () => {
        const amount = 8 - liked.length;
        getRandomColors(amount);
    };

    // could make this more readable, will come back to it later.
    const handleLike = (value: string) => {
        if (liked.includes(value) === true) {
            const copy = liked;
            let index = copy.indexOf(value);
            if (index !== -1) {
                copy.splice(index, 1);
                setLiked(copy);
            }
        } else {
            setLiked((liked) => {
                return [...liked, value];
            });
        }
    };

    return (
        <>
            <div>
                {colors.map((color) => (
                    <Card
                        sx={{ minWidth: 275 }}
                        style={{ backgroundColor: color }}
                    >
                        <CardContent>
                            <Typography>{color}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                variant="contained"
                                onClick={() => handleLike(color)}
                            >
                                {liked.includes(color) ? (
                                    <FavoriteIcon />
                                ) : (
                                    <FavoriteBorderIcon />
                                )}
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
            <Button variant="contained" onClick={generateRandomColors}>
                Generate New Color Pallete
            </Button>
        </>
    );
};

export default ColorGenerator;
