import { Helmet } from "react-helmet-async";
import { Layout } from "../components/layout/Layout";
import { Container } from "../components/ui/Container";
import { ButtonLink } from "../components/ui/ButtonLink";

const NotFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>404 — Page Not Found | Aaghaz Foundation</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Container width="narrow" className="py-20 md:py-32">
        <p className="font-display text-6xl font-semibold text-terracotta">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">Page Not Found</h1>
        <p className="mt-4 text-lg text-muted">The page you're looking for doesn't exist or has been moved.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink to="/">Back to Home</ButtonLink>
          <ButtonLink to="/contact" variant="secondary">
            Contact Us
          </ButtonLink>
        </div>
      </Container>
    </Layout>
  );
};

export default NotFound;
