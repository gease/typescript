import { User, Company } from "./model/Model";
import { CustomMap } from "./CustomMap";

const map = new CustomMap();

const user = new User();

const company = new Company();

map.addMarker(user);
map.addMarker(company);
