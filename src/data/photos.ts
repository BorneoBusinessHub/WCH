// Photos taken from the WCH reference deck. Representative images, not the proposed WCH site.
import bakun from '../assets/photos/bakun-hydro.jpg';
import land from '../assets/photos/sarawak-land.jpg';
import serverHall from '../assets/photos/server-hall.jpg';
import jason from '../assets/team/jason-wong.jpg';
import leo from '../assets/team/leo-tan.jpg';
import perry from '../assets/team/perry-wong.jpg';
import justine from '../assets/team/justine-jinggut.jpg';
import andy from '../assets/team/andy-yek.jpg';

export const photos = { bakun, land, serverHall };
export type PhotoKey = keyof typeof photos;

// keyed by the "photo" field in site.json
export const portraits: Record<string, ImageMetadata> = { jason, leo, perry, justine, andy };
