const GALLERIES = {
  MISC: {
    path: require.context('./pixelArtwork/MISC', false, /\.(png|jpe?g|svg)$/),
    name: 'Pixel Artwork',
    subtitle: '',
  },
  Kanto: {
    path: require.context(
      './pixelArtwork/KantoRedrawn',
      false,
      /\.(png|jpe?g|svg)$/
    ),
    name: 'Kanto Redrawn',
    subtitle: 'Same palette, new imagination, no limits.',
  },
  FF: {
    path: require.context(
      './pixelArtwork/FullmetalFantasy',
      false,
      /\.(png|jpe?g|svg)$/
    ),
    name: 'Fullmetal Fantasy',
    subtitle: 'FMAB x FF6',
  },
  Sevii: {
    path: require.context(
      './pixelArtwork/SeviiBurn',
      false,
      /\.(png|jpe?g|svg)$/
    ),
    name: 'Sevii Burn',
    subtitle: 'What if Pokémon had a 2D action-adventure spin-off?',
  },
};

export default GALLERIES;
