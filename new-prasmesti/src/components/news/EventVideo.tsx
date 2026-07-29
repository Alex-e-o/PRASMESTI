import { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { useLanguage } from '../../languageContext';

interface Props {
  src: string;
  poster: string;
  /** Titre de l'événement — sert de libellé accessible au lecteur. */
  label: string;
}

/**
 * Lecteur vidéo de l'événement. `preload="metadata"` : seul l'en-tête du fichier
 * est téléchargé à l'arrivée sur la page (l'affiche fait le reste), le flux ne
 * part qu'au clic. Les contrôles natifs restent actifs — le bouton superposé
 * n'est qu'une surcouche visuelle, masquée dès la lecture.
 */
function EventVideo({ src, poster, label }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const { translate } = useLanguage();
  const t = (key: string) => translate(key) as string;

  return (
    <div className={`event-video${started ? ' is-playing' : ''}`}>
      <video
        ref={videoRef}
        className="event-video-el"
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        aria-label={label}
        onPlay={() => setStarted(true)}
      >
        {t('newsDetailVideoFallback')}
      </video>

      {!started && (
        <button
          type="button"
          className="event-video-play"
          aria-label={`${t('newsDetailVideoTitle')} — ${label}`}
          onClick={() => videoRef.current?.play()}
        >
          <span className="event-video-play-disc">
            <Play size={30} strokeWidth={2} fill="currentColor" />
          </span>
        </button>
      )}
    </div>
  );
}

export default EventVideo;
