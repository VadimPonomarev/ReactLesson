export default function Footer(){
    const footerStyle = {
        padding: "20px",
        backgroundColor: "#464046",
        color: "#A2A1A9"
    }

    const footerInfo = {
        style: footerStyle,
        text: "Информация, размещаемая по центру подвала"
    }

    return(
        <footer style={footerInfo.style}>
            {footerInfo.text}
        </footer>
    )
}