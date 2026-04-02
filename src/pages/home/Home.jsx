
// object data show in the UI, you can use the map() method to iterate over the array and render a component for each item. Here's an example of how you can do this in a React component:

// export default function Home() {
//   const data = [
//     {
//       title: "Card One",
//       img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
//     },
//     {
//       title: "Card Two",
//       img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
//     },
//     {
//       title: "Card Three",
//       img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
//     },
//     {
//       title: "Card Four",
//       img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
//     },
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen flex justify-center items-start p-10">
      
//       {/* container */}
//       <div className="flex gap-6 items-start">
//         {data.map((item, i) => (
//           <ChildComponent key={i} title={item.title} img={item.img} />
//         ))}
//       </div>

//     </div>
//   );
// }

// function ChildComponent({ title, img }) {
//   return (
//     <div className="w-[250px] bg-white rounded-xl shadow-md overflow-hidden h-fit">
      
//       {/* image */}
//       <img
//         src={img}
//         className="w-full h-[150px] object-cover"
//         alt=""
//       />

//       {/* content */}
//       <div className="p-4 flex flex-col gap-2">
//         <h2 className="text-pink-600 text-lg font-semibold">
//           {title}
//         </h2>

//         <p className="text-gray-600 text-sm leading-relaxed">
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur recusandae tenetur eveniet distinctio voluptate nam molestias modi quasi nemo? Facilis.
//         </p>
//       </div>
//     </div>
//   );
// }


// const newsArticles = [
//   {
//     id: 1,
//     category: "Politics",
//     title: "lorem dahjsvdfhafh fah jfhafhsavfh",
//     author: "Aisha Grant",
//     date: "Dec, 12 2024",
//   },
//   {
//     id: 2,
//     category: "Technology",
//     title: "afjhafhjajfa...",
//     author: "Brandon Siphron",
//     date: "Dec, 12 2024",
//   },
//   {
//     id: 3,
//     category: "Business",
//     title: "jadgha hddgahdghsad  dahjfvhafashf",
//     author: "Antonio Botosh",
//     date: "Dec, 11 2024",
//   },
//   {
//     id: 4,
//     category: "Business",
//     title: "hfashfhaf ah",
//     author: "",
//     date: "",
//     image: "https://via.placeholder.com/120x100",
//   },
// ];

// export default newsArticles;


// const news = [
//   {
//     "source": {
//       "id": null,
//       "name": "Eldiario.es"
//     },
//     "author": "Blake Montgomery",
//     "title": "OpenAI cierra su masiva ronda de financiación en 122.000 millones, 10.000 más de lo anunciado",
//     "description": "La compañía logra la mayor inyección de capital privado de la historia y se convierte en una de las no cotizadas más valiosas en medio del boom de la inteligencia artificial\r\nEl miedo a quedarse atrás dispara la IA sin control en las empresas: “Se usa sin com…",
//     "url": "https://www.eldiario.es/tecnologia/openai-cierra-masiva-ronda-financiacion-122-000-millones-10-000-anunciado_1_13113959.html",
//     "urlToImage": "https://static.eldiario.es/clip/2b21f7f2-fde1-47ee-a8ef-230c8670c832_facebook-watermarked-aspect-ratio_default_0.jpg",
//     "publishedAt": "2026-04-01T09:29:01Z",
//     "content": "OpenAI ha anunciado en la madrugada de este martes el cierre de una ronda de financiación de 122.000 millones de dólares (unos 105.000 millones de euros), alcanzando una valoración de 852.000 millone… [+4171 chars]"
//   },
//   {
//     "source": {
//       "id": null,
//       "name": "Vz.ru"
//     },
//     "author": "Деловая газета Взгляд",
//     "title": "Посольство России осудило США и Израиль за удар по собору в Тегеране",
//     "description": "В результате утренних ракетных обстрелов в Тегеране повреждены здания Свято-Николаевского собора и Русского старческого дома, где проживают пожилые люди, сообщило посольство России в Тегеране и осудило США и Израиль за удары. По Тегерану утром 1 апреля были н…",
//     "url": "https://vz.ru/news/2026/4/1/1407116.html#text",
//     "urlToImage": "https://img.vz.ru/upimg/soc/soc_1407116.png",
//     "publishedAt": "2026-04-01T09:28:53Z",
//     "content": "« 20.00 (19.30 ) , 1 , », , , «».\r\n , , Sisco, HP, Intel, Oracle, Microsoft, Apple, Google, Meta ( ), IBM, DEL, Plantier, Nvidia, JP Morgan, Tesla, GE, Spire Solution, G42 Boeing, « » « » .\r\n - , .\r\n… [+4 chars]"
//   },
//   {
//     "source": {
//       "id": null,
//       "name": "Catracalivre.com.br"
//     },
//     "author": "Joaquim Luppi Fernandes",
//     "title": "A China acaba de ativar um ímã de 35,6 teslas, 700.000 vezes mais potente que o campo magnético da Terra, e a grande questão é o que pretende fazer com esse poder em 2026",
//     "description": "Entenda como o novo imã de 35.6 Tesla da China impacta a inovação tecnológica e o futuro da energia global com uma potência sem precedentes na história.\nO post A China acaba de ativar um ímã de 35,6 teslas, 700.000 vezes mais potente que o campo magnético da …",
//     "url": "https://catracalivre.com.br/noticias/a-china-acaba-de-ativar-um-ima-de-356-teslas-700-000-vezes-mais-potente-que-o-campo-magnetico-da-terra-e-a-grande-questao-e-o-que-pretende-fazer-com-esse-poder-em-2026/",
//     "urlToImage": "https://i.catracalivre.com.br/9682xdLhIERgG6Pq7fnTgwiJYA4=/1200x630/smart/filters:quality(60)/catracalivre.com.br/wp-content/uploads/2026/04/freepik-grande-ima-supercondutor-cilindrico-de-laboratorio-cientifico-com-estrutura-metalica-robusta.jpg",
//     "publishedAt": "2026-04-01T09:28:21Z",
//     "content": "A corrida pela supremacia técnica acaba de ganhar um novo capítulo monumental com a ativação do ímã mais potente do planeta em solo chinês. Essa façanha representa um salto sem precedentes na manipul… [+4339 chars]"
//   },
//   {
//     "source": {
//       "id": null,
//       "name": "Golem.de"
//     },
//     "author": null,
//     "title": "Austin: Nur 4 bis 8 unbeaufsichtigte Robotaxis von Tesla unterwegs",
//     "description": "In Austin fahren Teslas Robotaxis ohne Begleitfahrer jetzt in einem wesentlich größeren Gebiet - viele Fahrzeuge sind es aber nicht. (Tesla, Elektroauto)",
//     "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Faustin-nur-4-bis-8-unbeaufsichtigte-robotaxis-von-tesla-unterwegs-2604-207150.html&referer=https%3A%2F%2Ft.co%2Fa3352dd331",
//     "urlToImage": null,
//     "publishedAt": "2026-04-01T09:27:02Z",
//     "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
//   },
//   {
//     "source": {
//       "id": null,
//       "name": "Nyteknik.se"
//     },
//     "author": "Felix Björklund",
//     "title": "Teslas revansch: Model Y mest sålda bil igen och lyckas runda fackens blockad",
//     "description": "Efter en svag inledning på året fick Tesla ett tydligt lyft i mars. Model Y blev Sveriges mest registrerade bilmodell – samtidigt som elbilarna tog över 40 procent av nybilsmarknaden.",
//     "url": "https://www.nyteknik.se/elbilar/teslas-revansch-model-y-mest-salda-bil-igen-och-lyckas-runda-fackens-blockad/4451155",
//     "urlToImage": "https://image.nyteknik.se/4411463.jpg?imageId=4411463&x=0&y=0&cropw=100&croph=100&panox=0&panoy=0&panow=100&panoh=100&width=1200&height=683",
//     "publishedAt": "2026-04-01T09:25:31Z",
//     "content": "Ny Teknik rapporterar om ny teknik inom energi, elbilsutveckling, övrig fordonsindustri, tech och digitalisering, it och telekom, innovation, miljö, om startupbolag och nya entreprenörer, om industri… [+349 chars]"
//   },
//   {
//     "source": {
//       "id": null,
//       "name": "CNBC"
//     },
//     "author": "Kai Nicol-Schwarz",
//     "title": "Iran threatens Nvidia, Apple and other tech giants with attack",
//     "description": "Iran's Islamic Revolutionary Guard Corps (IRGC) has warned a number of tech companies with Middle East operations they'll be considered \"legitimate targets.\"",
//     "url": "https://www.cnbc.com/2026/04/01/iran-irgc-nvidia-appple-attack-threat.html",
//     "urlToImage": "https://image.cnbcfm.com/api/v1/image/108277692-1773397787085-gettyimages-2265414002-ms__4240.jpeg?v=1775032406&w=1920&h=1080",
//     "publishedAt": "2026-04-01T09:03:21Z",
//     "content": "Iran's Islamic Revolutionary Guard Corps (IRGC) has threatened attacks ona swath of U.S. tech companies with operations in the Middle East, including Nvidia, Apple, Microsoft and Google.\r\nThe IRGC wa… [+1497 chars]"
//   }
// ];
 
// export default function Home() {
//   return (
//     <div className="p-5">
//       {news.map((item, index) => (
//         <div key={index} className="flex gap-3 mb-4 border-b pb-4">
//           {item.urlToImage ? (
//             <img
//               src={item.urlToImage}
//               alt={item.title}
//               className="w-24 h-20 object-cover rounded"
//             />
//           ) : (
//             <div className="w-24 h-20 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">
//               No Image
//             </div>
//           )}

//           <div className="flex-1">
//             <p className="text-xs text-blue-500 font-medium">{item.source.name}</p>
//             <h2 className="text-sm font-semibold leading-snug">{item.title}</h2>
//             <p className="text-xs text-gray-400 mt-1">
//               {item.author && `${item.author} · `}
//               {new Date(item.publishedAt).toLocaleDateString()}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


// responsive design is a crucial aspect of modern web development, ensuring that your website looks and functions well on a variety of devices and screen sizes. In the provided code snippet, we see an example of how to create a responsive layout using Tailwind CSS classes.


// export default function Home() {
//   return (
//     <div>

//       <div className="w-full h-48 max-sm:bg-blue-800 max-lg:bg-red-800">

//       </div>
//     </div>
//   )
// }


const foodData = [
  {
    id: 1,
    title: "The Perfect Sandwich",
    category: "Sandwich",
    image: "https://www.w3schools.com/w3images/sandwich.jpg",
    description: "A real NYC classic sandwich with fresh ingredients.",
    rating: 4.5,
    price: 8.99
  },
  {
    id: 2,
    title: "Juicy Grilled Steak",
    category: "Meat",
    image: "https://www.w3schools.com/w3images/steak.jpg",
    description: "Perfectly grilled steak with rich flavor and tenderness.",
    rating: 4.8,
    price: 18.99
  },
  {
    id: 3,
    title: "Fresh Cherries Bowl",
    category: "Fruits",
    image: "https://www.w3schools.com/w3images/cherries.jpg",
    description: "Sweet and fresh cherries, perfect for a healthy snack.",
    rating: 4.2,
    price: 5.49
  },
  {
    id: 4,
    title: "Wine Vegetable Pasta",
    category: "Pasta",
    image: "https://www.w3schools.com/w3images/wine.jpg",
    description: "Delicious pasta cooked with vegetables and wine sauce.",
    rating: 4.6,
    price: 12.99
  },
  {
    id: 5,
    title: "Colorful Popsicle",
    category: "Dessert",
    image: "https://www.w3schools.com/w3images/popsicle.jpg",
    description: "Refreshing popsicle with fruity flavors.",
    rating: 4.0,
    price: 3.99
  },
  {
    id: 6,
    title: "Grilled Salmon",
    category: "Seafood",
    image: "https://www.w3schools.com/w3images/salmon.jpg",
    description: "Healthy grilled salmon rich in omega-3.",
    rating: 4.7,
    price: 16.49
  },
  {
    id: 7,
    title: "Classic Sandwich",
    category: "Sandwich",
    image: "https://www.w3schools.com/w3images/sandwich.jpg",
    description: "Simple yet delicious classic sandwich.",
    rating: 4.3,
    price: 7.49
  },
  {
    id: 8,
    title: "French Croissant",
    category: "Bakery",
    image: "https://www.w3schools.com/w3images/croissant.jpg",
    description: "Flaky and buttery French croissant.",
    rating: 4.6,
    price: 4.99
  }
];

export default function MyFood() {
  return (
    <div className="min-h-screen bg-stone-50 font-serif text-stone-900">

      {/* Navbar */}
      <header className="sticky top-0 z-30 bg-stone-50 border-b border-stone-200 flex items-center justify-between px-6 md:px-10 py-4">
        <span className="text-2xl leading-none text-stone-800 cursor-default">☰</span>

        <h1 className="text-xl md:text-2xl font-bold tracking-wide">
          My Food
        </h1>

        <span className="text-sm md:text-base tracking-widest text-stone-800">Mail</span>
      </header>

      {/* Card Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
          {foodData.map((item) => (
            <article key={item.id} className="group cursor-pointer text-center">

              {/* Image */}
              <div className="overflow-hidden aspect-[3/4] mb-4 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Category badge */}
                <span className="absolute top-2 left-2 bg-white/90 text-stone-700 text-xs px-2 py-1 rounded tracking-wide font-sans">
                  {item.category}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-base md:text-lg font-normal leading-snug mb-2 px-1">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-xs md:text-sm text-stone-500 italic leading-relaxed px-2 mb-3">
                {item.description}
              </p>

              Rating & Price
              <div className="flex items-center justify-center gap-3 font-sans">
                <span className="text-amber-500 text-sm">{"★".repeat(Math.floor(item.rating))}{"☆".repeat(5 - Math.floor(item.rating))}</span>
                <span className="text-xs text-stone-400">{item.rating}</span>
                <span className="text-stone-300">|</span>
                <span className="text-sm font-medium text-stone-700">${item.price.toFixed(2)}</span>
              </div>

            </article>
          ))}
        </div>
      </main>

    </div>
  );
}