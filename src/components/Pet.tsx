import { Link } from 'react-router-dom';

import styles from './Pet.module.less';

type PetProps = {
  name: string,
  animal: string,
  breed: string,
  images: string[],
  location: string,
  id: number
}
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
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
