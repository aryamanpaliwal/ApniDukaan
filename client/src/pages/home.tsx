import { useList } from "@refinedev/core";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import {
    PieChart,
    ProductReferrals,
    TotalRevenue,
    ProductCard,
} from "components";

const Home = () => {
    const { data, isLoading, isError } = useList({
        resource: "products",
        config: {
            pagination: {
                pageSize: 4,
            },
        },
    });

    const latestProducts = data?.data ?? [];

    if (isLoading) return <Typography>Loading...</Typography>;
    if (isError) return <Typography>Something went wrong!</Typography>;

    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#1B262C">
                Dashboard
            </Typography>

            <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
                <PieChart
                    title="Products for Sale"
                    value={684}
                    series={[75, 25]}
                    colors={["#0F4C75", "#3282B8"]}
                />
                <PieChart
                    title="Products for Rent"
                    value={550}
                    series={[60, 40]}
                    colors={["#0F4C75", "#3282B8"]}
                />
                <PieChart
                    title="Products for Demo"
                    value={568}
                    series={[75, 25]}
                    colors={["#0F4C75", "#3282B8"]}
                />
                <PieChart
                    title="Customer"
                    value={5684}
                    series={[75, 25]}
                    colors={["#0F4C75", "#3282B8"]}
                />
            </Box>

            <Stack
                mt="25px"
                width="100%"
                direction={{ xs: "column", lg: "row" }}
                gap={4}
            >
                <TotalRevenue />
                <ProductReferrals />
            </Stack>

            <Box
                flex={1}
                borderRadius="15px"
                padding="20px"
                bgcolor="#E3FDFD"
                display="flex"
                flexDirection="column"
                minWidth="100%"
                mt="25px"
            >
                <Typography fontSize="18px" fontWeight={600} color="#1B262C">
                    Latest Products
                </Typography>

                <Box
                    mt={2.5}
                    sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}
                >
                    {latestProducts.map((product) => (
                        <ProductCard
                            key={product._id}
                            id={product._id}
                            title={product.title}
                            location={product.location}
                            price={product.price}
                            photo={product.photo}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Home;