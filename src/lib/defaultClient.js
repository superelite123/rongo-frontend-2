// @flow
import axios from 'axios';
import storage from './storageAsync'
const baseURL = 'http://192.168.0.100:8000'//'http://192.168.0.101:8888'
//const token = storage.get('token');
const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjAuMTAwOjgwMDBcL2FwaVwvYXV0aFwvbG9naW5cL3NlbGxlclwvMmZhIiwiaWF0IjoxNTk1Mzc3Njc2LCJleHAiOjE1OTYyNDE2NzYsIm5iZiI6MTU5NTM3NzY3NiwianRpIjoiN2h6aXMwTFFIZ2d2cld3YSIsInN1YiI6NCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.1yyNaK_OQE4WgP7G5cVZQf6fHuDdjxEY6Rp2ZPvjBHw"
const defaultClient = axios.create({
    baseURL: baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      Accept: 'application/json',
      Authentication: `Bearer ${token}`,
    },
});

export default defaultClient;
