import streamlit as st

from streamlit_message_card import st_message_card


example_image =    "https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"

v = st_message_card("Heading", "Paragraph",key="card1", image= example_image)

st.write(v)

