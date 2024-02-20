import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const Checkout = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [orderId, setOrderId] = useState('');
    const { cart, clearCart, SumaTotalProductos } = useContext(CartContext);

    const generarOrden = () => {
        if (!nombre || !email || !telefono) {
            return;
        }

        const buyer = { name: nombre, email: email, phone: telefono };
        const items = cart.map(item => ({ id: item.id, name: item.name, price: item.price, quantity: item.quantity }));
        const date = new Date();
        const total = SumaTotalProductos();
        const order = {
            buyer: buyer,
            items: items,
            date: date,
            total: total
        };


        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
            .then((resultado) => {
                clearCart();  
                setOrderId(resultado.id);
            })
            .catch((error) => {
                console.error("Error al crear la orden: ", error);
            });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>Checkout</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre del cliente</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email del cliente</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono de contacto</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-success" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-6 text-center">
                    <table className="table">
                        <tbody>
                            {cart.map(product =>
                                <tr key={product.id}>
                                    <td className="text-start align-middle">{product.name}</td>
                                    <td className="text-start align-middle">${product.price}</td>
                                    <td className="text-start align-middle">{product.quantity}</td>
                                    <td className="text-start align-middle">${product.quantity * product.price}</td>
                                </tr>
                            )}
                            <tr>
                                <td className="text-center align-middle" colSpan={4}>&nbsp;</td>
                                <td className="text-center bg-success text-white">total: ${SumaTotalProductos()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-warning p-5 text-center" role="alert">
                        <p className="display-1">🎮</p>
                        <h1>Gracias por comprar en Drop!</h1>
                        <p>Tu ID de Compra es: <b>{orderId}</b></p>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;