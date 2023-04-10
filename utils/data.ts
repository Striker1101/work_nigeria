import { useDispatch } from "react-redux";
import { nav } from "@/redux/action";
export function HideNav(payload: boolean) {
  const dispatcher = useDispatch();
  dispatcher(nav(payload));
}
