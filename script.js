// ========================================
// DATA PRODUK
// ========================================

const products = [
    {
        name: "Hoodie Oversize Premium",
        price: 129000,
        category: "Fashion",
        image: "https://via.placeholder.com/300",
        link: "#"
    },

    {
        name: "Keyboard Mechanical RGB",
        price: 249000,
        category: "Gaming",
        image: "https://via.placeholder.com/300",
        link: "#"
    },

    {
        name: "Headset Gaming",
        price: 179000,
        category: "Gaming",
        image: "https://via.placeholder.com/300",
        link: "#"
    },

    {
        name: "TWS Bluetooth",
        price: 99000,
        category: "Elektronik",
        image: "https://via.placeholder.com/300",
        link: "#"
    },

    {
        name: "Jam Tangan Casual",
        price: 85000,
        category: "Aksesoris",
        image: "https://via.placeholder.com/300",
        link: "#"
    },

    {
        name: "Tas Selempang Streetwear",
        price: 75000,
        category: "Fashion",
        image: "https://via.placeholder.com/300",
        link: "#"
    }
];


// ========================================
// ELEMENT HTML
// ========================================

const productContainer = document.querySelector(".product-container");

const searchInput = document.querySelector("#searchInput");

const categoryButtons = document.querySelectorAll(
    ".category-list button"
);


// ========================================
// MENAMPILKAN PRODUK
// ========================================

function displayProducts(productList) {

    productContainer.innerHTML = "";

    if (productList.length === 0) {

        productContainer.innerHTML = `
            <p>Tidak ada produk yang ditemukan.</p>
        `;

        return;
    }


    productList.forEach(product => {

        const card = document.createElement("div");

        card.classList.add("product-card");


        card.innerHTML = `

            <img 
                src="${product.image}" 
                alt="${product.name}"
            >

            <h3>
                ${product.name}
            </h3>

            <p class="price">
                Rp${product.price.toLocaleString("id-ID")}
            </p>

            <p>
                Produk pilihan yang menarik
                dan cocok untuk kebutuhanmu.
            </p>

            <a 
                href="${product.link}" 
                target="_blank"
            >
                <button>
                    Beli Sekarang
                </button>
            </a>

        `;


        productContainer.appendChild(card);

    });

}


// ========================================
// PENCARIAN PRODUK
// ========================================

searchInput.addEventListener("input", function () {

    const keyword = searchInput.value.toLowerCase();


    const filteredProducts = products.filter(product => {

        return product.name
            .toLowerCase()
            .includes(keyword);

    });


    displayProducts(filteredProducts);

});


// ========================================
// FILTER KATEGORI
// ========================================

categoryButtons.forEach(button => {

    button.addEventListener("click", function () {

        const category = button.textContent;


        if (category === "Lainnya") {

            displayProducts(products);

            return;
        }


        const filteredProducts = products.filter(product => {

            return product.category === category;

        });


        displayProducts(filteredProducts);

    });

});

// ========================================
// TOMBOL LIHAT PRODUK
// ========================================

const lihatProduk = document.querySelector("#lihatProduk");

lihatProduk.addEventListener("click", function () {

    document.querySelector("#produk").scrollIntoView({
        behavior: "smooth"
    });

});

// ========================================
// TAMPILKAN PRODUK SAAT WEBSITE DIBUKA
// ========================================

displayProducts(products);
