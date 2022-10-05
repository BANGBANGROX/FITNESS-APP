import { Box, Stack, Typography } from "@mui/material";
import { HorizontalScrollbar } from "../components";
import { Loader } from "../components";

const SimilarExercises = ({ targetMuscleExercisesData, equipmentExercisesData }) => {
    return (
        <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
            <Typography variant="h3" mb={5}>
                Exercises that <span style={{ color: "#FF2625" }}>target the same muscle</span> group
            </Typography>
            <Stack direction="row" sx={{ padding: "2px", position: "relative" }} mb={5}>
                {targetMuscleExercisesData.length ? <HorizontalScrollbar data={targetMuscleExercisesData} /> : <Loader />}
            </Stack>
            <Typography variant="h3" mb={5}>
                <span style={{ color: "#FF2625" }}>Similar</span> equipment exercises
            </Typography>
            <Stack direction="row" sx={{ padding: "2px", position: "relative" }}>
                {equipmentExercisesData.length ? <HorizontalScrollbar data={equipmentExercisesData} /> : <Loader />}
            </Stack>
        </Box>
    )
}

export default SimilarExercises;