const API_BASE_URL = 'http://localhost:8000/api';

export async function getSmartphones() {
  const res = await fetch(`${API_BASE_URL}/products?category=moviles`);
  if (!res.ok) {
    throw new Error('Error al cargar smartphones');
  }
  const json = await res.json();
  return json.data; // 👈 aquí está la clave
}

export async function getTablets() {
  const res = await fetch(`${API_BASE_URL}/products?category=tablets`);
  if (!res.ok) {
    throw new Error('Error al cargar tablets');
  }
  const json = await res.json();
  return json.data; // 👈 lo mismo
}

export async function getPortatiles() {
  const res = await fetch(`${API_BASE_URL}/products?category=portatiles`);
  if (!res.ok) {
    throw new Error('Error al cargar portátiles');
  }
  const json = await res.json();
  return json.data;
}

export async function getPantallas() {
  const res = await fetch(`${API_BASE_URL}/products?category=pantallas`);
  if (!res.ok) {
    throw new Error('Error al cargar pantallas');
  }
  const json = await res.json();
  return json.data;
}
export async function getOrdenadores() {
  const res = await fetch(`${API_BASE_URL}/products?category=ordenadores`);
  if (!res.ok) {
    throw new Error('Error al cargar ordenadores');
  }
  const json = await res.json();
  return json.data;
}
