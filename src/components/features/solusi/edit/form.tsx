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
import { Combobox } from "@/components/comboBox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const formSchema = z.object({
  kd_penyakit: z.string().min(3, {
    message: "kode penyakit must be at least 3 characters.",
  }),
  solusi: z.string().min(5, {
    message: "solusi must be at least 5 characters.",
  }),
});
export default function SolusiEditForm({solusiId}: {solusiId: string}) {
  const [isLoading, setIsloading] = useState(false);
  const [penyakitOptions, setPenyakitOptions] = useState<
    { value: string; label: string }[]
  >([]);
  const [loadingPenyakit, setLoadingPenyakit] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      kd_penyakit: "",
      solusi: "",
    },
  });
  useEffect(() => {
    async function fetchPenyakit() {
      try {
        const res = await fetch("/api/penyakit");
        if (!res.ok) throw new Error("Gagal mengambil data penyakit.");
        const data = await res.json();
        const options = data.map((item: any) => ({
          value: item.kd_penyakit,
          label: item.nama_penyakit,
        }));
        setPenyakitOptions(options);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoadingPenyakit(false);
      }
    }

    fetchPenyakit();
  }, []);
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { kd_penyakit, solusi } = values;
    try {
      setIsloading(true);
      const res = await fetch("/api/solusi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kd_penyakit,
          solusi,
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

  if (loadingPenyakit)
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
            name="kd_penyakit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kode Penyakit</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih Kode Penyakit" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {penyakitOptions.map((map) => (
                      <SelectGroup>
                        <SelectItem value={map.value}>{map.value}</SelectItem>
                      </SelectGroup>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="solusi"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Solusi</FormLabel>
                <FormControl>
                  <Textarea placeholder="Masukkan solusi" {...field} />
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
