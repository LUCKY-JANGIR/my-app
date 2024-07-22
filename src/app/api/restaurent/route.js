import { connectionStr } from "@/app/lib/db";
import { restaurantschema } from "@/app/lib/restaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export  async function GET(){
    await mongoose.connect(connectionStr,{useNewUrlParser:true})
    console.log('connected')
    const data = await restaurantschema.find()
    console.log(data)
    return NextResponse.json({result:true,data:data})
}