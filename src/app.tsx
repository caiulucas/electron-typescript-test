import * as ReactDOM from "react-dom";
import * as React from "react";
import "reflect-metadata";
import {database} from './database/database';
import { Fetcher } from "./components/Fetcher";

ReactDOM.render(<Fetcher database={database} />, document.getElementById('root'));