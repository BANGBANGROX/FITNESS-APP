import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, paginationItemClasses, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { ExerciseCard } from "../components";

const Exercises = ({ search, exercises, setExercises, bodyPart, setSearch }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;

    const paginate = (e, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1800, behavior: "smooth" });
    }

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];

            try {
                if (bodyPart === "all" || !exercises) {
                    exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
                } else {
                    exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
                    setSearch(bodyPart);
                }
            } catch (err) {
                console.error(err);
            }

            setExercises(exercisesData);
        }

        fetchExercisesData();
    }, [bodyPart])

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    return (
        <Box id="exercises" sx={{ marginTop: { lg: "110px" } }} mt="50px" p="20px">
            <Typography variant="h3" mb="46px">Showing results for "{search.toUpperCase()}"</Typography>
            <Stack direction="row" sx={{ gap: { lg: "110px", xs: "50px" } }} flexWrap="wrap" justifyContent="center">
                {currentExercises.map((exercise, i) => <ExerciseCard key={i} exercise={exercise} />)}
            </Stack>
            <Stack mt="100px" alignItems="center">
                {exercises.length > exercisesPerPage && (<Pagination color="standard" shape="rounded" count={Math.ceil(exercises.length / exercisesPerPage)} page={currentPage} onChange={paginate} size="large" />)}
            </Stack>
        </Box>
    )
}

export default Exercises;