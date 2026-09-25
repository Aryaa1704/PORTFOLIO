import { PROFILE_AVATAR_URL } from './data';

export type AvatarArtStyle = 'original';

export function getStoredAvatarData(): { url: string; style: AvatarArtStyle } {
  return { url: PROFILE_AVATAR_URL, style: 'original' };
}

export function saveArtStyle(_style: string, _customDataUrl?: string): void {
  // no-op, real photo is fixed
}

export function useAvatar(): {
  avatarUrl: string;
  currentStyle: AvatarArtStyle;
  setStyle: (style: string) => void;
  updateAvatar: (dataUrl: string) => void;
  resetAvatar: () => void;
  isCustom: boolean;
} {
  return {
    avatarUrl: PROFILE_AVATAR_URL,
    currentStyle: 'original',
    setStyle: () => {},
    updateAvatar: () => {},
    resetAvatar: () => {},
    isCustom: false,
  };
}

