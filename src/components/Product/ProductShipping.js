import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const ProductShipping = ({ article }) => {
  const priceEntries = Object.entries(article.price_breaks);
  return (
    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
      <Typography
        variant="subtitle2"
        color="primary"
        fontWeight={600}
        gutterBottom
      >
        PRICING & SHIPPING
      </Typography>
      <Divider sx={{ mb: 1 }} />
      <List dense>
        <ListItem sx={{ pl: 1 }}>
          <ListItemText
            primary={`Minimum order: ${article.minimum_order_quantity} ${article.unit}`}
          />
        </ListItem>
        <ListItem sx={{ pl: 1 }}>
          <ListItemText
            primary={`Shipping: ${article.transport_costs} ${article.currency}`}
          />
        </ListItem>
        <ListItem sx={{ pl: 1 }}>
          <ListItemText primary={`Delivery: ${article.delivery_time} days`} />
        </ListItem>
      </List>

      {/* Price Breaks */}
      <Typography variant="body2" fontWeight={500} sx={{ mt: 2 }}>
        Price breaks
      </Typography>
      <List dense>
        {priceEntries.map(([key, value], index) => (
          <ListItem
            sx={{
              pl: 1,
              borderTop: "1px solid #eee",
              borderBottom:
                index === priceEntries.length - 1 ? "1px solid #eee" : "none",
            }}
            key={index}
          >
            <ListItemText
              primary={`ex ${key} PCE — ${Math.floor(value)} EUR/PCE`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProductShipping;
