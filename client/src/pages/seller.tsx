import { useList } from "@refinedev/core";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { SellerCard } from "components";

const Sellers = () => {
    const { data, isLoading, isError } = useList({ resource: "users" });

    const allSellers = data?.data ?? [];

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142d">
                Sellers List
            </Typography>

            <Box
                mt="20px"
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    backgroundColor: "#CBF1F5",
                }}
            >
                {allSellers.map((seller) => (
                    <SellerCard
                        key={seller._id}
                        id={seller._id}
                        name={seller.name}
                        email={seller.email}
                        avatar={seller.avatar}
                        noOfProducts={seller.allProducts.length}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Sellers;