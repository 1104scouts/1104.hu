export enum BlogType {
  TABOR = 'Tábor',
  TEAM = 'Csapatprogram',
  ORS = 'Örsi program'
}

export const BlogTypeColor: Record<BlogType, string> = {
  [BlogType.TABOR]: '#8CC83C',
  [BlogType.TEAM]: '#1E87BD',
  [BlogType.ORS]: '#C04D1D'
};

