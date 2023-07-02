import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useDelete, useGetIdentity, useShow } from "@refinedev/core";
import { useParams, useNavigate } from "react-router-dom";
import ChatBubble from "@mui/icons-material/ChatBubble";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import Phone from "@mui/icons-material/Phone";
import Place from "@mui/icons-material/Place";
import Star from "@mui/icons-material/Star";

import { CustomButton } from "components";

function checkImage(url: any) {
    const img = new Image();
    img.src = url;
    return img.width !== 0 && img.height !== 0;
}

const ProductDetails = () => {
    const navigate = useNavigate();
    const { data: user } = useGetIdentity({
        v3LegacyAuthProviderCompatible: true,
    });
    const { queryResult } = useShow();
    const { mutate } = useDelete();
    const { id } = useParams();

    const { data, isLoading, isError } = queryResult;

    const productDetails = data?.data ?? {};

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Something went wrong!</div>;
    }

    const isCurrentUser = user.email === productDetails.creator.email;
    const currentUserEmail = user.email;

    const handleDeleteProduct = () => {
        // const response = confirm(
            // "Are you sure you want to delete this product?",
        // );
        // if (response) {
            mutate(
                {
                    resource: "products",
                    id: id as string,
                },
                {
                    onSuccess: () => {
                        navigate("/products");
                    },
                },
            );
        // }
    };

    return (
        <Box
            borderRadius="15px"
            padding="20px"
            bgcolor="#1B262C"
            width="fit-content"
        >
            <Typography fontSize={25} fontWeight={700} color="#CBF1F5">
                Details
            </Typography>

            <Box
                mt="20px"
                display="flex"
                flexDirection={{ xs: "column", lg: "row" }}
                gap={4}
            >
                <Box flex={1} maxWidth={764}>
                    <img
                        src={productDetails.photo}
                        alt="product_details-img"
                        height={546}
                        style={{ objectFit: "cover", borderRadius: "10px" }}
                        className="product_details-img"
                    />

                    <Box mt="15px">
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            flexWrap="wrap"
                            alignItems="center"
                        >
                            <Typography
                                fontSize={18}
                                fontWeight={500}
                                color="#CBF1F5"
                                textTransform="capitalize"
                            >
                                {productDetails.productType}
                            </Typography>
                            <Box>
                                {[1, 2, 3, 4, 5].map((item) => (
                                    <Star
                                        key={`star-${item}`}
                                        sx={{ color: "#F2C94C" }}
                                    />
                                ))}
                            </Box>
                        </Stack>

                        <Stack
                            direction="row"
                            flexWrap="wrap"
                            justifyContent="space-between"
                            alignItems="center"
                            gap={2}
                        >
                            <Box>
                                <Typography
                                    fontSize={22}
                                    fontWeight={600}
                                    mt="10px"
                                    color="#CBF1F5"
                                >
                                    {productDetails.title}
                                </Typography>
                                <Stack
                                    mt={0.5}
                                    direction="row"
                                    alignItems="center"
                                    gap={0.5}
                                >
                                    <Place sx={{ color: "#808191" }} />
                                    <Typography fontSize={14} color="#CBF1F5">
                                        {productDetails.location}
                                    </Typography>
                                </Stack>
                            </Box>

                            <Box>
                                <Typography
                                    fontSize={16}
                                    fontWeight={600}
                                    mt="10px"
                                    color="#CBF1F5"
                                >
                                    Price
                                </Typography>
                                <Stack
                                    direction="row"
                                    alignItems="flex-end"
                                    gap={1}
                                >
                                    <Typography
                                        fontSize={25}
                                        fontWeight={700}
                                        color="#CBF1F5"
                                    >
                                        ₹{productDetails.price}
                                    </Typography>
                                    <Typography
                                        fontSize={14}
                                        color="#CBF1F5"
                                        mb={0.5}
                                    >
                                        for single item
                                    </Typography>
                                </Stack>
                            </Box>
                        </Stack>

                        <Stack mt="25px" direction="column" gap="10px">
                            <Typography fontSize={18} color="#CBF1F5">
                                Description
                            </Typography>
                            <Typography fontSize={14} color="#CBF1F5">
                                {productDetails.description}
                            </Typography>
                        </Stack>
                    </Box>
                </Box>

                <Box
                    width="100%"
                    flex={1}
                    maxWidth={326}
                    display="flex"
                    flexDirection="column"
                    gap="20px"
                >
                    <Stack
                        width="100%"
                        p={2}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        border="3px solid #CBF1F5"
                        borderRadius={6}
                    >
                        <Stack
                            mt={2}
                            justifyContent="center"
                            alignItems="center"
                            textAlign="center"
                        >
                            <img
                                src={
                                    checkImage(productDetails.creator.avatar)
                                        ? productDetails.creator.avatar
                                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                                }
                                alt="avatar"
                                width={90}
                                height={90}
                                style={{
                                    borderRadius: "100%",
                                    objectFit: "cover",
                                }}
                            />

                            <Box mt="15px">
                                <Typography
                                    fontSize={18}
                                    fontWeight={600}
                                    color="#CBF1F5"
                                >
                                    {productDetails.creator.name}
                                </Typography>
                                <Typography
                                    mt="5px"
                                    fontSize={14}
                                    fontWeight={400}
                                    color="#CBF1F5"
                                >
                                    Seller
                                </Typography>
                            </Box>

                            <Stack
                                mt="15px"
                                direction="row"
                                alignItems="center"
                                gap={1}
                            >
                                <Place sx={{ color: "#E3FDFD" }} />
                                <Typography
                                    fontSize={14}
                                    fontWeight={400}
                                    color="#CBF1F5"
                                >
                                    Biaora, Madhya Pradesh.
                                </Typography>
                            </Stack>

                            <Typography
                                mt={1}
                                fontSize={16}
                                fontWeight={600}
                                color="#CBF1F5"
                            >
                                {productDetails.creator.allProducts.length}{" "}
                                Products
                            </Typography>
                        </Stack>

                        <Stack
                            width="100%"
                            mt="25px"
                            direction="row"
                            flexWrap="wrap"
                            gap={2}
                        >
                            <CustomButton
                                title={!isCurrentUser ? "Message" : "Edit"}
                                backgroundColor="#CBF1F5"
                                color="#1B262C"
                                fullWidth
                                icon={
                                    !isCurrentUser ? <ChatBubble /> : <Edit />
                                }
                                handleClick={() => {
                                    if (isCurrentUser) {
                                        navigate(
                                            `/products/edit/${productDetails._id}`,
                                        );
                                    } else {
                                        const subject = "Convorsation Regarding Order";
                                        const body = "Hey this is "+user.name+"!";

                                        const mailtoUrl = `mailto:${productDetails.creator.email}?subject=${encodeURIComponent(
                                        subject
                                        )}&body=${encodeURIComponent(body)}`;

                                        window.location.href = mailtoUrl;
                                    }
                                }}
                            />
                            <CustomButton
                                title={!isCurrentUser ? "Call" : "Delete"}
                                backgroundColor={
                                    !isCurrentUser ? "#CBF1F5" : "#d42e2e"
                                }
                                color="#1B262C"
                                fullWidth
                                icon={!isCurrentUser ? <Phone /> : <Delete />}
                                handleClick={() => {
                                    if (isCurrentUser) handleDeleteProduct();
                                }}
                            />
                        </Stack>
                    </Stack>

                    <Stack>
                        <img
                            src="https://serpmedia.org/scigen/images/googlemaps-nyc-standard.png?crc=3787557525"
                            width="100%"
                            height={306}
                            style={{ borderRadius: 10, objectFit: "cover" }}
                        />
                    </Stack>

                    <Box>
                        <CustomButton
                            title="Book Now"
                            backgroundColor="#CBF1F5"
                            color="#1B262C"
                            fullWidth
                            disabled={isCurrentUser}
                            handleClick={() => {
                                if (!isCurrentUser) {
                                    const subject = "Placing Order";
                                    const body = "Hey this is "+user.name+"!    I want to place an order for product '"+productDetails.title+"' which costs rs. "+productDetails.price+". Please book this product by my name.";

                                    const mailtoUrl = `mailto:${productDetails.creator.email}?subject=${encodeURIComponent(
                                    subject
                                    )}&body=${encodeURIComponent(body)}`;

                                    window.location.href = mailtoUrl;
                                }
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductDetails;