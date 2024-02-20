import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        const d = doc(db, "items", itemId);

        getDoc(d)
            .then(snapshot => {
                if (snapshot.exists()) {
                    setProduct({ id: snapshot.id, ...snapshot.data() });
                } else {
                    console.error("Document not found");
                }
            })
            .catch(error => {
                console.error(error);
            });
    }, [itemId]);

    return (
        <div className="container my-4 px-4" style={{ maxWidth: '480px' }}>
            <ItemDetail {...product} />
        </div>
    );
};

export default ItemDetailContainer;
