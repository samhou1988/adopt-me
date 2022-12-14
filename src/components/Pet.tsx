import { Link } from 'react-router-dom';

import { ReactComponent as DemoIcon } from '@/assets/svg/demo.svg';

import styles from './Pet.module.less';
import { PetProps } from './type';

const Pet = (props: PetProps) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className={styles.pet}>
      <div className={styles['image-container']}>
        <img src={hero} alt={name} />
      </div>
      <div className={styles.info}>
        <DemoIcon width={20} />
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
