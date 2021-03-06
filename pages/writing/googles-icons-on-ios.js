import BlogPage from "core/blog-page";

export const meta = {
  published: true,
  publishedAt: "2013-10-25",
  title: "Google’s Icons On iOS"
};

export default () => (
  <BlogPage dateTime={meta.publishedAt} title={meta.title}>
    <header>
      <h1>{meta.title}</h1>
    </header>

    <p>
      Google spent all year unifying their iOS icons with a consistent ridge
      running along the bottom of each. Then iOS 7 came out and the shape of the
      app icons changed. What a mess. Some are fixed, others are still amiss. My
      opinion? It’s time to ditch the ridge. Google Maps is the only one that
      looks good on my phone anymore.
    </p>

    <img
      alt="Google's icons on iOS"
      className="blog-image"
      src="/assets/googles-icons-on-ios.jpg"
    />
  </BlogPage>
);
