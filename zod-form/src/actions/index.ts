'use server';

import { signupSchema } from "@/schemas";
import z from "zod";

async function createUser(values: z.infer<typeof signupSchema>){
    
}