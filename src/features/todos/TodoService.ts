import { AxiosResponse } from 'axios';
import BaseService from '../../services/common/BaseService';
import { ITodo } from './models';

const baseService = new BaseService();

const getTodos = async (data = {}, query = {}): Promise<ITodo[]> => {
  const queryString = baseService.qs.stringify(query);
  // @ts-ignore
  const path = baseService.url.build('todos');
  const url = BaseService.combine(path, queryString);
  const response: AxiosResponse<ITodo[]> = await baseService.get(url, data);
  return response.data;
};
export { getTodos };
export default {};
