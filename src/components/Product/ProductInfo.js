import { Box, Typography, Button, TextField, Rating } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Discount from "../../../resources/icons/discount.svg";

const ProductInfo = ({ article }) => {
  return (
    <>
      <Typography variant="h6" fontWeight={600}>
        {article.title}
      </Typography>

      <Typography variant="body2" sx={{ mt: 1 }}>
        by{" "}
        <Box component="span" sx={{ color: "primary.main" }}>
          {article.supplier_name}
        </Box>
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
        <Rating value={Math.floor(article.stars)} readOnly />
        <Typography variant="body2" sx={{ ml: 1 }}>
          ({Math.floor(article.stars)} stars)
        </Typography>
      </Box>

      <Typography variant="h6" sx={{ mt: 2 }}>
        {article.price} {article.currency}
        <Typography
          variant="body2"
          component="span"
          sx={{ ml: 1, color: "#888" }}
        >
          + {article.transport_costs} {article.currency} shipping{" "}
          <img src={Discount} alt="Discount" width={20} />
        </Typography>
      </Typography>

      <Typography
        variant="caption"
        sx={{ color: "#666", display: "block", mt: 1 }}
      >
        all prices incl. {article.vat_percent} % taxes
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
        <TextField
          variant="outlined"
          size="small"
          type="number"
          defaultValue={article.minimum_order_quantity}
          sx={{ width: 80, mr: 2 }}
        />
        <Typography sx={{ mr: 2 }}>{article.unit}</Typography>
        <Button variant="contained" color="error" startIcon={<AddIcon />}>
          Add to cart
        </Button>
      </Box>
    </>
  );
};

export default ProductInfo;
