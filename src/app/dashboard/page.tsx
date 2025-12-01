
import Link from "next/link";
import { Plus, FileText } from "lucide-react";

export default async function DashboardPage() {
    // Mock user for no-auth mode
    const user = {
        firstName: "Guest",
        lastName: "User",
        emailAddresses: [{ emailAddress: "guest@example.com" }],
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-nshara-blue">
                        Welcome back, {user.firstName || "Traveler"}!
                    </h2>
                    <p className="text-muted-foreground mt-2">
                        Here is an overview of your passport applications.
                    </p>
                </div>
                <Link
                    href="/dashboard/new"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-nshara-yellow text-nshara-black hover:bg-nshara-yellow/90 h-10 px-4 py-2"
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Start New Application
                </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Mock Application Card */}
                <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
                    <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="tracking-tight text-sm font-medium">
                            Regular Passport
                        </h3>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="p-6 pt-0">
                        <div className="text-2xl font-bold">Draft</div>
                        <p className="text-xs text-muted-foreground">
                            Last updated 2 hours ago
                        </p>
                    </div>
                </div>

                {/* Empty State Placeholder if no apps */}
                <div className="rounded-xl border border-dashed bg-card text-card-foreground shadow-sm flex flex-col items-center justify-center p-6 text-center h-[150px]">
                    <p className="text-sm text-muted-foreground">
                        You have no other active applications.
                    </p>
                </div>
            </div>
        </div>
    );
}
