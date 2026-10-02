export const site = {
  name: 'Galaxy Mobiles',
  location: 'Thodupuzha, Idukki, Kerala, India',
  phone: '+91 93887 87887',
  whatsapp: '919388787887',
  hours: '9:00 AM – 8:00 PM (Everyday)'
};

export const wa = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const brands = [
  'Apple',
  'Samsung',
  'Xiaomi',
  'Vivo',
  'Oppo',
  'OnePlus',
  'Realme',
  'POCO'
];

export const services = [
  {
    name: 'Mobile Servicing',
    desc: 'All Brands | Expert Technicians',
    icon: 'Wrench'
  },
  {
    name: 'Second Hand Mobiles',
    desc: 'Quality Checked | Best Value',
    icon: 'RefreshCw'
  },
  {
    name: 'Fresh Mobiles',
    desc: 'Latest Models | Genuine Products',
    icon: 'Smartphone'
  },
  {
    name: 'SIM Activation',
    desc: 'All Networks | Instant',
    icon: 'SimCard'
  },
  {
    name: 'Recharge',
    desc: 'Prepaid & Postpaid',
    icon: 'Zap'
  },
  {
    name: 'EMI Facility',
    desc: 'Easy Monthly Instalments',
    icon: 'WalletCards'
  },
  {
    name: 'Exchange Offer',
    desc: 'Upgrade Your Device',
    icon: 'ArrowLeftRight'
  },
  {
    name: 'Screen Replacement',
    desc: 'Original Parts | Same Day',
    icon: 'PanelsTopLeft'
  },
  {
    name: 'Battery Service',
    desc: 'Long Life | Better Backup',
    icon: 'BatteryCharging'
  },
  {
    name: 'Software Support',
    desc: 'OS | Apps | Troubleshooting',
    icon: 'Settings2'
  }
];

export const products = [
  {
    name: 'iPhone 15',
    brand: 'Apple',
    type: 'Fresh Mobiles',
    storage: '128GB',
    ram: '6GB',
    price: 79900,
    image:
      'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'Samsung Galaxy S24',
    brand: 'Samsung',
    type: 'Fresh Mobiles',
    storage: '256GB',
    ram: '8GB',
    price: 74000,
    image:
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'OnePlus 12',
    brand: 'OnePlus',
    type: 'Fresh Mobiles',
    storage: '256GB',
    ram: '12GB',
    price: 64999,
    image:
      'https://images.unsplash.com/photo-1592286927505-2fd8b6d7b4d3?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'Vivo V40',
    brand: 'Vivo',
    type: 'Fresh Mobiles',
    storage: '256GB',
    ram: '8GB',
    price: 39999,
    image:
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'iPhone 13',
    brand: 'Apple',
    type: 'Second Hand',
    storage: '128GB',
    ram: '4GB',
    price: 38999,
    image:
      'https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'Galaxy S23',
    brand: 'Samsung',
    type: 'Second Hand',
    storage: '256GB',
    ram: '8GB',
    price: 45999,
    image:
      'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?auto=format&fit=crop&w=900&q=85'
  }
];

export const reviews = [
  {
    name: 'Rohit Varghese',
    text: 'Very good service and good collection. I got my new phone here and the team was helpful.'
  },
  {
    name: 'Joyal Raj',
    text: 'Best place for mobile purchase. Good collection and genuine products.'
  },
  {
    name: 'Anu Maria',
    text: 'Excellent exchange offer and EMI facility. Highly recommended.'
  },
  {
    name: 'Shijin K',
    text: 'Service is too good. Friendly team and quick service.'
  },
  {
    name: 'Rahul P',
    text: 'Good quality used phone at a fair price. Staff explained everything clearly.'
  },
  {
    name: 'Fathima N',
    text: 'Quick screen replacement and professional service.'
  }
];

export const gallery = [
  {
    cat: 'Store',
    src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1000&q=85',
    alt: 'Modern electronics store'
  },
  {
    cat: 'New Mobiles',
    src: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=85',
    alt: 'Smartphone'
  },
  {
    cat: 'Used Mobiles',
    src: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=85',
    alt: 'Mobile phone'
  },
  {
    cat: 'Services',
    src: 'https://images.unsplash.com/photo-1581091870622-3a4f9d8e1b4a?auto=format&fit=crop&w=1000&q=85',
    alt: 'Phone repair workspace'
  },
  {
    cat: 'Offers',
    src: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1000&q=85',
    alt: 'Mobile devices'
  },
  {
    cat: 'Store',
    src: 'assets/galaxy-store.jpg',
    alt: 'Galaxy Mobiles store, Thodupuzha'
  },
  {
    cat: 'New Mobiles',
    src: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1000&q=85',
    alt: 'Premium smartphone'
  },
  {
    cat: 'Services',
    src: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=85',
    alt: 'Service desk'
  }
];
