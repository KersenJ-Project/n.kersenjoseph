import { useEffect, useState } from 'react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

/**
 * Machine à écrire réactive sans dépendance externe.
 * Réinitialise proprement le texte lors d'un changement de langue.
 */
export default function useTypewriter(
  phrases,
  { typeSpeed = 65, deleteSpeed = 35, pauseMs = 1800 } = {},
) {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  // Réinitialiser lors d'un changement de liste de phrases (ex: bascule FR/EN)
  useEffect(() => {
    setIndex(0);
    setText('');
    setDeleting(false);
  }, [phrases]);

  useEffect(() => {
    if (!phrases || phrases.length === 0) return undefined;

    if (reduced) {
      setText(phrases[0]);
      return undefined;
    }

    const currentPhrase = phrases[index % phrases.length];

    if (!deleting && text === currentPhrase) {
      const pauseTimer = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(pauseTimer);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return undefined;
    }

    const delay = deleting ? deleteSpeed : typeSpeed;
    const tick = setTimeout(() => {
      const targetLength = text.length + (deleting ? -1 : 1);
      setText(currentPhrase.slice(0, targetLength));
    }, delay);

    return () => clearTimeout(tick);
  }, [phrases, text, deleting, index, typeSpeed, deleteSpeed, pauseMs, reduced]);

  return text;
}
