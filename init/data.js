const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Relax at this charming beachfront cottage with direct sea views and golden sands just steps away.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] },
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this modern loft with panoramic skyline views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] },
  },
  {
    title: "Mountain Cabin Getaway",
    description:
      "Peaceful wooden cabin surrounded by forest trails and snow-capped peaks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FiaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Aspen",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.837, 39.1911] },
  },
  {
    title: "Tokyo Skyline Apartment",
    description:
      "Enjoy Tokyo's dazzling lights from this modern high-rise apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Tokyo",
    country: "Japan",
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] },
  },
  {
    title: "Tuscan Countryside Villa",
    description:
      "A peaceful escape surrounded by olive groves and vineyards in Tuscany.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGl0YWx5JTIwdmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 950,
    location: "Tuscany",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] },
  },
  {
    title: "Luxury Desert Camp",
    description:
      "Glamp under the stars in the heart of the golden dunes of Dubai.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1672859424323-3ffbb2700802?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] },
  },
  {
    title: "Riverside Cabin Retreat",
    description:
      "Beautiful wooden cabin beside the Ganges with serene sunrise views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544476915-ed1370594142?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJpdmVyc2lkZSUyMGNhYmlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Rishikesh",
    country: "India",
    geometry: { type: "Point", coordinates: [78.2676, 30.0869] },
  },
  {
    title: "Tropical Villa Escape",
    description:
      "Private villa with a pool, coconut trees, and beach vibes all around.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJhbGklMjB2aWxsYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Bali",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] },
  },
  {
    title: "Parisian Charm Apartment",
    description:
      "Stay in a 19th-century apartment near the Eiffel Tower with Parisian charm.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBhcmlzJTIwYXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Paris",
    country: "France",
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] },
  },
  {
    title: "Goa Seaside Paradise",
    description:
      "Modern sea-facing house with an infinity pool and ocean breeze all day.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvYSUyMGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Goa",
    country: "India",
    geometry: { type: "Point", coordinates: [73.9855, 15.2993] },
  },
  {
    title: "Berlin Urban Studio",
    description:
      "Compact and cozy apartment close to nightlife, shopping, and metro.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlcmxpbiUyMGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Berlin",
    country: "Germany",
    geometry: { type: "Point", coordinates: [13.405, 52.52] },
  },
  {
    title: "Shimla Hilltop Cottage",
    description:
      "Enjoy panoramic valley views and cozy bonfires in this scenic hilltop stay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhpbGx0b3AlMjBjb3R0YWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 700,
    location: "Shimla",
    country: "India",
    geometry: { type: "Point", coordinates: [77.1734, 31.1048] },
  },
  {
    title: "Swiss Ski Chalet",
    description:
      "Elegant ski-in/ski-out chalet with fireplace and mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN3aXNzJTIwY2hhbGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Zermatt",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.748, 46.0207] },
  },
  {
    title: "Jaipur Heritage Haveli",
    description:
      "Traditional haveli restored with modern comfort in the heart of Jaipur.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1534531688091-a458257992cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGphaXB1ciUyMGhhdmVsaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Jaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] },
  },
  {
    title: "Nainital Lake View Cottage",
    description:
      "Peaceful cottage by the lakeside, ideal for kayaking and reading.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1601622256416-d7f757f99eb2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 950,
    location: "Nainital",
    country: "India",
    geometry: { type: "Point", coordinates: [79.4636, 29.3803] },
  },
  {
    title: "Barcelona Artistic Loft",
    description:
      "A chic apartment filled with local art, close to museums and cafés.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhcmNlbG9uYSUyMGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Barcelona",
    country: "Spain",
    geometry: { type: "Point", coordinates: [2.1734, 41.3851] },
  },
  {
    title: "Thai Tropical Treehouse",
    description:
      "Sleep among the trees in this eco-friendly stay with a stunning view.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyZWVob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1150,
    location: "Koh Samui",
    country: "Thailand",
    geometry: { type: "Point", coordinates: [100.0167, 9.512] },
  },
  {
    title: "English Countryside Cottage",
    description:
      "Beautiful stone cottage in the English countryside with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVuZ2xpc2glMjBjb3R0YWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-1.778, 51.833] },
  },
  {
    title: "Big Sur Coastal Cabin",
    description:
      "Cabin on a cliff overlooking the Pacific Ocean. Perfect for sunsets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1757839939502-afa95e78dd60?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlnJTIwc3VyJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Big Sur",
    country: "United States",
    geometry: { type: "Point", coordinates: [-121.8081, 36.3615] },
  },
  {
    title: "Sydney Beach Apartment",
    description:
      "Stylish apartment only five minutes from Bondi Beach. Great for surfers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1667269225504-3a2800498f52?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3lkbmV5JTIwYmVhY2glMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
    },
    price: 1600,
    location: "Sydney",
    country: "Australia",
    geometry: { type: "Point", coordinates: [151.2093, -33.8688] },
  },
  {
    title: "Lake Como Luxury Villa",
    description:
      "Stunning villa with private dock and panoramic lake views in Italy.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFrZSUyMGNvbW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Lake Como",
    country: "Italy",
    geometry: { type: "Point", coordinates: [9.258, 45.985] },
  },
  {
    title: "Kyoto Traditional House",
    description:
      "Authentic machiya townhouse with Japanese garden and tea ceremony space.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a3lvdG8lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Kyoto",
    country: "Japan",
    geometry: { type: "Point", coordinates: [135.768, 35.0116] },
  },
  {
    title: "Santorini Cave House",
    description:
      "White-washed cave house with Caldera views and private terrace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FudG9yaW5pfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Santorini",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.4615, 36.3932] },
  },
  {
    title: "Banff Mountain Lodge",
    description:
      "Rustic lodge with hot tub and direct access to hiking trails.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuZmZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1350,
    location: "Banff",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-115.5708, 51.1784] },
  },
  {
    title: "Marrakech Riad",
    description:
      "Traditional Moroccan riad with courtyard pool and rooftop terrace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1513628253939-010e64ac66cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFycmFrZWNoJTIwcmlhZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 850,
    location: "Marrakech",
    country: "Morocco",
    geometry: { type: "Point", coordinates: [-7.9892, 31.6295] },
  },
  {
    title: "Queenstown Adventure Cabin",
    description:
      "Cozy cabin perfect for adventure seekers near ski fields and lakes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cXVlZW5zdG93bnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1250,
    location: "Queenstown",
    country: "New Zealand",
    geometry: { type: "Point", coordinates: [168.662, -45.0312] },
  },
  {
    title: "Istanbul Bosphorus View",
    description:
      "Modern apartment with stunning views of the Bosphorus Strait.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXN0YW5idWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 950,
    location: "Istanbul",
    country: "Turkey",
    geometry: { type: "Point", coordinates: [28.9784, 41.0082] },
  },
  {
    title: "Cape Town Vineyard Estate",
    description:
      "Luxury estate surrounded by vineyards with Table Mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FwZSUyMHRvd258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Cape Town",
    country: "South Africa",
    geometry: { type: "Point", coordinates: [18.4241, -33.9249] },
  },
  {
    title: "Seoul Modern Hanok",
    description:
      "Contemporary hanok stay blending traditional Korean architecture with modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1648383228240-6ed939727ad6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VvdWwlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
    },
    price: 1100,
    location: "Seoul",
    country: "South Korea",
    geometry: { type: "Point", coordinates: [126.978, 37.5665] },
  },
  {
    title: "Amsterdam Canal House",
    description:
      "Historic canal house with charming interior and bike rental included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW1zdGVyZGFtfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: { type: "Point", coordinates: [4.9041, 52.3676] },
  },
  {
    title: "Rio Beachfront Penthouse",
    description:
      "Luxurious penthouse with panoramic views of Copacabana Beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmlvJTIwZGUlMjBqYW5laXJvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Rio de Janeiro",
    country: "Brazil",
    geometry: { type: "Point", coordinates: [-43.1729, -22.9068] },
  },
  {
    title: "Vienna Imperial Apartment",
    description:
      "Elegant apartment in historic building near Vienna's cultural landmarks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmllbm5hfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1050,
    location: "Vienna",
    country: "Austria",
    geometry: { type: "Point", coordinates: [16.3738, 48.2082] },
  },
  {
    title: "Hawaiian Beach Bungalow",
    description:
      "Traditional bungalow steps from the beach with ocean sounds and tropical gardens.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGF3YWlpJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1750,
    location: "Maui",
    country: "United States",
    geometry: { type: "Point", coordinates: [-156.3319, 20.7984] },
  },
  {
    title: "Scottish Highlands Castle",
    description:
      "Historic castle stay with loch views and traditional Scottish hospitality.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2NvdHRpc2glMjBjYXN0bGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Scottish Highlands",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-4.4321, 57.4778] },
  },
  {
    title: "Mexico City Artistic Loft",
    description:
      "Bright loft in trendy neighborhood filled with local artwork and culture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWV4aWNvJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 850,
    location: "Mexico City",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-99.1332, 19.4326] },
  },
  {
    title: "Lisbon Hillside Apartment",
    description:
      "Charming apartment with tram views and traditional Portuguese tiles.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1754139143892-ba9b524256c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=800",
    },
    price: 950,
    location: "Lisbon",
    country: "Portugal",
    geometry: { type: "Point", coordinates: [-9.1393, 38.7223] },
  },
  {
    title: "Budapest Thermal Spa Apartment",
    description:
      "Modern apartment with access to historic thermal baths and Danube views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVkYXBlc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Budapest",
    country: "Hungary",
    geometry: { type: "Point", coordinates: [19.0402, 47.4979] },
  },
  {
    title: "Copenhagen Hygge Apartment",
    description:
      "Cozy Scandinavian apartment with minimalist design and bike-friendly location.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1733342515327-e15b5cec3c4d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29wZW5oYWdlbiUyMGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
    },
    price: 1200,
    location: "Copenhagen",
    country: "Denmark",
    geometry: { type: "Point", coordinates: [12.5683, 55.6761] },
  },
  {
    title: "Edinburgh Historic Flat",
    description:
      "Character-filled flat in Old Town with castle views and traditional pubs nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWRpbmJ1cmdofGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Edinburgh",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-3.1883, 55.9533] },
  },
  {
    title: "Prague Castle View Studio",
    description:
      "Compact studio with breathtaking views of Prague Castle and Charles Bridge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1590531353474-cc0a0d21c15b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJhZ3VlJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
    },
    price: 900,
    location: "Prague",
    country: "Czech Republic",
    geometry: { type: "Point", coordinates: [14.4378, 50.0755] },
  },
];

module.exports = { data: sampleListings };
