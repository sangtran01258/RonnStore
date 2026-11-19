import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const products = [
{slug:"zenbook-14-oled",name:"ASUS Zenbook 14 OLED",brand:"ASUS",category:"Laptop",description:"Laptop OLED mỏng nhẹ.",price:26990000,compareAt:29990000,imageUrl:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85",stock:8,featured:true},
{slug:"macbook-air-m3",name:"MacBook Air 13 M3",brand:"Apple",category:"Laptop",description:"Laptop Apple mỏng nhẹ.",price:27990000,imageUrl:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85",stock:5,featured:true},
{slug:"iphone-16",name:"iPhone 16 128GB",brand:"Apple",category:"Điện thoại",description:"Điện thoại Apple.",price:21990000,compareAt:22990000,imageUrl:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=85",stock:12,featured:true},
{slug:"galaxy-s25",name:"Samsung Galaxy S25",brand:"Samsung",category:"Điện thoại",description:"Điện thoại Samsung.",price:19990000,imageUrl:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85",stock:7,featured:true},
{slug:"sony-wh1000xm5",name:"Sony WH-1000XM5",brand:"Sony",category:"Phụ kiện",description:"Tai nghe chống ồn.",price:6990000,compareAt:8490000,imageUrl:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",stock:15},
{slug:"mx-master-3s",name:"Logitech MX Master 3S",brand:"Logitech",category:"Phụ kiện",description:"Chuột công thái học.",price:2290000,imageUrl:"https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85",stock:20},
{slug:"ipad-air",name:"iPad Air 11-inch",brand:"Apple",category:"Phụ kiện",description:"Máy tính bảng Apple.",price:16990000,imageUrl:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=85",stock:9},
{slug:"dell-xps-13",name:"Dell XPS 13",brand:"Dell",category:"Laptop",description:"Laptop cao cấp gọn nhẹ.",price:32990000,compareAt:34990000,imageUrl:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=85",stock:4}
];
async function main(){for(const p of products)await prisma.product.upsert({where:{slug:p.slug},update:p,create:p});}
main().finally(()=>prisma.$disconnect());