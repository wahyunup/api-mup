import { Sequelize } from "sequelize";

const db = new Sequelize("crudDb_amratheras", "crudDb_amratheras", "3c7c78b4e05c2b7bb7f5044875f2522f422f25e3",{
    host :'o1t8b.h.filess.io',
    dialect: 'mysql',
    port:"61002"
})

export default db