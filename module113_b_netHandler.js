// Module 113B - Network Handler
export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network error");
    return await response.json();
  } catch (e) {
    console.error("Fetch error:", e);
    return null;
  }
}