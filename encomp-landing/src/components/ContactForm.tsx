import CircularProgress from "@mui/material/CircularProgress";
import { Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FieldValues, FormContainer, TextFieldElement } from "react-hook-form-mui";
import { useState } from "react";
import { EXTRA_LIGHT } from "../constants";

// const API_BASE_URL = "http://localhost:8000/api/"; // development
const API_BASE_URL = "https://api.encompapp.com/api/"; // production

// const LIGHT_THEME_INPUT = {
//   "& label.Mui-focused": {
//     color: GLOBAL_THEME.palette.secondary.main,
//   },
//   "& .MuiInput-underline:after": {
//     borderBottomColor: GLOBAL_THEME.palette.secondary.main,
//   },
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {
//       borderColor: EXTRA_LIGHT,
//     },
//     "&:hover fieldset": {
//       borderColor: EXTRA_LIGHT,
//     },
//   },
// };

const StyledTextField = styled(TextFieldElement)(({ theme }) => ({
  "& label.Mui-focused": {
    color: theme.palette.secondary.main,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.secondary.main,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: EXTRA_LIGHT,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.secondary.light,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.secondary.main,
    },
  },
}));

interface ContactDto {
  email: string;
  name: string;
  subject: string;
  message: string;
}

const defaultValues = {
  email: "",
  name: "",
  subject: "",
  message: "",
};

const SuccessType = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.success.light,
  padding: "1em",
  textAlign: "center",
}));

type SubmitStatusT = "success" | "pending" | "failed" | "initial";

const shouldRenderPlaceholder = (status: SubmitStatusT) =>
  status === "success" || status === "pending";

const PlaceHolder = (status: SubmitStatusT) => {
  return status === "success" ? (
    <SuccessType>Successfully sent message!</SuccessType>
  ) : (
    <CircularProgress />
  );
};

function getCommonPostHeaders() {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set("Content-Type", "application/json");
  return requestHeaders;
}

// async function fakeApiContact(contactDto: ContactDto): Promise<string> {
//   return new Promise((resolve) => setTimeout(() => resolve("succ"), 2000));
// }

async function apiContact(contactDto: ContactDto): Promise<string> {
  const response = await fetch(API_BASE_URL + "contact/", {
    method: "POST",
    body: JSON.stringify(contactDto),
    headers: getCommonPostHeaders(),
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    return Promise.reject(
      `Failed to submit contact request: ${response.status} - ${response.statusText}`
    );
  }
}

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatusT>("initial");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (data: FieldValues) => {
    setSubmitStatus("pending");
    const contact = data as ContactDto;
    apiContact(contact)
      .then(() => {
        setSubmitStatus("success");
        setTimeout(() => {
          setSubmitStatus("initial");
        }, 3000);
      })
      .catch((err) => {
        setSubmitStatus("failed");
        setErrorMessage(err);
      });
  };

  //   const handleReset = () => {
  //     setSubmitStatus("initial");
  //     setErrorMessage("");
  //   };

  return (
    <Container sx={{ marginTop: "1rem" }}>
      <Typography color={(theme) => theme.palette.error.main}>{`${errorMessage}`}</Typography>
      {shouldRenderPlaceholder(submitStatus) ? (
        PlaceHolder(submitStatus)
      ) : (
        <FormContainer defaultValues={defaultValues} onSuccess={handleSubmit}>
          <Stack spacing={2} color={EXTRA_LIGHT}>
            <StyledTextField
              required
              type="email"
              name="email"
              label="Email Address"
              color="secondary"
            />
            <StyledTextField required type="text" name="name" label="Name" color="secondary" />
            <StyledTextField
              required
              type="text"
              name="subject"
              label="Subject"
              color="secondary"
            />
            <StyledTextField
              required
              multiline
              type="text"
              name="message"
              label="Message"
              color="secondary"
            />
            <Stack direction="row" justifyContent="end" spacing={2}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ "&:hover": { backgroundColor: EXTRA_LIGHT } }}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </FormContainer>
      )}
    </Container>
  );
}
