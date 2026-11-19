# RonnStore

Dark-mode electronics storefront using Next.js 15, TypeScript, Tailwind CSS, PostgreSQL and Prisma.

## Implemented
- Responsive Vietnamese dark storefront with search and category filters.
- Product catalogue API backed by PostgreSQL.
- Shopping cart and checkout interface.
- Prisma schema for users, products, orders and order items.
- Validated order API: server-side price calculation and transactional inventory decrement.
- Auth.js Google OAuth foundation.
- PostgreSQL Docker Compose and product seed data.

## Local setup
1. Install Node.js 20+ and Docker.
2. Run `npm install`.
3. Copy `.env.example` to `.env`; set DATABASE_URL and a strong AUTH_SECRET.
4. Start PostgreSQL: `docker compose up -d db`.
5. Run `npm run db:generate`, `npm run db:migrate`, `npm run db:seed`.
6. Start with `npm run dev`; open http://localhost:3000.

Configure AUTH_GOOGLE_ID and AUTH_GOOGLE_SECRET for Google sign-in. Never commit `.env`.

## API
- GET `/api/products?q=asus&category=Laptop`
- POST `/api/orders` with customerName, email, phone, address, optional note and items [{productId,quantity}].

Orders are created as PENDING. Online payment, admin product/order management, email, shipping, automated tests and production deployment are not yet implemented. Run `npm run typecheck` and `npm run build` after installing dependencies and applying migrations.
