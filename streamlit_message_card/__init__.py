import streamlit.components.v1 as components

_component_func = components.declare_component(
    "message_card",
    url="http://localhost:3001",
)

def st_message_card(heading: str, paragraph: str,  buttonLabel: str = "Click Me!", image: str = None, key = None):


    component_value = _component_func(heading=heading,default=False,paragraph=paragraph,buttonLabel=buttonLabel,image=image,key=key)

    return component_value


