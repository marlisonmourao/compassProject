import api from './api';

export async function getEntriesDailys() {
  try {
    const {data} = await api.get('/daily_entries');
    return data;
  } catch (error) {
    console.warn(error);
  }
}

export async function getDaily(id) {
  try {
    const {data} = await api.get(`/daily_entries/${id}`);
    return data;
  } catch (error) {
    console.warn(error);
  }
}

export async function getActivities() {
  try {
    const {data} = await api.get('/activities');
    return data;
  } catch (error) {
    console.warn(error);
  }
}

export async function addNewDaily(data) {
  try {
    const response = await api.post('/daily_entries', data);
    console.log('certo');
    return response.data;
  } catch (error) {
    console.log('Erro ao adicionar Card', error);
  }
}

export async function updateDaily(daily, id) {
  try {
    const {data} = await api.put(`/daily_entries/${id}`, daily);
    return data;
  } catch (error) {
    console.warn(error);
  }
}
