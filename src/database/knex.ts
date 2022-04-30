import config from "../../knexfile";
import knex from "knex";

const database = knex({...config.development})

export default database;