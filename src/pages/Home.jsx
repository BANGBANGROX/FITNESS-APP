import { useState } from "react";
import { Box } from "@mui/material";
import { HeroBanner, SearchExercises, Exercises } from "../components";

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState("all");
    const [search, setSearch] = useState("all");

    return (
        <Box>
            <HeroBanner />
            <SearchExercises exercises={exercises} search={search} setSearch={setSearch} setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
    )
}

export default Home