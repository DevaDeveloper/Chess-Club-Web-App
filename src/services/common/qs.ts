import qs from 'qs';

const stringify = (object: object) => decodeURIComponent(qs.stringify(object));

const parse = (value : string) => qs.parse(value);

export {
  stringify,
  parse,
};
