## Getting Started

First, run docker:

```bash
docker-compose up -d
```

Then, install dependencies, and prisma:

```bash
pnpm i
pnpx prisma generate
pnpx prisma db push
```

And finally, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### MySMS Messenger Wireframe

![picture alt](https://s3.us-west-2.amazonaws.com/assets.cityhive.net/MySMS-Messenger/mysmsmessengerwireframe.png 'MySMS Messenger Wireframe')
