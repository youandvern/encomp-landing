import { Box, CardContent, Stack, styled, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { ABOUT_CLASS, CONTACT_CLASS, EXTRA_LIGHT, PRODUCT_CLASS, TOP_CLASS } from "../constants";
import ContactForm from "./ContactForm";
// import cloud from "../icons/cloud.png";
import distribute from "../icons/distribute.png";
import manage from "../icons/manage.png";
import multiple from "../icons/multiple.png";
import report from "../icons/report.png";
import update from "../icons/update.png";
import write from "../icons/write.png";

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

const Spacer = styled("div")({
  height: "6rem",
});

const IntroTitle = styled(Typography)({
  fontSize: "3rem",
  fontWeight: "bolder",
  marginBlock: "1rem",
  color: EXTRA_LIGHT,
  textShadow: "-1px 2px 3px black",
  paddingTop: "2rem",
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
  marginBottom: "1rem",
});

const IntroTextSmall = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  color: theme.palette.primary.main,
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  // background: `radial-gradient(at right top, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  background: `radial-gradient(at right top, ${EXTRA_LIGHT}, ${theme.palette.secondary.light})`,
  width: "12rem",
  height: "12rem",
  margin: "1rem",
  [theme.breakpoints.down("sm")]: {
    width: "10rem",
    margin: "0.5rem",
  },
}));

const FeatureIcon = styled("img")(({ theme }) => ({
  width: "4rem",
  [theme.breakpoints.down("sm")]: {
    width: "3rem",
  },
}));

const FeatureItem = (text: string, iconPath: string) => (
  <FeatureCard>
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "10rem",
      }}
    >
      <FeatureIcon src={iconPath} alt="" />
      <IntroTextSmall>{text}</IntroTextSmall>
    </CardContent>
  </FeatureCard>
);

const StyledSolutionCard = styled(Card)(({ theme }) => ({
  background: `radial-gradient(at right top, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  width: "20rem",
  transition: "0.1s",
  [theme.breakpoints.down("md")]: {
    width: "15rem",
  },
  [theme.breakpoints.down("sm")]: {
    width: "20rem",
  },
  "&:hover": {
    transform: "translate(0, -0.35rem)",
  },
}));

const SolutionImage = styled("img")(({ theme }) => ({
  objectFit: "contain",
  width: "100%",
}));

const OtherSolutionHref = styled("a")(({ theme }) => ({
  textDecoration: "none",
}));

const SolutionCard = (text: string, imgSource: string, imgAlt: string, link: string) => (
  <Box margin="1rem">
    <OtherSolutionHref href={link} target="_blank" rel="noopener noreferrer">
      <StyledSolutionCard>
        <CardContent>
          <SolutionImage src={imgSource} alt={imgAlt} />
          <IntroText textAlign="center">{text}</IntroText>
        </CardContent>
      </StyledSolutionCard>
    </OtherSolutionHref>
  </Box>
);

const SectionBox = styled(Box)(({ theme }) => ({
  minHeight: "110vh",
}));

const RelaDiv = styled("div")({
  position: "relative",
});

const InlineHref = styled("a")(({ theme }) => ({
  textDecoration: "none",
  fontWeight: "inherit",
  color: theme.palette.secondary.light,
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

export default function Intro() {
  return (
    <OuterContainer>
      <IntroContainer>
        <SectionBox>
          <Spacer className={TOP_CLASS} id={TOP_CLASS} />
          <RelaDiv>
            <IntroTitle>Modern tools for better workflows.</IntroTitle>
            <IntroText>
              <b>Encomp</b> is enabling this generation of engineers to design a more perfect
              future.
            </IntroText>
            <IntroText>
              With our modern and powerful calculation tools, you can focus on doing the work that
              matters, and let our technology bring you a new level of efficiency.
            </IntroText>
            <div className="spot"></div>
            <div className="spot spot-color-2 spot-middle"></div>
            <div className="spot spot-color-3 spot-right"></div>
          </RelaDiv>
        </SectionBox>
        <SectionBox className={PRODUCT_CLASS} id={PRODUCT_CLASS}>
          <RelaDiv>
            <IntroTitle>
              <InlineHref
                href="https://efficalc.encompapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: EXTRA_LIGHT }}
              >
                efficalc
              </InlineHref>
            </IntroTitle>
            <IntroText>
              Our original engineering calculation platform, efficalc, has been thoughtfully
              designed to optimize design calculation workflows for engineers.
            </IntroText>
            <IntroText>
              Write your inputs and equations like you would by hand and don't waste time with the
              formatting. Then efficalc will automate the formatting and generate everything you
              need throughout the lifecycle of the calculation.
            </IntroText>
            <div className="spot"></div>
            <div className="spot spot-middle"></div>
            <div className="spot spot-right"></div>
          </RelaDiv>

          <Stack direction="row" spacing={0} justifyContent="center" sx={{ flexWrap: "wrap" }}>
            {FeatureItem(
              "Write your calculations with our transparent and highly readable syntax.",
              write
            )}
            {FeatureItem("Iterate your inputs to find the perfect design.", update)}
            {FeatureItem(
              "Review or print your submittal ready calculation report on demand.",
              report
            )}
            {FeatureItem("Reuse common calculations hundreds of times.", multiple)}
            {FeatureItem("Manage all your projects and calculations on the cloud.", manage)}
            {FeatureItem(
              "When you change a template, every calc using that template will be updated.",
              distribute
            )}
          </Stack>
          <br />
          <IntroSubTitle sx={{ fontWeight: "normal" }}>
            Start using{" "}
            <InlineHref
              href="https://efficalc.encompapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontWeight: "bold" }}
            >
              efficalc
            </InlineHref>{" "}
            for free today!
          </IntroSubTitle>
          <IntroTitle>Other Solutions</IntroTitle>
          <IntroText>
            We created some other helpful tools for engineers that you may find useful:
          </IntroText>
          <Stack direction={{ xs: "column", sm: "row" }}>
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
        </SectionBox>
        <SectionBox className={ABOUT_CLASS} id={ABOUT_CLASS}>
          <Spacer />
          <RelaDiv>
            <IntroTitle>About Encomp</IntroTitle>
            <IntroText>
              Encomp exists to solve common problems and create more efficient workflows for
              engineers. By leveraging the power of technology and providing modern software
              solutions, we aim to automate the manual and tedious parts of your current workflow in
              order to empower you to do the work that only you can do.
            </IntroText>
            <IntroSubTitle>Vision</IntroSubTitle>
            <IntroText>
              Empower engineers to transform their industry and design a more perfect future.
            </IntroText>
            <div className="spot spot-color-2"></div>
            <div className="spot spot-color-2 spot-middle"></div>
            <div className="spot spot-color-2 spot-right"></div>
          </RelaDiv>
        </SectionBox>
        <SectionBox className={CONTACT_CLASS} id={CONTACT_CLASS}>
          <RelaDiv>
            <IntroTitle>Contact</IntroTitle>
            <IntroText>
              We welcome any feedback or conversation starters and would love to hear from you!
              We'll get back to you as soon as we see your message.
            </IntroText>
            <div className="spot spot-color-3"></div>
            <div className="spot spot-color-3 spot-middle"></div>
            <div className="spot spot-color-3 spot-right"></div>
          </RelaDiv>
          <br />
          <br />
          <IntroText>
            Feel free to use the contact form below or email us directly at{" "}
            <b>team@encompapp.com</b>.
          </IntroText>
          <ContactForm />
        </SectionBox>
      </IntroContainer>
    </OuterContainer>
  );
}
