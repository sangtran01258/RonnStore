import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"RonnStore — Công nghệ trong tầm tay",description:"Cửa hàng laptop, điện thoại và phụ kiện công nghệ."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="vi"><body>{children}</body></html>;}