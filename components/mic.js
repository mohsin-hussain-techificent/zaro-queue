import React, { useState } from "react";
import { Box, Button, Typography, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

const data = [
  {
    id: "ecommerce",
    title:
      "Transform customer support with AI agents tailored to your business. Always on, always accurate, and always ready to assist—without the queue.",
    img: "/assets/GettyImages-1207574548.svg",
  },
  {
    id: "healthcare",
    title:
      "AI-powered healthcare assistants to improve patient experience and reduce response times.",
    img: "/assets/GettyImages-1207574548.svg",
  },
  {
    id: "realestate",
    title:
      "AI solutions for real estate to manage inquiries, schedule visits, and close deals faster.",
    img: "/assets/GettyImages-1207574548.svg",
  },
  {
    id: "saas",
    title: "Enhance your SaaS customer support with 24/7 AI assistance.",
    img: "/assets/GettyImages-1207574548.svg",
  },
  {
    id: "services",
    title: "Streamline your service industry operations with AI automation.",
    img: "/assets/GettyImages-1207574548.svg",
  },
];

export default function Mic() {
  const [active, setActive] = useState(data[0]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        bgcolor: "white",
        p: isMobile ? 3 : 5,
      }}
    >
      <Typography
        variant="overline"
        sx={{
          letterSpacing: 1,
          color: "black",
          mb: isMobile ? 3 : 4,
          fontSize: "16px",
          fontFamily: '"Plus Jakarta Sans", sans-serif',
        }}
      >
        INDUSTRY APPLICATIONS
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          gap: isMobile ? 4 : 4,
          marginTop: 2,
        }}
      >
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Image
            src={active.img}
            alt="Industry"
            width={isMobile ? 50 : 100}
            height={isMobile ? 50 : 100}
            style={{
              height: "auto",
            }}
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: isMobile ? "1rem" : "1.2rem",
              fontWeight: 400,
              color: "black",
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            {active.title}
          </Typography>

          <Stack
            direction="row"
            spacing={isMobile ? 2 : 1.5}
            rowGap={isMobile ? 1.5 : 1}
            sx={{
              flexWrap: "wrap",
              mt: isMobile ? 4 : 3,
            }}
          >
            {data.map((item) => (
              <Button
                key={item.id}
                onClick={() => setActive(item)}
                sx={{
                  borderRadius: "20px",
                  textTransform: "none",
                  px: 2,
                  border: "1px solid black",
                  bgcolor: active.id === item.id ? "black" : "white",
                  color: active.id === item.id ? "white" : "black",
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  "&:hover": {
                    bgcolor: active.id === item.id ? "black" : "#f0f0f0",
                  },
                }}
              >
                {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
              </Button>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
