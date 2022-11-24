import { scoreUrl } from "./constants";

export async function IncrementUserScore(id: string, score: number) {
  try {
    const url = `${scoreUrl}/${id}/${score}`;
    const res = await fetch(url, {
      method: 'post'
    });
    return await res.json();
  } catch (e) {
    return {};
  }
} 