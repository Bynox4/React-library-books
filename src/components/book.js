import { Link } from "react-router-dom";

function Book({ item }){

  const bookContainerStyle ={
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  }

  const bookInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    color: 'black',
    textDecoration: 'none',
    fontWeight: '700',
  }

    return (
  <div style={bookContainerStyle}>
    <Link to={`/view/${item.id}`} style={bookInfoStyle}>
      <img src={item.cover} width='200' alt={item.tile}/>
      <div>{item.title}</div>
    </Link>
  </div>
)
}

export default Book;