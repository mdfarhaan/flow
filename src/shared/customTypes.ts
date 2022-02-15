export interface fileDoc {
  fileName: string;
  location: string;
  size: number;
  code: string;
  type: string;
}

export interface s3Params {
  Bucket: string;
  Key: string;
  Body: any;
  contentType: string;
}
