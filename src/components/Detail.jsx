import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetailData }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetailData;
    const extraDetails = [
        { icon: BodyPartImage, name: bodyPart },
        { icon: TargetImage, name: target },
        { icon: EquipmentImage, name: equipment },
    ]

    return (
        <Stack gap="60" sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}>
            <img src={gifUrl} alt={name} loading="lazy" height="500px" width="500px" />
            <Stack sx={{ gap: { lg: "35px", xs: "20px" }, marginLeft: "30px" }}>
                <Typography variant="h3" textTransform="capitalize">
                    {name}
                </Typography>
                <Typography variant="h6">
                    Exercises keep you strong.{' '}
                    {name} is one of the bese exercises to target your {target}. It will help you imporve your mood and gain energy.
                </Typography>
                {extraDetails.map((item, i) => <Stack key={i} direction="row" gap="24px" alignItems="center">
                    <Button sx={{ background: "#FF2DB", borderRadius: "50%", width: "100px", height: "100px" }}><img src={item.icon} alt="body part" width="50px" height="50px" /></Button>
                    <Typography variant="h5" textTransform="capitalize">{item.name}</Typography>
                </Stack>)}
            </Stack>
        </Stack>
    );
}

export default Detail;