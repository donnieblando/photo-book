import { PROJECT_IDS } from "../utils/constants";
import { LIVEMUSIC_PHOTOS, BENCHES_PHOTOS, PORTRAITS_PHOTOS, LAMINA_PHOTOS } from './projectPhotos';

export const MENU_ITEMS = [
  {
    label: 'Home',
    path: '/'
  },{
    label: 'Projects',
    path: '/projects'
  },{
    label: 'About',
    path: '/about'
  },{
    label: 'Contacts',
    path: '/contacts'
  },{
    label: 'GENERATOR',
    path: '/generator'
  }
];

/**
 * TODO 2.0
 * L'idea per la versione 2.0 è che il design dei progetti sia definito direttamente qua
 * La matrice di foto permette di posizionare gli elementi nella pagina del progetto
 */
export const PROJECTS = {
  LIVE_MUSIC: {
    id: PROJECT_IDS.LIVEMUSIC,
    title: 'Gigs and stage animals',
    description: 'This project is meant to depict the human behavior when the subject is exposed on a stage for the pleasure of the audience',
    photos: LIVEMUSIC_PHOTOS,
    preview: ""
  },
  BENCHES: {
    id: PROJECT_IDS.BENCHES,
    title: 'Amazing views with an invitation to sit and enjoy the show',
    description: 'This project is an homenaje to mother nature and her lovers',
    photos: BENCHES_PHOTOS,
    preview: ""
  },
  PORTRAITS: {
    id: PROJECT_IDS.PORTRAITS,
    title: 'Portraits',
    description: 'A deep inside look through the souls of the people ',
    photos: PORTRAITS_PHOTOS,
    preview: "DSC_5816-1"
  },
  LAMINA: {
    id: PROJECT_IDS.LAMINA,
    title: 'La Mina',
    description: 'A special district in the city of Barcelona',
    photos: LAMINA_PHOTOS,
    preview: "DSC_5816-1"
  }
}

