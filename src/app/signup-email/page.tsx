import AuthForm from "@/components/AuthForm";

export default function SignUpEmailPage() {
  return (
    <div className="flex flex-col gap-y-4 justify-center p-8">
      <h1 className="text-2xl font-bold">Firebase Auth with NextAuth.js</h1>
      <AuthForm />
    </div>
  );
}
