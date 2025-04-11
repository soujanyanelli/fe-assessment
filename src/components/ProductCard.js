import { Box, Typography, Grid, Container } from "@mui/material";
import ProductInfo from "./Product/ProductInfo";
import ProductDetails from "./Product/ProductDetails";
import ProductShipping from "./Product/ProductShipping";
import ProductImgGallery from "./Product/ProductImgGallery";

const ProductCard = ({ article }) => {
  return (
    <>
      <Container >
        <Box sx={{ py: 4 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
              <ProductImgGallery/>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <ProductInfo article={article} />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container maxWidth={false} sx={{ backgroundColor: "#f7f7f7", py: 4 }}>
        <Container>
          <Box>
            <Typography
              color="primary"
              fontWeight={600}
              gutterBottom
            >
              DESCRIPTION
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {article.description_long}
            </Typography>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <ProductDetails article={article} />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <ProductShipping article={article} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default ProductCard;