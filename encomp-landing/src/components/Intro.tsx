import { CardContent, Stack, styled, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { EXTRA_LIGHT } from "../color";

const OuterContainer = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const IntroContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  maxWidth: theme.breakpoints.values.md,
  margin: "12px",
}));

const IntroTitle = styled(Typography)({
  fontSize: "3rem",
  fontWeight: "bolder",
  marginBlock: "1rem",
  color: EXTRA_LIGHT,
});

const IntroSubTitle = styled(Typography)({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBlock: "1rem",
  color: EXTRA_LIGHT,
});

const IntroText = styled(Typography)({
  fontSize: "1.25rem",
  color: EXTRA_LIGHT,
});

const IntroTextSmall = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  color: EXTRA_LIGHT,
}));

const StyledCard = styled(Card)(({ theme }) => ({
  background: `radial-gradient(at right top, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  width: "12rem",
  height: "12rem",
  margin: "1rem",
}));

const FeatureCard = (text: string) => (
  <StyledCard>
    <CardContent>
      <IntroTextSmall>{text}</IntroTextSmall>
    </CardContent>
  </StyledCard>
);

const StyledSolutionCard = styled(Card)(({ theme }) => ({
  background: `radial-gradient(at right top, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  width: "20rem",
  margin: "1rem",
}));

const SolutionImage = styled("img")(({ theme }) => ({
  objectFit: "contain",
  width: "100%",
}));

const StyledHref = styled("a")(({ theme }) => ({
  textDecoration: "none",
}));

const SolutionCard = (text: string, imgSource: string, imgAlt: string, link: string) => (
  <StyledHref href={link} target="_blank" rel="noopener noreferrer">
    <StyledSolutionCard>
      <CardContent>
        <SolutionImage src={imgSource} alt={imgAlt} />
        <IntroText textAlign="center">{text}</IntroText>
      </CardContent>
    </StyledSolutionCard>
  </StyledHref>
);

export default function Intro() {
  return (
    <OuterContainer>
      <IntroContainer>
        <IntroTitle>Modern tools for better workflows.</IntroTitle>
        <IntroText>
          Encomp is enabling this generation of engineers to design a more perfect future. With our
          modern and powerful calculation tools, you can focus on doing the work that matters, and
          let our technology bring you a new level of efficiency.
        </IntroText>
        <IntroTitle>efficalc</IntroTitle>
        <IntroText>
          Our original engineering calculation platform, efficalc, has been thoughtfully designed to
          optimize design calculation workflows for engineers.
        </IntroText>
        <IntroText>
          Write your inputs and equations like you would by hand and don't waste time with the
          formatting.
        </IntroText>
        <IntroSubTitle>
          efficalc will automate the formatting and generate everything you need throughout the
          lifecycle of the calculation.
        </IntroSubTitle>
        <Stack direction="row" spacing={0} sx={{ flexWrap: "wrap" }}>
          {FeatureCard("Write your calculations with our transparent and highly readable syntax.")}
          {FeatureCard("Iterate your inputs to find the perfect design.")}
          {FeatureCard("Review or print your submittal ready calculation report on demand.")}
          {FeatureCard(
            "Use the same calculation frequently? Your templates can be easily reused hundreds of times."
          )}
          {FeatureCard("Manage all your projects and calculations on the cloud.")}
          {FeatureCard(
            "When you change a template, every calc using that template will be updated."
          )}
        </Stack>
        <IntroTitle>Other Solutions</IntroTitle>
        <IntroText>
          We created some other helpful tools for engineers that you may find useful:
        </IntroText>
        <Stack direction="row">
          {SolutionCard(
            "Truss Analysis",
            "/truss_analysis_img.png",
            "Truss analysis application",
            "https://trussanalysis.com/"
          )}
          {SolutionCard(
            "Concrete Beam Design",
            "/concrete_beam_img.png",
            "Concrete beam application",
            "https://concrete.encompapp.com/"
          )}
        </Stack>
      </IntroContainer>
    </OuterContainer>
  );
}
