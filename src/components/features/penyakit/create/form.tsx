"use client";

import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { useState } from "react";
import { LoadingSpinner } from "@/components/LoadingSpinner";
const formSchema = z.object({
  kd_penyakit: z.string().min(3, {
    message: "kode penyakit must be at least 3 characters.",
  }),
  nama_penyakit: z.string().min(5, {
    message: "nama penyakit must be at least 5 characters.",
  }),
});
export default function PenyakitCreateForm() {
  const [isLoading, setIsloading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      kd_penyakit: "",
      nama_penyakit: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { kd_penyakit, nama_penyakit } = values;
    try {
      setIsloading(true);
      const res = await fetch("/api/penyakit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kd_penyakit,
          nama_penyakit,
        }),
      });
      if (!res.ok) throw new Error("Gagal menambahkan data penyakit");
      form.reset();
      alert("Data penyakit berhasil ditambahkan!");
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsloading(false);
    }
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="kd_penyakit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kode Penyakit</FormLabel>
                <FormControl>
                  <Input placeholder="Kode Penyakit" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nama_penyakit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Penyakit</FormLabel>
                <FormControl>
                  <Input placeholder="Nama Penyakit" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <LoadingSpinner className="w-4 h-4" />
                <span>Menyimpan...</span>
              </div>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
    </>
  );
}
