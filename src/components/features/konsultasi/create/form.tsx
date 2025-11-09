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
import { Combobox } from "@/components/comboBox";
const formSchema = z.object({
  pasien: z.string(),
  nama_gejala: z.string().min(3, {
    message: "kode penyakit must be at least 3 characters.",
  }),
  poin_gejala: z.string(),
});
export default function KonsultasiCreateForm() {
  const [isLoading, setIsloading] = useState(false);
  const [dataPasien, setDataPasien] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pasien: "",
      nama_gejala: "",
      poin_gejala: "",
    },
  });

  const fetchPasien = async () => {
    try {
      const response = await fetch("/api/pasien");
      if (!response.ok) {
        throw new Error("Failed to fetch pasien data");
      }
      const data = await response.json();
      const options = data.map((item: any) => ({
        value: item.id,
        label: item.nama_lengkap,
      }));
      setDataPasien(options);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPasien();
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { pasien, nama_gejala, poin_gejala } = values;
    try {
      setIsloading(true);
      const res = await fetch("/api/gejala", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pasien,
          nama_gejala,
          poin_gejala,
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
            name="pasien"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pasien</FormLabel>
                <FormControl>
                  <Combobox
                    value={field.value}
                    onChange={field.onChange}
                    options={dataPasien}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
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
          /> */}
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
                      <SelectItem value="Ringan">Ringan</SelectItem>
                      <SelectItem value="Sedang">Sedang</SelectItem>
                      <SelectItem value="Berat">Berat</SelectItem>
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
