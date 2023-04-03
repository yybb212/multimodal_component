import React from "react";

export default function HtmlList({ type="ul", data=[]}) {

    const rendering = () => {
        switch(type){
            case "ul" :
                return (
                    <ul>
                        {data.map((item, index)=> (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                );
            case "ol" :
                return (
                    <ol>
                        {data.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>
                );
            case "dl" :
                return (
                    <dl>
                    {data.map((item, index) => (
                    <React.Fragment key={index}>
                        <dt>{item.term}</dt>
                        <dd>{item.description}</dd>
                    </React.Fragment>
                    ))}
                </dl>
                );
            default :
                return (
                    <div>지원하지 않는 리스트 타입입니다.</div>
                );
        }
    }

    return (
        <div style={{ textAlign: 'left'}}>
            {rendering()}
        </div>
    )
}