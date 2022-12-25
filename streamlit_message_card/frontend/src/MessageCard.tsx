import React, { useEffect, useState } from "react";
import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib";

import {
  MessageCard,
  BUTTON_KIND,
  IMAGE_LAYOUT
} from "baseui/message-card";


const MessageComponent = (props: ComponentProps) => {

    const {heading, paragraph, buttonLabel,image} = props.args;

    useEffect(() => Streamlit.setFrameHeight());


    return (
      <MessageCard
        heading={heading}
        buttonLabel={buttonLabel}
        onClick={() => Streamlit.setComponentValue(true)}
        buttonKind={BUTTON_KIND.secondary}
        paragraph={paragraph}
        image={{
          ariaLabel:"",
          src:image
        }}
      />
    );
    }


export default withStreamlitConnection(MessageComponent);
