import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData"
import { CategoryRounded } from "@mui/icons-material";
import { HorizontalScrollbar, Exercises } from "../components"

const SearchExercises = ({ exercises, setSearch, search, setExercises, bodyPart, setBodyPart }) => {
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            try {
                const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions);

                setBodyParts(["all", ...bodyPartsData]);
            } catch (err) {
                console.error(err);
            }
        };

        fetchExercisesData();
    }, [])

    const handleSearch = async () => {
        if (!search) return;

        try {
            const exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
            const searchedExercises = exerciseData.filter((exercise) => exercise.name.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search) || exercise.equipment.toLowerCase().includes(search) || exercise.bodyPart.toLowerCase().includes(search));

            //setSearch("");
            setExercises(searchedExercises);

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Box>
            <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
                <Typography fontWeight="700" sx={{ fontSize: { lg: "44px", xs: "30px" } }} mb="50px" textAlign="center">
                    Awesome Exercises <br /> You Should Know
                </Typography>
                <Box position="relative" mb="72px">
                    <TextField sx={{
                        input: { fontWeight: "700", border: "none", borderRadius: "4px" },
                        width: { lg: "800px", xs: "350px" },
                        backgroundColor: "#FFF",
                        borderRadius: "40px"
                    }}
                        height="76px"
                        value={search}
                        onChange={(e) => setSearch(e.target.value.toLowerCase())}
                        placeholder="Search Exercises..."
                        type="text" />
                    <Button className="search-btn" sx={{ backgroundColor: "#FF2625", color: "#FFF", textTransform: "none", width: { lg: "175px", xs: "80px" }, fontSize: { lg: "20px", xs: "14px" }, height: "56px", position: "absolute", right: "0" }} onClick={handleSearch}>
                        Search
                    </Button>
                </Box>
                <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
                    <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart={true} />
                </Box>
            </Stack>
            <Exercises search={search} setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} setSearch={setSearch} />
        </Box>
    )
}

export default SearchExercises;