import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useAppContext } from "../store/store";

function View(){

  const [item, setItem] = useState(null);
  const params = useParams();
  const store = useAppContext();

  useEffect(() =>{
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);

  const itemStyles ={
    container: {
      display: 'flex',
      gap: '20px',
      // color: 'white',
      width: '800px',
      margin: '0 auto',
    },
  };

  if (!item) {
    return <Layout>Item not found</Layout>;
  }

  return (
    <Layout>
      <div style={itemStyles.container}>
        <div>
          <div>{item?.cover? <img src={item.cover} width='400' /> : ''}</div>
        </div>
        <div>
          <h2>Title: {item?.title}</h2>
          <div>Author: {item?.author}</div>
          <div>Introduction: {item?.intro}</div>
          <div>Status: {item?.completed ? 'Leído' : 'Por terminar'}</div>
          <div>Review: {item?.review}</div>
        </div>
      </div>
    </Layout>
  );
}

export default View;