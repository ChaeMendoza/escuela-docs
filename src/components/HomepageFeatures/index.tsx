import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Acceso simplificado',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
        <>
            El sistema permite el registro y validación de usuarios mediante conexión con DINARDAP, facilitando el acceso a la Escuela de Derechos de forma segura y eficiente.
        </>
    ),
  },
  {
    title: 'Gestión académica integrada',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
        <>
            La plataforma se integra con Moodle 5 para administrar cursos, seguimiento de participantes y emisión automática de certificados, todo desde una sola interfaz.
        </>
    ),
  },
  {
    title: 'Diseño moderno y accesible',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
        <>
            Con una interfaz desarrollada en React, la Escuela de Derechos ofrece una experiencia amigable, inclusiva y adaptada a dispositivos móviles.
        </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
