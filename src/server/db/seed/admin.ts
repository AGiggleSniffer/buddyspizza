import { auth } from "@/server/auth";

const createAdminUser = async () => {
    await auth.api.signUpEmail({
        body: {
            email: "admin@example.com",
            password: "Password123!",
            name: "Admin User",
        },
    });
}

createAdminUser();