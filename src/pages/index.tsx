import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Manual de Usuario
        </Heading>
        <p className="hero__subtitle">
          Plataforma de Aprendizaje — <b>Escuela de Derechos</b> <br />
          Defensoría del Pueblo del Ecuador
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Guía Rápida ⏱️
          </Link>
          <Link
            className="button button--info button--lg"
            to="/docs/acceso-sistema">
            Iniciar Sesión
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            style={{ color: 'white', borderColor: 'white' }}
            to="/docs/registro-usuarios">
            Registrarse
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={`Inicio`}
      description="Manual de Usuario de la Plataforma de Aprendizaje de la Escuela de Derechos">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
