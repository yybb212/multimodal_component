import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import MoveIcon from '@mui/icons-material/MoveToInbox';
import CallEndIcon from '@mui/icons-material/CallEnd';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkIcon from '@mui/icons-material/Link';

const StyledButton = styled(Button)(({ theme, size, color, width, height }) => ({
  padding: theme.spacing(1, 2),
  fontSize: size === 'small' ? 14 : size === 'medium' ? 16 : 18,
  color: theme.palette[color].contrastText,
  backgroundColor: theme.palette[color].main,
  '&:hover': {
    backgroundColor: theme.palette[color].dark,
  },
  width: width || 'auto',
  height: height || 'auto'
}));

const CustomButton = ({ type, size, color, onClick, iconName, img, alt, text, iconLocation, width, height, callback }) => {
  const handleClick = () => {
    switch (type) {
      case 'Submit':
        // 대화 엔진 시나리오 진행 API 수행
        callback();
        break;
      case 'Close':
        // 대화 엔진 시나리오 거절? API 수행
        callback();
        break;
      case 'Move':
        // 다음 노드로 연결 
        callback();
        break;
      case 'CallEnd':
        // 통화 종료 API 수행
        callback();
        break;
      case 'Phone':
        // 상담사 연결 API 수행
        callback();
        break;
      case 'Link':
        // URL Link API 수행
        callback();
        break;
      default:
        console.log("Unavailable Button Type!");
        break;
    }
  }

  let icon;
  switch (iconName) {
    case 'Submit':
      icon = <SendIcon />;
      break;
    case 'Close':
      icon = <CloseIcon />;
      break;
    case 'Move':
      icon = <MoveIcon />;
      break;
    case 'CallEnd':
      icon = <CallEndIcon />;
      break;
    case 'Phone':
      icon = <PhoneIcon />;
      break;
    case 'Link':
      icon = <LinkIcon />;
      break;
    default:
      icon = null;
  }

  const renderContent = () => {

    if(img){ // Img 전달 시
       return (
        <img src={img} alt={alt} style={{width:width, height:height}}/>
       );
    } else {
      switch(iconLocation) {
        case 'LEFT':
          return(
            <>
            {icon}
            {text}
            </>
          );
        case 'RIGHT':
          return(
            <>
            {text}
            {icon}
            </>
          );
        default:
          return;
      }
    }
  }

  return (
    <StyledButton size={size} color={color} onClick={handleClick} width={width} height={height}>
      {icon && text ? <span>&nbsp;&nbsp;</span> : null}
      {renderContent()}
    </StyledButton>
  );
};

export default CustomButton;
