import {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import {Link} from '../../components';
import {Icon} from './components';

import styles from './Project.module.scss';

export type ProjectType = {
  icon: string;
  color?: string;
  title: string;
  description: string;
  url: string;
  archive_url?: string;
  archived?: boolean;
  hidden?: boolean;
};
interface Props {
  project: ProjectType;
  index: number;
  highlighted: boolean;
  onVisible(index: number): void;
  onNotVisible(index: number): void;
}

export function Project({
  project: {hidden, icon, color, title, description, url, archived, archive_url},
  index,
  highlighted,
  onVisible,
  onNotVisible,
}: Props) {
  const isMouseUser = matchMedia('(pointer:fine)').matches;
  const isFirst = index === 0;
  const [ref, visible] = useInView({
    delay: 150,
    threshold: 0.5,
    initialInView: isFirst,
    skip: isMouseUser,
  });

  useEffect(() => {
    if (visible) {
      onVisible(index);
    } else {
      onNotVisible(index);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, visible]);

  if (hidden) {
    return null;
  }

  const hostname = new URL(url).hostname.replace('www.', '');
  const link = archived && archive_url ? archive_url : url;
  const linkLabel = archived ? `[Archived] ${hostname}` : hostname;
  const className = [
    styles.Project,
    highlighted && !isMouseUser ? styles.highlighted : undefined,
    isFirst ? styles.isFirst : undefined,
  ].join(' ');

  return (
    <div ref={ref} className={className} tabIndex={0}>
      {/* <Icon {...{icon, color}} /> */}
      <h3 className={styles.Title}>{title}</h3>
      <div className={styles.Content}>
        <p className={styles.Description}>{description}</p>
        <div className={styles.Link}>
          <Link label={linkLabel} accessibilityLabel={`Go to ${title} in a new tab`} url={link} />
        </div>
      </div>
    </div>
  );
}
