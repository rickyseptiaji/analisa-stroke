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
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Combobox } from "@/components/comboBox";
import { toast } from "sonner";

const formSchema = z.object({
  pasienId: z.string().min(1, "Pilih pasien terlebih dahulu"),
  jawaban: z.array(z.string()).optional(),
});

export default function KonsultasiCreateForm() {
  const [isLoading, setIsloading] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [dataPasien, setDataPasien] = useState<
    { value: string; label: string }[]
  >([]);
  const [dataGejala, setDataGejala] = useState<
    { kd_gejala: string; nama_gejala: string }[]
  >([]);
  const [showPertanyaan, setShowPertanyaan] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pasienId: "",
      jawaban: [],
    },
  });

  const fetchPasien = async () => {
    const response = await fetch("/api/pasien");

    const data = await response.json();
    if (!response.ok) {
      toast.error(data.message || "Gagal mengambil data pasien");
      return;
    }
    const options = data.map((item: any) => ({
      value: item.id.toString(),
      label: item.nama_lengkap,
    }));
    setDataPasien(options);
  };

  const fetchGejala = async () => {
    const response = await fetch("/api/gejala");

    const data = await response.json();
    if (!response.ok) {
      toast.error(data.message || "Gagal mengambil data gejala");
      return;
    }
    setDataGejala(data);
  };
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoadingData(true);
        await Promise.all([fetchPasien(), fetchGejala()]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingData(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    setShowPertanyaan(!!form.watch("pasienId"));
  }, [form.watch("pasienId")]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsloading(true);
      const res = await fetch("/api/konsultasi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || "Gagal menyimpan konsultasi");
        return;
      }
      toast.success(data.message || "Konsultasi berhasil disimpan");
      form.reset();
      setShowPertanyaan(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsloading(false);
    }
  }

  if (isLoadingData) {
    return (
      <div className="flex h-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="pasienId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pasien</FormLabel>
              <FormControl>
                <Combobox
                  value={field.value}
                  onChange={(val) => field.onChange(val)}
                  options={dataPasien}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {showPertanyaan && (
          <div className="space-y-2">
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full border-collapse text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-2 text-left w-[80%]">Pertanyaan</th>
                    <th className="border p-2 text-center w-[20%]">Ceklis</th>
                  </tr>
                </thead>
                <tbody>
                  {dataGejala.map((item) => (
                    <FormField
                      key={item.kd_gejala}
                      control={form.control}
                      name="jawaban"
                      render={({ field }) => {
                        const checked = field.value?.includes(item.kd_gejala);
                        return (
                          <tr key={item.kd_gejala} className="hover:bg-gray-50">
                            <td className="border p-2">{item.nama_gejala}</td>
                            <td className="border text-center">
                              <FormControl>
                                <Checkbox
                                  checked={checked}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...(field.value || []),
                                          item.kd_gejala,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.kd_gejala
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                            </td>
                          </tr>
                        );
                      }}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

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
  );
}
