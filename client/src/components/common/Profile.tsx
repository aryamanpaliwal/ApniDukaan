import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import Place from "@mui/icons-material/Place";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { ProfileProps, ProductProps } from "interfaces/common";
import ProductCard from "./ProductCard";

function checkImage(url: any) {
    const img = new Image();
    img.src = url;
    return img.width !== 0 && img.height !== 0;
}

const Profile = ({ type, name, avatar, email, products }: ProfileProps) => (
    <Box>
        <Typography fontSize={25} fontWeight={700} color="#1B262C">
            {type} Profile
        </Typography>

        <Box mt="20px" borderRadius="15px" padding="20px" bgcolor="#1B262C">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 2.5,
                }}
            >
                <Box
                    flex={1}
                    sx={{
                        marginTop: { md: "58px" },
                        marginLeft: { xs: "20px", md: "0px" },
                    }}
                >
                    <Box
                        flex={1}
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        gap="20px"
                    >
                        <img
                            src={
                                checkImage(avatar)
                                    ? avatar
                                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                            }
                            width={340}
                            height={320}
                            alt="user_profile"
                            className="my_profile_user-img"
                        />

                        <Box
                            flex={1}
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-between"
                            gap="30px"
                        >
                            <Stack direction="column">
                                <Typography
                                    fontSize={22}
                                    fontWeight={600}
                                    color="#CBF1F5"
                                >
                                    {name}
                                </Typography>
                                <Typography fontSize={16} color="#71C9CE">
                                    Product Seller
                                </Typography>
                            </Stack>

                            <Stack direction="column" gap="30px">
                                <Stack gap="15px">
                                    <Typography
                                        fontSize={14}
                                        fontWeight={500}
                                        color="#CBF1F5"
                                    >
                                        Address
                                    </Typography>
                                    <Box
                                        display="flex"
                                        flexDirection="row"
                                        alignItems="center"
                                        gap="10px"
                                    >
                                        <Place sx={{ color: "#CBF1F5" }} />
                                        <Typography
                                            fontSize={14}
                                            color="#71C9CE"
                                        >
                                            Dhan Mnadi, Biaora, Mahya Pradesh 465674
                                        </Typography>
                                    </Box>
                                </Stack>

                                <Stack
                                    direction="row"
                                    flexWrap="wrap"
                                    gap="20px"
                                    pb={4}
                                >
                                    <Stack flex={1} gap="15px">
                                        <Typography
                                            fontSize={14}
                                            fontWeight={500}
                                            color="#CBF1F5"
                                        >
                                            Phone Number
                                        </Typography>
                                        <Box
                                            display="flex"
                                            flexDirection="row"
                                            alignItems="center"
                                            gap="10px"
                                        >
                                            <Phone sx={{ color: "#CBF1F5" }} />
                                            <Typography
                                                fontSize={14}
                                                color="#71C9CE"
                                                noWrap
                                            >
                                                +91 6263334703
                                            </Typography>
                                        </Box>
                                    </Stack>

                                    <Stack flex={1} gap="15px">
                                        <Typography
                                            fontSize={14}
                                            fontWeight={500}
                                            color="#CBF1F5"
                                        >
                                            Email
                                        </Typography>
                                        <Box
                                            display="flex"
                                            flexDirection="row"
                                            alignItems="center"
                                            gap="10px"
                                        >
                                            <Email sx={{ color: "#CBF1F5" }} />
                                            <Typography
                                                fontSize={14}
                                                color="#71C9CE"
                                            >
                                                {email}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>

        {products.length > 0 && (
            <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#FCFCFC"
                sx ={{
                    backgroundColor: "#CBF1F5"
                }}
            >
                <Typography fontSize={18} fontWeight={600} color="#11142D">
                    {type} Products
                </Typography>

                <Box
                    mt={2.5}
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2.5,
                    }}
                >
                    {products?.map((product: ProductProps) => (
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
        )}
    </Box>
);

export default Profile;