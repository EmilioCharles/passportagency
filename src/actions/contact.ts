"use server";

import { z } from "zod";

const contactSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormState = {
    errors?: {
        firstName?: string[];
        lastName?: string[];
        email?: string[];
        subject?: string[];
        message?: string[];
    };
    message?: string;
    success?: boolean;
};

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    const validatedFields = contactSchema.safeParse({
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Please fix the errors below.",
            success: false,
        };
    }

    // Simulate email sending or database storage
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Contact form submitted:", validatedFields.data);

    return {
        success: true,
        message: "Message sent successfully! We'll get back to you soon.",
        errors: {},
    };
}
