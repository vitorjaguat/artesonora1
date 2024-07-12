export function absoluteUrl(path: string) {
  return `${
    process.env?.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
  }${path}`;
}

export function formatPostType(type: string) {
  switch (type) {
    case 'Na História':
      return 'na-historia';
    case 'Podcast':
      return 'podcast';
    case 'Mixtape':
      return 'mixtape';
    case 'Varanda Sonora':
      return 'varanda-sonora';
    default:
      return type;
  }
}
