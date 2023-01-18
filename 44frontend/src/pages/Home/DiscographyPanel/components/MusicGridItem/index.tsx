import styles from "./MusicGridItem.module.scss";

interface MusicGridItemProps {
  title: string;
  artist: string;
  features: string;
  album_art: string;
  expandWidth?: boolean
  controllerClass?: string
}

export default function MusicGridItem({
  title,
  artist,
  features,
  album_art,
  controllerClass
}: MusicGridItemProps) {
  return (
    <div className={`${styles.item} ${controllerClass}`}>
      <div className={styles.onHoverDet}>
        <h2>{title}</h2>
        <h3>{artist}</h3>
        <h4>{features}</h4>
      </div>
      <img className={styles.cover} src={album_art} alt="albumart" />

      {/* meta data will be used in expanded view of grid item */}

    </div>
  );
}
