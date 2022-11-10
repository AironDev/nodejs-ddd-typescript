export interface Tutorial {
  id?: string;
  title?: string;
  content?: string;
  category?: string;
  author: string;
  isPublished: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type TutorialCollection = Array<Tutorial>;
