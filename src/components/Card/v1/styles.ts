import { styled } from "@mui/material";
import Box from "@mui/material/Box";

import { Text as TextUI } from "../../Text";

export const Container = styled(Box)(({ theme }) => ({
  width: theme?.width?.full,
  maxWidth: "25rem",
  height: "26.25rem",
  maxHeight: "26.25rem",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: theme?.palette?.black900,
  border: `0.06rem solid ${theme?.palette?.gray400}`,
  borderRadius: 3,
  overflow: "hidden",
}));

export const ContentImage = styled(Box)(({ theme }) => ({
  width: theme?.width?.full,
  minHeight: "13.125rem",
  maxHeight: "13.125rem",
  borderBottom: `0.06rem solid ${theme?.palette?.gray400}`,
  borderRadius: 5,
}));

export const ContentInfos = styled(Box)(({ theme }) => ({
  maxWidth: theme?.width?.full,
  height: theme?.height?.full,
  position: "relative",
  padding: "1rem",
}));

export const Text = styled(TextUI)(({ theme }) => ({
  marginBottom: "1.5rem",
  fontSize: theme?.typography?.fontSize?.md,
  fontWeight: theme?.typography?.fontWeight?.sm,
  textAlign: "justify",
}));
