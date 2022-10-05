import { Box, Stack, Typography } from "@mui/material";
import { Loader } from "../components";

const ExerciseVideos = ({ exerciseVideosData, name }) => {
    if (!exerciseVideosData.length) {
        return <Loader />
    }
    return (
        <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
            <Typography variant="h3" mb="33px">
                Watch <span style={{ color: "#FF2625", textTransform: "capitalize" }} >{name}</span> exercise videos
            </Typography>
            <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" sx={{ flexDirection: { lg: "row" }, gap: { lg: "100px", xs: "0px" } }}>
                {exerciseVideosData?.slice(0, 6).map((item, i) => (<a key={i} className="exercise-video" href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer">
                    <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                    <Box>
                        <Typography variant="h5" color="#000">
                            {item.video.title}
                        </Typography>
                        <Typography variant="h6" color="#000">
                            {item.video.channelName}
                        </Typography>
                    </Box>
                </a>))}
            </Stack>
        </Box>
    )
}

export default ExerciseVideos;