import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Link,
  Chip,
} from "@mui/material";
import AttachmentIcon from "@mui/icons-material/Attachment";

const ProductDetails = ({ article }) => {
  const featureEntries = Object.entries(article.features);
  return (
    <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1 }}>
      <Typography
        variant="subtitle2"
        color="primary"
        fontWeight={600}
        gutterBottom
      >
        DETAILS
      </Typography>
      <Divider sx={{ mb: 1 }} />

      <Typography variant="body2" fontWeight={500}>
        Features
      </Typography>
      <List dense>
        {featureEntries.map(([key, value], index) => (
          <ListItem sx={{ pl: 1 }} key={index}>
            <ListItemText
              primary={
                <>
                  <strong>{key}:</strong>
                  {value}
                </>
              }
            />
          </ListItem>
        ))}
      </List>

      <Typography variant="body2" fontWeight={500}>
        Attachments
      </Typography>
      <List dense>
        {article.attachments.map((item, index) => {
          return (
            <ListItem sx={{ pl: 1 }} key={index}>
              <AttachmentIcon sx={{ fontSize: 16, mr: 1 }} />
              <Link href={item.file_link} underline="hover">
                {item.file_label}
              </Link>
            </ListItem>
          );
        })}
      </List>

      <Typography variant="body2" fontWeight={500}>
        Keywords
      </Typography>
      <Box sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 1 }}>
        {article.keywords.map((tag) => (
          <Chip key={tag} label={tag} size="small" />
        ))}
      </Box>
    </Box>
  );
};

export default ProductDetails;
