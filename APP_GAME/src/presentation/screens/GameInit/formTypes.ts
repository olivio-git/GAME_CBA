import { FormSchemaFields } from "../../../domain/interfaces/FormSchemaFields";

export const formJoin: FormSchemaFields = {
    username: { label: "Username", name: "userName", type: "text", required: true },
    code: { label: "Code", name: "Code", type: "text", required: true }
};

export const formCreate: FormSchemaFields = {
    name: { label: "Name", name: "Name", type: "text", required: true },
    code: { label: "Code", name: "Code", type: "text", required: true },
    user: { label: "Username", name: "User", type: "text", required: true },
    password: { label: "Password", name: "Password", type: "password", required: true },
};