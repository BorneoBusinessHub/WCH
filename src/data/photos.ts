// Deck photos: representative, not the proposed WCH site. Found photos: see src/assets/found/credits.json.
import bakun from '../assets/photos/bakun-hydro.jpg';
import land from '../assets/photos/sarawak-land.jpg';
import serverHall from '../assets/photos/server-hall.jpg';
import river from '../assets/found/intersection-of-kanowit-river-lower-right-and.jpg';
import switchyard from '../assets/found/koyna-switchyard.jpg';
import cooling from '../assets/found/data-center-cooling-tower.jpg';
import rack from '../assets/found/rear-of-rack-at-nersc-data-center.jpg';
import jason from '../assets/team/jason-wong.jpg';
import leo from '../assets/team/leo-tan.jpg';
import perry from '../assets/team/perry-wong.jpg';
import justine from '../assets/team/justine-jinggut.jpg';
import andy from '../assets/team/andy-yek.jpg';

export const photos = { bakun, land, serverHall, river, switchyard, cooling, rack };
export type PhotoKey = keyof typeof photos;
export const portraits: Record<string, ImageMetadata> = { jason, leo, perry, justine, andy };
