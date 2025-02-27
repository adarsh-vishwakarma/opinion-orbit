# Opinion Orbit

This is a [Next.js](https://nextjs.org) project for managing feedback across multiple projects. It allows you to embed a feedback widget on any website and centralize all responses in one dashboard.

## Features

- **Easy Integration**: Embed a simple widget into any website.
- **Centralized Feedback Management**: Collect and manage feedback from multiple projects in one place.
- **Customizable UI**: Modify the widget's appearance to match your branding.
- **Anonymous & Authenticated Feedback**: Allow users to submit feedback anonymously or require authentication.
- **Real-time Notifications**: Receive instant alerts when new feedback is submitted.
- **Analytics & Insights**: Gain insights from user feedback with visual reports and trends.
- **Multi-Project Support**: Manage feedback across different projects from a single dashboard.

## Getting Started

First, clone the repository and install dependencies:

```bash
git clone https://github.com/adarsh-vishwakarma/opinion-orbit.git
cd opinion-orbit
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

## Embedding the Feedback Form

To integrate the feedback widget into your website, use the following embed code:

```html
<my-widget project-id="d5ea5b2b-b7b6-44e8-a0a6-df7f290197f2"></my-widget>
<script src="https://opinion-orbit-widget-self.vercel.app/widget.umd.js"></script>
```

### Configuration

Customize the widget using additional attributes:

```html
<my-widget project-id="d5ea5b2b-b7b6-44e8-a0a6-df7f290197f2" data-theme="dark" data-position="bottom-right"></my-widget>
<script src="https://opinion-orbit-widget-self.vercel.app/widget.umd.js"></script>
```

- `data-theme`: Set to `light` or `dark`.
- `data-position`: Set to `bottom-right`, `bottom-left`, `top-right`, or `top-left`.

## Learn More

To learn more about Next.js, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can also visit [the Next.js GitHub repository](https://github.com/vercel/next.js) for community discussions and contributions.

## Deploy on Vercel

The easiest way to deploy Opinion Orbit is to use [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is licensed under the MIT License.

