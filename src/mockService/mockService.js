
/*---------------------------BACK-END--------------------- */
const itemsDB = [
    {
        id:1,
        title:"Placa de video TUF RTX™ 3070",
        price:196000,
        stock:94,
        detail:"aqui van los detalles del producto",
        category:"Placas de video",
        thumbnail:"https://dreamy-fox-b84773.netlify.app/assets/image/gpu1.png"
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
        thumbnail:"https://dreamy-fox-b84773.netlify.app/assets/image/gpu4.png"
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
export default function getItemsFromAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (itemsDB);
    },500);
    });
}

export function getSingleItemFromAPI(idParams) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let itemRequested = itemsDB.find((item) => item.id === Number (idParams));
            if (itemRequested) {
                resolve (itemRequested);
            }
            else {
                reject(new Error("El item no existe"));
            }
    },500);
    });
}

export function getItemsFromAPIByCategory(categoryid) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let itemRequested = itemsDB.filter(
                (item) => item.category === categoryid);
            resolve (itemRequested);
    },500);
    });
}

/*---------------------------FRONT-END--------------------- */

// console.log("1. App Iniciada.");
// async function leerApi() {
//     let respuesta = await APICall ();
//     console.log(respuesta);
// }

// leerApi();

// console.log("3. App Finalizada.");