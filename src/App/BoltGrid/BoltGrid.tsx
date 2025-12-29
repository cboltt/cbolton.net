import { useMemo, useState, useEffect, useCallback, useRef } from "react";
import Bolt from "../Bolt";
import styles from "./BoltGrid.module.scss";

// =============================================================================
// Configuration
// =============================================================================

const CONFIG = {
  // Grid sizing (must match SCSS $bolt-size-min and gaps)
  grid: {
    boltSizePx: 48,
    gapPx: 16,
    buffer: 1.2, // Extra bolts to ensure full coverage
  },

  // Random highlight timing
  highlight: {
    durationMs: 2000,
    minIntervalMs: 3000,
    randomIntervalMs: 3000,
  },

  // Trail effect when moving mouse quickly
  trail: {
    durationMs: 300,
  },
} as const;

// =============================================================================
// Hooks
// =============================================================================

function useResponsiveBoltCount() {
  const [boltCount, setBoltCount] = useState(() => calculateBoltCount());

  useEffect(() => {
    const handleResize = () => {
      setBoltCount(calculateBoltCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return boltCount;
}

function calculateBoltCount() {
  if (typeof window === "undefined") return 800;

  const { boltSizePx, gapPx, buffer } = CONFIG.grid;
  const cellSize = boltSizePx + gapPx;

  const columns = Math.ceil(window.innerWidth / cellSize);
  const rows = Math.ceil(window.innerHeight / cellSize);

  return Math.ceil(columns * rows * buffer);
}

// =============================================================================
// Component
// =============================================================================

export default function BoltGrid() {
  const boltCount = useResponsiveBoltCount();

  const [highlightedBolts, setHighlightedBolts] = useState<Set<number>>(
    new Set()
  );
  const [trailBolts, setTrailBolts] = useState<Set<number>>(new Set());
  const trailTimeouts = useRef<Map<number, NodeJS.Timeout>>(new Map());

  const bolts = useMemo(() => {
    return Array.from({ length: boltCount }, (_, i) => ({ id: i }));
  }, [boltCount]);

  const handleMouseEnter = useCallback((boltId: number) => {
    const existingTimeout = trailTimeouts.current.get(boltId);
    if (existingTimeout) {
      clearTimeout(existingTimeout);
    }

    setTrailBolts((prev) => new Set(prev).add(boltId));

    const timeout = setTimeout(() => {
      setTrailBolts((prev) => {
        const next = new Set(prev);
        next.delete(boltId);
        return next;
      });
      trailTimeouts.current.delete(boltId);
    }, CONFIG.trail.durationMs);

    trailTimeouts.current.set(boltId, timeout);
  }, []);

  const triggerRandomBolt = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * boltCount);

    setHighlightedBolts((prev) => new Set(prev).add(randomIndex));

    setTimeout(() => {
      setHighlightedBolts((prev) => {
        const next = new Set(prev);
        next.delete(randomIndex);
        return next;
      });
    }, CONFIG.highlight.durationMs);
  }, [boltCount]);

  useEffect(() => {
    const scheduleNext = () => {
      const { minIntervalMs, randomIntervalMs } = CONFIG.highlight;
      const delay = minIntervalMs + Math.random() * randomIntervalMs;

      return setTimeout(() => {
        triggerRandomBolt();
        timeoutId = scheduleNext();
      }, delay);
    };

    let timeoutId = scheduleNext();
    return () => clearTimeout(timeoutId);
  }, [triggerRandomBolt]);

  useEffect(() => {
    const timeouts = trailTimeouts.current;
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  const getBoltClassName = (boltId: number) => {
    const classes = [styles.BoltWrapper];

    if (highlightedBolts.has(boltId)) {
      classes.push(styles.highlighted);
    } else if (trailBolts.has(boltId)) {
      classes.push(styles.trail);
    }

    return classes.join(" ");
  };

  return (
    <div className={styles.BoltGrid}>
      {bolts.map((bolt) => (
        <div
          key={bolt.id}
          className={getBoltClassName(bolt.id)}
          onMouseEnter={() => handleMouseEnter(bolt.id)}
        >
          <Bolt className={styles.Bolt} />
        </div>
      ))}
    </div>
  );
}
