

import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface Props {
  result: {
    shortURL: string;
    createdAt: string;
    expiresAt: string;
    clicks: number;
  };
}

export const URLResultCard: React.FC<Props> = ({ result }) => {
  return (
    <Card sx={{ mt: 4, maxWidth: 500, mx: "auto" }}>
      <CardContent>
        <Typography variant="h6">Short URL:</Typography>
        <Typography color="primary">{result.shortURL}</Typography>
        <Typography>Created At: {result.createdAt}</Typography>
        <Typography>Expires At: {result.expiresAt}</Typography>
        <Typography>Clicks: {result.clicks}</Typography>
      </CardContent>
    </Card>
  );
};