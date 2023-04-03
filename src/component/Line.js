import { Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

// Divider 컴포넌트 스타일 설정
const StyledDivider = styled(Divider)(({ theme, color }) => ({
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: color || theme.palette.divider,
  }));
  
  const CustomLine = ({ type, color }) => {
    return <StyledDivider variant={type || "fullWidth"} color={color} />;
  };
  
  export default CustomLine;