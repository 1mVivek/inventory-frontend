import { getActivity } from "../services/api";

export async function loadStockActivity() {
  return await getActivity();
}
