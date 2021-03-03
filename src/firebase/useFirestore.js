import { useState } from 'react';
import { getFirestore, firebase } from './'

export const useFirestore = () => {
    const [items, setItems] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [item, setItem] = useState();

    
    const db = getFirestore();
    
    const getAll = async () => {
      try {
        const productsCollection = db.collection("productos").get();
        const querySnapshot = await productsCollection;
        const products = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        }));
        setItems(products);
        setFetching(false);
      } catch (error) {
          console.log(error);
      }
    }

    const getOne = async id => {
      try {
        const itemQuery = db.collection('productos').where(firebase.firestore.FieldPath.documentId(), "==", id)
        const querySnapshot = await itemQuery.get();
        const item = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        }))[0];
        
        setItem(item ? item : null)
        setFetching(false)
      } catch (error) {
        console.log(error)
      }
    }

    const createOrder = async (items, total, buyer) => {
        const ordersCollection = db.collection('pedidos');
        
        const cart = items.map(item => ({
          id: item.id,
          amount: item.amount
        }))

        const { mail, name, tel } = buyer 

        const order = {
          comprador: {
            mail,
            name,
            tel
          },
          date: firebase.firestore.FieldValue.serverTimestamp(),
          productos: cart,
          total: total
        }

        try {
          const { id } = await ordersCollection.add(order);
          return {
            id,
            name
          }
        } catch (error) {
          console.log("Error while adding a new order", error)
        }
    }

    return {
      getAll,
      getOne,
      createOrder,
      items,
      fetching,
      item,
    }
    
}