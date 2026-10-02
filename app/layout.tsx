import type {Metadata} from 'next';import './globals.css';import Navbar from '@/components/Navbar';import Footer from '@/components/Footer';import WhatsAppFloat from '@/components/WhatsAppFloat';
export const metadata:Metadata={title:'Galaxy Mobiles | Thodupuzha',description:'Premium mobile sales, second-hand mobiles, servicing, EMI and exchange at Galaxy Mobiles, Thodupuzha.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Navbar/>{children}<Footer/><WhatsAppFloat/></body></html>}
