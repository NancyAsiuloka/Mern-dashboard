import React, {useState} from 'react';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Collapse,
    Button,
    Typography,
    Rating,
    useTheme,
    useMediaQuery,
  } from "@mui/material";
  import Header from '../../components/Header';
  import { useGetProductsQuery } from "../../state/api";

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();
  const isNonMobile = useMediaQuery("(min-width: 1008px)");

  console.log("data", data);

  return <Box m="1.5rem 2.5rem">
     <Header title="PRODUCTS" subtitle="See your list of products." />
    </Box>
}

export default Products