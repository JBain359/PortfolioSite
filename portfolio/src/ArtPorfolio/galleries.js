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
  Sonic: {
    path: require.context(
      './pixelArtwork/SonicBattleHeroes',
      false,
      /\.(png|jpe?g|svg)$/
    ),
    name: 'Sonic Battle Heroes',
    subtitle: 'Sonic Heroes x Sonic Battle',
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
      /\.(png|jpe?g|svg|gif)$/
    ),
    name: 'Sevii Burn',
    subtitle: 'What if Pokémon had a 2D action-adventure spin-off?',
  },
  MMAnimations: {
    path: require.context(
      './pixelArtwork/Animation/ManekiMancer',
      false,
      /\.(png|jpe?g|svg|gif)$/
    ),
    name: 'Animations',
    subtitle: 'Maneki Mancer',
  },
  FMAnimations: {
    path: require.context(
      './pixelArtwork/Animation/FortMortem',
      false,
      /\.(png|jpe?g|svg|gif)$/
    ),
    name: '',
    subtitle: 'Fort Mortem',
  },
  MiscAnimations: {
    path: require.context(
      './pixelArtwork/Animation/Misc',
      false,
      /\.(png|jpe?g|svg|gif)$/
    ),
    name: '',
    subtitle: 'Misc',
  },
};

export default GALLERIES;
