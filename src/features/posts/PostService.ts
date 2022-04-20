import { AxiosResponse } from 'axios';
import BaseService from '../../services/common/BaseService';
import { IPost } from './models';

const getPosts = async (data = {}, query = {}): Promise<IPost[]> => {
  const baseService = new BaseService();
  const queryString = baseService.qs.stringify(query);
  const path = baseService.url.build('posts');
  const url = BaseService.combine(path, queryString);
  const response: AxiosResponse<IPost[]> = await baseService.get(url, data);
  return response.data;
};

export { getPosts };
export default {};
