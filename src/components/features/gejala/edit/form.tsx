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
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const formSchema = z.object({
  kd_gejala: z.string().min(3, {
    message: "kode penyakit must be at least 3 characters.",
  }),
  nama_gejala: z.string().min(3, {
    message: "kode penyakit must be at least 3 characters.",
  }),
  poin_gejala: z.string(),
});
export default function GejalaEditForm({ gejalaId }: { gejalaId: string }) {
  const [isLoading, setIsloading] = useState(false);
  const [initialData, setInitialData] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      kd_gejala: "",
      nama_gejala: "",
      poin_gejala: "",
    },
  });

  async function fetchData() {
    try {
      const res = await fetch(`/api/gejala/${gejalaId}`);
      const data = await res.json();
      form.reset({
        kd_gejala: data.kd_gejala,
        nama_gejala: data.nama_gejala,
        poin_gejala: data.poin_gejala,
      });
    } catch (error) {
      console.log("error", error);
    } finally {
      setInitialData(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { kd_gejala, nama_gejala, poin_gejala } = values;
    try {
      setIsloading(true);
      const res = await fetch(`/api/gejala/${gejalaId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kd_gejala,
          nama_gejala,
          poin_gejala,
        }),
      });
      if (!res.ok) throw new Error("Gagal menambahkan data gejala");
      form.reset();
      alert("Data gejala berhasil diupdate!");
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsloading(false);
    }
  }
  if (initialData)
    return (
      <div className="flex h-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="kd_gejala"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kode Gejala</FormLabel>
                <FormControl>
                  <Input placeholder="Kode Gejala" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nama_gejala"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Gejala</FormLabel>
                <FormControl>
                  <Textarea placeholder="Masukkan Gejala" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="poin_gejala"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Poin Gejala</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih Poin Gejala" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="ringan">Ringan</SelectItem>
                      <SelectItem value="sedang">Sedang</SelectItem>
                      <SelectItem value="berat">Berat</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
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
