import { Link } from "@mui/material";
import React from "react";

export default function URLLink({ title, url, fontSize, color }){
    return (
        <Link
            href={url}
            underline="hover"
            style={{ fontSize: fontSize, color: color, textAlign :'left'}}
        >
            {title}
        </Link>
    );
};