export interface ApiImage {
  _id: string;
  createdAt: string;
  media: string;
  name: string;
  private: boolean;
  updatedAt: string;
  uploaded_by: string;
}

export interface AppImage {
  id: string;
  createdAt: string;
  mediaUrl: string;
  name: string;
  private: boolean;
  updatedAt: string;
  createdBy: string;
}
