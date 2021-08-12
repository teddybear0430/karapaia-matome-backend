import { config } from 'aws-sdk';

// 警告を回避するためにconfig.updateでregionを指定
// https://www.fixes.pub/program/578906.html
export const awsConfigUpdate = () => {
  config.update({
    region: 'ap-north-east-1',
  });
};

export const appConfig = {
  tableName: 'karapaia_matome',
  url: 'https://karapaia.com/',
  // pageNum: 5,
  pageNum: 1,
  divideLength: 25,
} as const;
