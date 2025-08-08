import { Box, Container, Grid, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        backgroundColor: '#fff',
        borderTop: '1px solid #eee',
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Left Section */}
        <Grid item xs={12} md={12}>
          <Box display="flex" alignItems="center" flexWrap="wrap" width="100vw">
            {/* Logo */}
            <Box
              component="img"
              src="assets/logo-symbol.svg"
              alt="Logo"
              sx={{
                height: 40,
                width: 'auto',
                mr: 2,
              }}
            />

            <Box sx={{ display: "flex", mt: 2, width: "100%" }}>
              <Box sx={{ width: "80%" }}>

                <Typography
                  // variant="h6"
                  sx={{ flex: '1 1 auto', color: 'black', fontSize: { xs: "1.3rem", sm: "2.5rem" } }}
                >
                  Schedule a free consultation to see Zero Queue in action and
                  discover how it can transform your business
                </Typography>
              </Box>

              <Box
                component="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                sx={{
                  height: { xs: 24, sm: 32, md: 40 },
                  width: 'auto',
                  flexShrink: 0,
                  ml: 2,
                }}
              >
                <path
                  d="m31.3214642 38.0401891c-2.3308988-.7700313-4.5785068-1.7238883-6.7255977-2.8373032-.7630963-.3919551-1.5157502-.815122-2.2546229-1.2522033-1.6753169-.9885675-3.2847471-2.0846671-4.8179013-3.2743579-.8602127-.669443-1.696184-1.3666615-2.5077808-2.0915932-.4197038-.3746132-.8255289-.7526894-1.2278731-1.1412081-.4197039-.4023531-.8289919-.81165-1.2313361-1.2313361-.8255289-.8567408-1.6163563-1.7446667-2.3690812-2.6604214-.003472 0-.003472-.0034719-.006935-.0034719-.29135792-.3503274-.57925279-.7110618-.8636846-1.0786956-1.75514463-2.2546229-3.29859924-4.6756499-4.61322619-7.2389282-.263618-.5098852-.51682021-1.0302129-.75962439-1.5539326-.86021267-1.8487357-1.6059671-3.76344704-2.22336671-5.73010408-.37807623-1.22787311-.71453371-2.48007637-.99203054-3.74959487-.30523675-1.37705064-.54804094-2.77834262-.72840367-4.19703865v40h40c-2.3551402-.2913579-4.6583346-.7665594-6.8886274-1.404755-.5966036-.1768997-1.1967057-.3607344-1.7897752-.5549759z"
                  fillRule="evenodd"
                  transform="matrix(-1 0 0 -1 40 40)"
                />
              </Box>
            </Box>
          </Box>
        </Grid>


        <Grid item xs={12} md={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: 'column', sm: "row", md: 'row' },
              alignItems: 'center',
              justifyContent: "space-between",
              gap: 2
            }}
          >
            <Typography variant="body2" sx={{ color: "#5F6567" }}>
              ©2025 VamTam. All rights reserved.
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center" gap={0.5}>
              {/* First line: number + email */}
              <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="body2" sx={{ color: "black" }}>
                  1-800-356-8933 |
                </Typography>

                <Link
                  href="mailto:studio@exapler.com"
                  variant="body2"
                  sx={{ color: "black", textDecoration: "none" }}
                >
                  studio@exapler.com
                </Link>
              </Box>

              {/* Second line: address */}
              <Typography variant="body2" sx={{ color: "black", textAlign: "center" }}>
                Seventh Ave, New York City
              </Typography>
            </Box>
            <Link href="#" variant="body2"
              sx={{ color: "black", textDecoration: "none" }}
            >
              Privacy Policy
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
