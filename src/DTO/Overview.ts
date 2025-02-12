import { OverAllRate } from "./OverAllRate"
import { Tagcolor } from "./Tagcolor"

 export type Overview = {
    Name: string
    College: string
    Department: string
    Subjects: Tagcolor[] 
    OverAllRate: OverAllRate
}