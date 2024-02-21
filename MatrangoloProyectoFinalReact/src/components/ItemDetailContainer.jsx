import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const q = query(collection(db, "items"), where("id", "==", Number(itemId)));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const docSnap = querySnapshot.docs[0]; 
                    setProduct({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log("Documento no encontrado!");
                }
            } catch (error) {
                console.error("Error encontrando documento:", error);
            }
            setLoading(false);
        };

        getProduct();
    }, [itemId]);

    if (loading) {
        return <div>Cargando detalles del producto🎮🕹️</div>;
    }

    return (
        <div>
            {product ? <ItemDetail item={product} /> : <div>Producto no encontrado👾</div>}
        </div>
    );
};

export default ItemDetailContainer;
