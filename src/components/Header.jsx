import PropTypes  from "prop-types";

function Header({text,bgColr,txtColr}) {
    const headerStyles = {
        backgroundColor : bgColr,
        color: txtColr
    }
  return (
    <header style={headerStyles}>
        <div className="container">
            <h1>{text}</h1>
        </div>
    </header>
  );
}

Header.defaultProps = {
   text: "Default Prop: APP name",
   bgColr: 'rgba(0,0,0,0.4)',
   txtColr: '#ff6a95'
}

Header.propTypes ={
    text: PropTypes.string,
    bgColr: PropTypes.string,
    txtColr: PropTypes.string
}

export default Header;