import { Box, IconButton } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import ZoomIn from "../../../resources/icons/zoom-in.svg";

const ProductImgGallery = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mr: 2,
        }}
      >
        {[1, 2].map((item) => (
          <Box
            key={item}
            sx={{
              border: "1px solid #eee",
              width: 60,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#fafafa",
            }}
          >
            <ImageIcon sx={{ color: "#ddd" }} />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          flex: 1,
          border: "1px solid #eee",
          height: 250,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <ImageIcon sx={{ fontSize: 80, color: "#ddd" }} />
        <IconButton
          sx={{
            position: "absolute",
            bottom: 8,
            right: 8,
            color: "#aaa",
          }}
        >
          <img src={ZoomIn} alt="ZoomIn" width={25} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductImgGallery;
