import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { productReferralsInfo } from "constants/index";

interface ProgressBarProps {
    title: string;
    percentage: number;
    color: string;
}

const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => (
    <Box width="100%">
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
        >
            <Typography fontSize={16} fontWeight={500} color="#1B262C">
                {title}
            </Typography>
            <Typography fontSize={16} fontWeight={500} color="#0F4C75">
                {percentage}%
            </Typography>
        </Stack>
        <Box
            mt={2}
            position="relative"
            width="100%"
            height="8px"
            borderRadius={1}
            bgcolor="#3282B8"
        >
            <Box
                width={`${percentage}%`}
                bgcolor={color}
                position="absolute"
                height="100%"
                borderRadius={1}
            />
        </Box>
    </Box>
);

const ProductReferrals = () => {
    return (
        <Box
            p={4}
            bgcolor="#E3FDFD"
            id="chart"
            minWidth={490}
            display="flex"
            flexDirection="column"
            borderRadius="15px"
        >
            <Typography fontSize={18} fontWeight={600} color="#1B262C">
                Product Referrals
            </Typography>

            <Stack my="20px" direction="column" gap={4}>
                {productReferralsInfo.map((bar) => (
                    <ProgressBar key={bar.title} {...bar} />
                ))}
            </Stack>
        </Box>
    );
};

export default ProductReferrals;