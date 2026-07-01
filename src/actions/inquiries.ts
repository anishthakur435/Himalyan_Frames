"use server";

import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const inquirySchema = z.object({
  client_name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please provide more details in your message"),
  source: z.string().optional(),
  website: z.string().optional(), // honeypot field
});

export async function submitInquiry(data: z.infer<typeof inquirySchema>) {
  try {
    const validatedData = inquirySchema.parse(data);

    // Honeypot check
    if (validatedData.website) {
      console.warn("Spam detected via honeypot");
      return { success: true }; // Silently drop
    }

    const supabase = await createClient();

    const { error } = await (supabase.from("inquiries") as any).insert({
      client_name: validatedData.client_name,
      email: validatedData.email,
      phone: validatedData.phone || null,
      message: validatedData.message,
      source: validatedData.source || 'web_form',
      status: 'unread'
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return { success: false, error: "Failed to submit inquiry. Please try again or contact via WhatsApp." };
    }

    return { success: true };
  } catch (err: any) {
    if (err && err.name === "ZodError") {
      return { success: false, error: err.errors[0].message };
    }
    console.error("Inquiry submission error:", err);
    return { success: false, error: "An unexpected error occurred." };
  }
}
