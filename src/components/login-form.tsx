'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { useState } from "react";

interface LoginFormProps{
  email: string;
  password: string;
}

type PasswordInputProps = {
  field: UseFormRegisterReturn | any
  [key: string]: any
}

//Agrega lo de ver o ocultar la contraseña
function PasswordInput({ field, ...props }: PasswordInputProps) {
  const [show, setShow] = useState(false)

  return (
    <div className="relative">
      <Input
        type={show ? "text" : "password"}
        {...field}
        {...props}
        className="pr-10"
      />
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        tabIndex={-1}
      >
        {show ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
    </div>
  )
}

export function LoginForm() {
  const form = useForm<LoginFormProps>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = (data: any) => {
    // Aquí harás el POST a tu endpoint de Laravel (puedes usar Inertia.post, fetch, axios, etc)
    console.log(data);
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Administrador de Invitaciones</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Ingresa tus crendeciales para inciar sesión.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 ">
          {/* Correo */}
          <FormField
            control={form.control}
            name="email"
            rules={{
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Correo inválido, por favor intenta de nuevo.",
              },
              required: "El correo es obligatorio, por favor ingresa tu correo."
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo electronico</FormLabel>
                <FormControl>
                  <Input
                    placeholder="ej. correo@gmail.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Contraseña */}
          <FormField
            control={form.control}
            name="password"
            rules={{
              required: "La contraseña es obligatoria, por favor ingresa la contraseña."
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <PasswordInput field={field} placeholder="*******" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={form.formState.isSubmitting}>Entrar</Button>
        </form>
      </Form>
    </div>
  )
}