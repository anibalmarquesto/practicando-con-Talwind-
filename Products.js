import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Product from "./Product";
import products from "../product-data";
import accounting from "accounting";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Products(props) {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product
            title="Shoes"
            subheader="in Stock"
            image="https://media.istockphoto.com/id/623270836/es/foto/zapatos-deportivos-modernos.jpg?s=612x612&w=0&k=20&c=_jwbqFu1271Ukl7HbReWbKCG63KbS8tMWo-_c6_Flfs="
            RunningShoes="Running Shoes"
            description="Nike Air is our icomic innovation that uses pressurized air"
            price= {accounting.formatMoney(10)}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product
            title=" MacBoock"
            subheader="in Stock"
            image="https://ar-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/1/612G5LA-1_T1680711935.png"
            RunningShoes="Apple"
            description="La MacBook Pro de 14 pulgadas posee la espectacular pantalla Liquid Retina XDR con resolución nativa de 3024 x 1964 píxeles, y 50Hz a 60Hz de actualización en el cuál las imágenes adquieren un gran nivel de detalle y realismo y los textos se ven increíblemente nítidos y definidos."
         price= {accounting.formatMoney(60)}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product
            title=" MacBoock"
            subheader="in Stock"
            image="https://ar-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/1/612G5LA-1_T1680711935.png"
            RunningShoes="Apple"
            description="La MacBook Pro de 14 pulgadas posee la espectacular pantalla Liquid Retina XDR con resolución nativa de 3024 x 1964 píxeles, y 50Hz a 60Hz de actualización en el cuál las imágenes adquieren un gran nivel de detalle y realismo y los textos se ven increíblemente nítidos y definidos."
            price= {accounting.formatMoney(160)}
          />
        </Grid>

      
      </Grid>
    </Box>
  );
}
