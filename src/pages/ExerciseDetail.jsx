import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import { Detail, ExerciseVideos, SimilarExercises } from "../components";

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);
    const { id } = useParams();

    console.log(id);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDBUrl = "https://exercisedb.p.rapidapi.com";
            const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

            try {
                const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, exerciseOptions);
                const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
                const targetMuscleExercisesData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
                const equipmentExercisesData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);

                setExerciseDetail(exerciseDetailData);
                setExerciseVideos(exerciseVideosData.contents);
                setTargetMuscleExercises(targetMuscleExercisesData);
                setEquipmentExercises(equipmentExercisesData);
            } catch (err) {
                console.error(err);
            }
        }

        fetchExercisesData();
    }, [id])

    return (
        <Box>
            <Detail exerciseDetailData={exerciseDetail} />
            <ExerciseVideos exerciseVideosData={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercisesData={targetMuscleExercises} equipmentExercisesData={equipmentExercises} />
        </Box>
    )
}

export default ExerciseDetail;