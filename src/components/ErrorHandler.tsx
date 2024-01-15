import { Button, Container, Typography } from "@mui/material";

interface Props {
  message: string;
  onRetry: () => void;
}

const ErrorHandler = ({ message, onRetry }: Props) => {
  return (
    <Container>
      <Typography variant="h4">{message}</Typography>
      <Button onClick={() => onRetry()} variant="outlined" color="error">
        Retry
      </Button>
    </Container>
  );
};

export default ErrorHandler;
