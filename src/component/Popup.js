import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material";
import React, {useEffect, useState} from "react";
import { makeStyles } from '@mui/styles';


const TransitionUp = React.forwardRef(function Transitioin(props, ref){
    return <Slide direction="up" ref={ref} {...props} />;
});
const TransitionDown = React.forwardRef(function Transitioin(props, ref){
    return <Slide direction="down" ref={ref} {...props} />;
});
const TransitionLeft = React.forwardRef(function Transitioin(props, ref){
    return <Slide direction="left" ref={ref} {...props} />;
});
const TransitionRight = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});

const Popup = ({ title, isHtml = null }) => {
    //PopUp을 제어하기 위한상태 open:true 면 팝업 표출, Open:false면 팝업 닫기
    const [open,setOpen] = useState(false);
    
    //Html 임베딩 여부
    const [html, setHtml] = useState(null);

    const handleClose = () =>{
        setOpen(false);
    };

    const handleOpen = () =>{
        setOpen(true);
    };

    useEffect( ()=>{
        async function fetchHtml(){
            if(isHtml===null){
                console.log("NO HTML");
                setHtml(null);
            } else {
                try {
                    const response = await fetch(isHtml);
                    const htmlText = await response.text();
                    setHtml(htmlText);
                } catch(e) {
                    console.log("Unavailable HTML");
                    setHtml(null);
                }
            }
        }
        fetchHtml();
    },[])

    const rendering = () => {
        if(html !== null) {
            return (
              <div dangerouslySetInnerHTML={{ __html: html}} />
            );
        } else {
            return (
                <>
                    <p>THIS IS NOT HTML</p>
                </ >
            );
        }
    }

    return (
        <>
            <Button variant="contained" onClick={handleOpen} disabled={open}>POPUP</Button>
            <Dialog open={open}
                TransitionComponent={TransitionRight}
                onClose={handleClose}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {rendering()}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    );

};

export default Popup;