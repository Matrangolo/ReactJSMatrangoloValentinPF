import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const q = categoryId 
            ? query(collection(db, "items"), where("category", "==", categoryId))
            : collection(db, "items");

        getDocs(q)
            .then(snapshot => {
                const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(items);
            })
            .catch(error => {
                console.error(error);
            });
    }, [categoryId]);

    return (
        <div>
            <h1 className='text-center'>{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
