"use client";

import { useActionState } from "react";
import { loginAction } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, undefined);

  return (
    <form action={formAction} className="space-y-4 w-full max-w-sm mx-auto">
      <div className="space-y-2">
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="admin@himalayanframes.com"
          required
          className="bg-card text-card-foreground border-border"
        />
      </div>
      <div className="space-y-2">
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          required
          className="bg-card text-card-foreground border-border"
        />
      </div>
      
      {state?.error && (
        <p className="text-sm text-destructive">{state.error}</p>
      )}

      <Button type="submit" disabled={isPending} className="w-full bg-brand-accent hover:bg-brand-gold text-white">
        {isPending ? "Authenticating..." : "Sign In"}
      </Button>
    </form>
  );
}
