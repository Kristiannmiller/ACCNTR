// Types
import { PictureType } from '@/types';

const id1 = 42;
const id2 = 43;
const id3 = 510;

export const mockPictures: PictureType[] = [
    {
        image: {
            src: `https://picsum.photos/id/${id1}/768/432`,
            alt: 'US News ranks Advocate Health #1 in the nation.'
        },
        sources: [
            {
                srcset: [
                    {
                        path: `https://picsum.photos/id/${id1}/768/432`,
                        descriptor: '768w'
                    },
                    {
                        path: `https://picsum.photos/id/${id1 + 1}/1280/720`,
                        descriptor: '1280w'
                    },
                    {
                        path: `https://picsum.photos/id/${id1 + 2}/1920/1080`,
                        descriptor: '1920w'
                    }
                ],
                media: '(min-width: 480px)'
            },
            {
                srcset: [
                    {
                        path: `https://picsum.photos/id/${id1}/640/360`,
                        descriptor: '1x'
                    },
                    {
                        path: `https://picsum.photos/id/${id1 + 1}/1280/720`,
                        descriptor: '2x'
                    }
                ],
                media: '(max-width: 479px)'
            }
        ]
    },

    // Single small image breakpoint
    {
        image: {
            src: `https://picsum.photos/id/${id2}/768/432`,
            alt: 'Patient smiles.'
        },
        sources: [
            {
                srcset: [
                    {
                        path: `https://picsum.photos/id/${id2 + 1}/768/432`,
                        descriptor: '768w'
                    },
                    {
                        path: `https://picsum.photos/id/${id2 + 2}/1280/720`,
                        descriptor: '1280w'
                    },
                    {
                        path: `https://picsum.photos/id/${id2 + 3}/1920/1080`,
                        descriptor: '1920w'
                    }
                ],
                media: '(min-width: 480px)'
            },
            {
                srcset: [
                    {
                        path: `https://picsum.photos/id/${id2}/640/360`,
                        descriptor: '1x'
                    }
                ],
                media: '(max-width: 479px)'
            }
        ]
    },

    // Without descriptors
    {
        image: {
            src: `https://picsum.photos/id/${id3}/768/432`,
            alt: 'Patient smiles without descriptor.'
        },
        sources: [
            {
                srcset: [
                    {
                        path: `https://picsum.photos/id/${id3}/768/430`
                    },
                    {
                        path: `https://picsum.photos/id/${id3}/1280/720`
                    },
                    {
                        path: `https://picsum.photos/id/${id3}/1920/1080`
                    }
                ],
                media: '(min-width: 480px)'
            },
            {
                srcset: [
                    {
                        path: `https://picsum.photos/id/${id3}/640/36`
                    }
                ],
                media: '(max-width: 479px)'
            }
        ]
    }
];

export const mockPictureSingleSource = {
    image: {
        src: `https://picsum.photos/id/${id1}/768/432`,
        alt: 'US News ranks Advocate Health #1 in the nation.'
    },
    desktopLgSrc: `https://picsum.photos/id/${id1}/1920/1080`,
    desktopSrc: `https://picsum.photos/id/${id1}/1280/720`,
    tabletLgSrc: `https://picsum.photos/id/${id1}/768/432`,
    tabletSrc: `https://picsum.photos/id/${id1}/640/360`,
    mobileSrc: `https://picsum.photos/id/${id2}/480/270`
};
