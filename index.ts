import { User, Company } from "./model/Model";
import { CustomMap } from "./CustomMap";

const map = new CustomMap();

const user = User.createRandom();

const company = Company.createRandom();

map.addMarker(user);
map.addMarker(company);
