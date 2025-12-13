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
import { toast } from "sonner";
const formSchema = z.object({
  kd_pengetahuan: z.string().min(3, {
    message: "kode pengetahuan must be at leat 3 characters.",
  }),
  kd_gejala: z.string().min(3, {
    message: "kode gejala must be at least 3 characters.",
  }),
  kd_penyakit: z.string().min(3, {
    message: "kode penyakit must be at least 3 characters.",
  }),
});
export default function PengetahuanEditForm({
  pengetahuanId,
}: {
  pengetahuanId: string;
}) {
  const [isLoading, setIsloading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [penyakitOptions, setPenyakitOptions] = useState<
    { value: string; label: string }[]
  >([]);
  const [gejalaOptions, setGejalaOptions] = useState<
    { value: string; label: string }[]
  >([]);
  const [error, setError] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      kd_pengetahuan: "",
      kd_gejala: "",
      kd_penyakit: "",
    },
  });

  useEffect(() => {
    async function loadAll() {
      try {
        const resP = await fetch("/api/penyakit");
        const penyakit = await resP.json();
        const optionsP = penyakit.map((item: any) => ({
          value: item.kd_penyakit,
          label: item.nama_penyakit,
        }));
        setPenyakitOptions(optionsP);
        const resG = await fetch("/api/gejala");
        const gejala = await resG.json();

        const optionsG = gejala.map((item: any) => ({
          value: item.kd_gejala,
          label: item.nama_gejala,
        }));

        setGejalaOptions(optionsG);
        const res = await fetch(`/api/pengetahuan/${pengetahuanId}`);
        const data = await res.json();
        form.reset({
          kd_pengetahuan: data.kd_pengetahuan,
          kd_gejala: data.kd_gejala,
          kd_penyakit: data.kd_penyakit,
        });
      } catch (error) {
        console.log("error", error);
      } finally {
        setInitialLoading(false);
      }
    }
    loadAll();
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { kd_pengetahuan, kd_gejala, kd_penyakit } = values;
    try {
      setIsloading(true);
      const res = await fetch(`/api/pengetahuan/${pengetahuanId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kd_pengetahuan,
          kd_gejala,
          kd_penyakit,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error);
        return;
      }
      form.reset();
      toast.success(data.message);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsloading(false);
    }
  }
  if (initialLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="kd_pengetahuan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kode Pengetahuan</FormLabel>
                <FormControl>
                  <Input placeholder="Kode Pengetahuan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kd_penyakit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Penyakit</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih Kode Penyakit" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {penyakitOptions.map((map) => (
                        <SelectItem value={map.value}>{map.value}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kd_gejala"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kode Gejala</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih Kode Gejala" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {gejalaOptions.map((map) => (
                        <SelectItem value={map.value}>{map.value}</SelectItem>
                      ))}
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
