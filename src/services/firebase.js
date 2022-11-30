

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs,doc, getDoc, query, where, addDoc,writeBatch, documentId } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCfMwAVYp4f10-Jzrs7fQ8ZsxgkQYkrzMQ",
  authDomain: "react-eros-minali.firebaseapp.com",
  projectId: "react-eros-minali",
  storageBucket: "react-eros-minali.appspot.com",
  messagingSenderId: "662802473699",
  appId: "1:662802473699:web:ac267755868bb90bd61bd6"
};

const FirebaseApp = initializeApp(firebaseConfig);
const DB = getFirestore(FirebaseApp);

export function testDatabase() {
console.log(FirebaseApp);
    
}

export async function getSingleItemFromAPI(id) { 

const docRef = doc(DB, "products", id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  return {
    ...docSnap.data(),
    id: docSnap.id,
  }
  
} else {
  console.error("El producto no existe");
  
}
}

export async function getItemsFromAPI() {
  try {
    //1. Necesito conectarme a la coleccion de productos
    const collectionProducts = collection (DB, "products");
    //2. Necesito traer todos los documentos existentes
    let respuesta = await getDocs(collectionProducts);
    //3. Extraemos la data de nuestros productos y la mapeamos con "map"

    const products = respuesta.docs.map (docu => {
      return {
        ...docu.data(),
        id: docu.id
      }
    })

    //4. Retornamos el listado de productos mapeados
    return(products)
  }
  catch(error){
    console.error(error);
  }
}

export async function getItemsFromAPIByCategory(categoryId) {
  const productsRef = collection(DB, "products");
  const myQuery = query(productsRef, where("category", "==", categoryId))

  const productsSnap = await getDocs(myQuery);
  const products = productsSnap.docs.map (docu => {
    return {
      ...docu.data(),
      id: docu.id
    }
  })

  return products;

}

export async function createBuyOrderFirestore(buyOrderData) {
  const collectionRef = collection(DB, "buyorders")
  const docRef = await addDoc(collectionRef, buyOrderData)
  
  return (docRef.id);
}

export async function createBuyOrderFirestoreWithStock(buyOrderData) {
  const collectionProductsRef = collection(DB, "products")
  const collectionOrdersRef = collection(DB, "buyorders")
  const batch = writeBatch(DB)

  let arrayIds = buyOrderData.items.map((item) => {
    return item.id;
  });

  const q = query (collectionProductsRef, where(documentId(),'in', arrayIds ))

  let productsSnapshot = await getDocs(q)
  productsSnapshot.docs.forEach((doc) => {
    let stockActual = doc.data().stock;
    let itemInCart = buyOrderData.items.find((item) => item.id === doc.id)
    let stockActualizado = stockActual - itemInCart.count;
    
    batch.update (doc.ref, {stock: stockActualizado})
  })

  let docOrderRef = doc(collectionOrdersRef);
  batch.set(docOrderRef, buyOrderData);
  batch.commit();
  return docOrderRef.id

}

 async function exportItemsToFirestore() {
  const items = [
    {
        id:1,
        title:"Placa de video TUF RTX™ 3070",
        price:196000,
        stock:94,
        detail:"aqui van los detalles del producto",
        category:"Placas de video",
        thumbnail:"https://dreamy-fox-b84773.netlify.app/assets/image/gpu1.png",
        discount: 40
    },
    {
        id:2,
        title:"Placa de video AORUS RX 6900 XT",
        price:356000,
        stock:34,
        detail:"aqui van los detalles del producto",
        category:"Placas de video",
        thumbnail:"https://dreamy-fox-b84773.netlify.app/assets/image/gpu2.png"
        
    },
    {
        id:3,
        title:"Placa de video ZOTAC GTX 1660 SUPER",
        price:100000,
        stock:36,
        detail:"aqui van los detalles del producto",
        category:"Placas de video",
        thumbnail:"https://dreamy-fox-b84773.netlify.app/assets/image/gpu3.png"
    },
    {
        id:4,
        title:"Placa de video ASUS RTX 3060",
        price:134000,
        stock:40,
        detail:"aqui van los detalles del producto",
        category:"Placas de video",
        thumbnail:"https://dreamy-fox-b84773.netlify.app/assets/image/gpu4.png",
        discount: 10
    },
    {
        id:5,
        title:"Placa de video TUF RTX™ 3080",
        price:281000,
        stock:50,
        detail:"aqui van los detalles del producto",
        category:"Placas de video",
        thumbnail:"https://dreamy-fox-b84773.netlify.app/assets/image/gpu5.png"
    },
    {
        id:6,
        title:"Placa de video PALIT GTX 1660 TI",
        price:87000,
        stock:60,
        detail:"aqui van los detalles del producto",
        category:"Placas de video",
        thumbnail:"https://dreamy-fox-b84773.netlify.app/assets/image/gpu6.png"
    },
    {
        id:7,
        title:"Procesador Ryzen 5 3600",
        price:30000,
        stock:34,
        detail:"aqui van los detalles del producto",
        category:"Procesadores",
        thumbnail:"https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-569-V10.jpg"
    },
    {
        id:8,
        title:"Procesador Intel Core I5-10400f",
        price:28000,
        stock:36,
        detail:"aqui van los detalles del producto",
        category:"Procesadores",
        thumbnail:"https://www.venex.com.ar/products_images/1617202625_1019-producto-i5i5-system-linq-enumerabletakeiteratord-251system-char.png"
    },
    {
        id:9,
        title:"Procesador Intel Core I9-9900k",
        price:90000,
        stock:40,
        detail:"aqui van los detalles del producto",
        category:"Procesadores",
        thumbnail:"https://www.megatecnologia.com.ar/images/161-PROCESADOR-INTEL-CORE-I9-9900K1597364711673.jpg"
    },
    {
        id:10,
        title:"Procesador Ryzen 9 5900x",
        price:100000,
        stock:50,
        detail:"aqui van los detalles del producto",
        category:"Procesadores",
        thumbnail:"https://app.contabilium.com/files/explorer/16277/Productos-Servicios/concepto-6252949.jpg"
    },
    {
        id:11,
        title:"Procesador AMD Ryzen 7 7700X",
        price:100000,
        stock:60,
        detail:"aqui van los detalles del producto",
        category:"Procesadores",
        thumbnail:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34351_Procesador_AMD_Ryzen_7_7700X_5.4GHz_Turbo_AM5_-_No_incluye_Cooler_-_C_VIDEO_5758d4d2-grn.jpg"
    },
    {
        id:12,
        title:"Procesador Intel Core i7 12700F",
        price:81000,
        stock:60,
        detail:"aqui van los detalles del producto",
        category:"Procesadores",
        thumbnail:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_29694_Procesador_Intel_Core_i7_12700F_4.9GHz_Turbo_Socket_1700_6fed9cfe-grn.jpg"
    }
    
    
    ];
  const collectionRef = collection (DB, "products")

  for (let item  of items) {
    const docRef = await addDoc(collectionRef, item);
    console.log("Document created with ID", docRef.id);
  }
}