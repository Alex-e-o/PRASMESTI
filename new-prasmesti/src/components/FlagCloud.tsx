import * as React from 'react';
import { motion } from 'framer-motion';
import DottedMap from 'dotted-map';
import { eccasFlags } from '../data/eccasFlags';
import { useLanguage } from '../languageContext';

const RADIUS = 240;
const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;

function getFlagTransform(i: number, n: number): string {
  const phi = Math.acos(1 - (2 * (i + 0.5)) / n);
  const theta = (2 * Math.PI * i) / GOLDEN_RATIO;
  const elevation = 90 - (phi * 180) / Math.PI;
  const azimuth = (theta * 180) / Math.PI;
  return `rotateY(${azimuth}deg) rotateX(${elevation}deg) translateZ(${RADIUS}px)`;
}

type CeeacMarker = {
  code: string;
  label: string;
  lat: number;
  lng: number;
};

const ceeacMarkers: CeeacMarker[] = [
  { code: 'ao', label: 'Angola', lat: -8.839, lng: 13.2894 },
  { code: 'bi', label: 'Burundi', lat: -3.3614, lng: 29.3599 },
  { code: 'cm', label: 'Cameroon', lat: 3.848, lng: 11.5021 },
  { code: 'cf', label: 'CAR', lat: 4.3947, lng: 18.5582 },
  { code: 'td', label: 'Chad', lat: 12.1348, lng: 15.0557 },
  { code: 'cg', label: 'Congo', lat: -4.2634, lng: 15.2429 },
  { code: 'cd', label: 'DRC', lat: -4.4419, lng: 15.2663 },
  { code: 'gq', label: 'Eq. Guinea', lat: 3.7521, lng: 8.7737 },
  { code: 'ga', label: 'Gabon', lat: 0.4162, lng: 9.4673 },
  { code: 'rw', label: 'Rwanda', lat: -1.9441, lng: 30.0619 },
  { code: 'st', label: 'Sao Tome', lat: 0.3365, lng: 6.7273 },
];

const AFRICA_ISO3 = [
  'DZA', 'AGO', 'BEN', 'BWA', 'BFA', 'BDI', 'CMR', 'CAF', 'TCD', 'COD', 'COG', 'CIV', 'DJI',
  'EGY', 'GNQ', 'ERI', 'SWZ', 'ETH', 'GAB', 'GMB', 'GHA', 'GIN', 'GNB', 'KEN', 'LSO', 'LBR',
  'LBY', 'MDG', 'MWI', 'MLI', 'MRT', 'MAR', 'MOZ', 'NAM', 'NER', 'NGA', 'RWA', 'SEN', 'SLE',
  'SOM', 'ZAF', 'SSD', 'SDN', 'TZA', 'TGO', 'TUN', 'UGA', 'ZMB', 'ZWE', 'ESH',
] as const;

export function FlagCloud() {
  const { language } = useLanguage();
  const n = eccasFlags.length;
  const mapData = React.useMemo(() => {
    const dottedMap = new DottedMap({
      height: 66,
      grid: 'diagonal',
      countries: [...AFRICA_ISO3],
    });

    return {
      points: dottedMap.getPoints(),
      image: dottedMap.image,
    };
  }, []);

  const markerPoints = React.useMemo(
    () =>
      ceeacMarkers.map((marker) => {
        const x =
          ((marker.lng - mapData.image.region.lng.min) /
            (mapData.image.region.lng.max - mapData.image.region.lng.min)) *
          mapData.image.width;
        const y =
          ((mapData.image.region.lat.max - marker.lat) /
            (mapData.image.region.lat.max - mapData.image.region.lat.min)) *
          mapData.image.height;
        return { ...marker, x, y };
      }),
    [mapData],
  );

  return (
    <div className="flag-cloud-stack">
      <motion.div
        className="flag-sphere-wrap"
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flag-sphere-tilt">
          <div className="flag-sphere">
            {eccasFlags.map((flag, i) => (
              <div
                key={flag.nameEn}
                className="flag-sphere-item"
                style={{ transform: getFlagTransform(i, n) }}
              >
                <div className="flag-sphere-card">
                  <img
                    src={flag.image}
                    alt={language === 'fr' ? flag.nameFr : flag.nameEn}
                    className="flag-sphere-img"
                  />
                </div>
                <p className="flag-sphere-label">
                  {language === 'fr' ? flag.nameFr : flag.nameEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flag-map-wrap"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
      >
        <svg
          viewBox={`0 0 ${mapData.image.width} ${mapData.image.height}`}
          className="flag-map-svg"
          role="img"
          aria-label="CEEAC countries in Central Africa"
        >
          {mapData.points.map((point, index) => (
            <circle key={`p-${index}`} cx={point.x} cy={point.y} r={0.38} fill="#7f89a0" />
          ))}

          {markerPoints.map((marker) => (
            <g key={marker.code}>
              <circle cx={marker.x} cy={marker.y} r={2.35} fill="rgba(212,100,26,0.28)" />
              <circle cx={marker.x} cy={marker.y} r={1.9} fill="#d4641a" />
              <clipPath id={`flag-clip-${marker.code}`}>
                <circle cx={marker.x} cy={marker.y} r={1.45} />
              </clipPath>
              <image
                href={`https://flagcdn.com/w80/${marker.code}.png`}
                x={marker.x - 1.45}
                y={marker.y - 1.45}
                width={2.9}
                height={2.9}
                preserveAspectRatio="xMidYMid slice"
                clipPath={`url(#flag-clip-${marker.code})`}
              />
            <title>{marker.label}</title>
            </g>
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
