import { describe, expect, it } from "vitest";
import { orderSchema } from "../src/lib/validators";
describe("orderSchema",()=>{
  it("accepts a valid guest order",()=>{
    const parsed=orderSchema.safeParse({customerName:"Nguyen Van A",email:"a@example.com",phone:"0901234567",address:"12 Nguyen Trai, Quan 1",items:[{productId:"prod_123",quantity:2}]});
    expect(parsed.success).toBe(true);
  });
  it("rejects invalid email and zero quantity",()=>{
    const parsed=orderSchema.safeParse({customerName:"A",email:"invalid",phone:"123",address:"short",items:[{productId:"x",quantity:0}]});
    expect(parsed.success).toBe(false);
  });
});