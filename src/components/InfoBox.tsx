import React from "react";

type HintProps = {
    mode: "hint";
    children: React.ReactNode;
}

type WarningBoxProps = {
    mode: "warning";
    severity: "low" | "medium" | "high";
    children: React.ReactNode;
}

type InfoBoxProps = HintProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
    const {mode, children} = props;
    if(mode === "hint"){
      return <aside className='infobox infobox-hint'>
          <p>{children}</p>
      </aside>;
    }
    else{
        const {severity} = props;
        return <aside className={`infobox infobox-warning warning--${severity}`}>
            <p>{children}</p>
        </aside>;
    }
}