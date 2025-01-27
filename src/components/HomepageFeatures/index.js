import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Простое подключение',
    image: require('@site/static/img/icon9.png').default,
    description: (
      <>
        Диспетчерская система легко интегрируется с оборудованием лифтов и
        позволяет быстро настроить связь между объектами.
      </>
    ),
  },
  {
    title: 'Контроль и управление',
    image: require('@site/static/img/operator.png').default,
    description: (
      <>
        Система позволяет удалённо контролировать работу лифтов, оперативно
        выявлять ошибки и управлять оборудованием в реальном времени.
      </>
    ),
  },
  {
    title: 'Поддержка современных стандартов',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Использование современных технологий и стандартов связи делает систему
        надёжной и гибкой для адаптации под различные объекты.
      </>
    ),
  },
];

function Feature({Svg, title, description, image}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {
          Svg
          ? <Svg className={styles.featureSvg} role="img" />
          : <img className={styles.featureSvg} src={image} alt={title} />
        }
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
